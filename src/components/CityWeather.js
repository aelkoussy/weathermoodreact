import React, { Component } from "react";
import { CalcWeatherMood } from "../helperMethods/CalcWeatherMood";

export class CityWeather extends Component {
  render() {
    let weatherMood = null;

    // this is the weather object passed from the component caller
    if (this.props.cityWeatherForecast) {
      // calculate weather mood
      const weatherMoodIndex = CalcWeatherMood(this.props.cityWeatherForecast);
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

export default CityWeather;
