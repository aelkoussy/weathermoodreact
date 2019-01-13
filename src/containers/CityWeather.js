import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { CalcWeatherMood } from "../helperMethods/CalcWeatherMood";

export class CityWeather extends Component {
  render() {
    let weatherMood = null;
    if (this.props.weather[this.props.city]) {
      // calculate weather mood
      const weatherMoodIndex = CalcWeatherMood(this.props.weather[this.props.city]);
      weatherMood = (
        <div>
          <p>
            The weather mood index for {this.props.city} is {weatherMoodIndex}
          </p>

          <div className="weather-gauge-wrapper">
            {/* here the height in the gauge is passed as a variable to control it (weatherMoodIndex) */}
            <div className="weather-gauge" style={{ height: weatherMoodIndex }} />
          </div>
        </div>
      );
    }

    return (
      <div>
        <h2>{this.props.city}</h2>
        {weatherMood}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: cityID => {
      dispatch(actions.getWeatherAsync(cityID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityWeather);
