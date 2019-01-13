import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import CityWeather from "./CityWeather";

export class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  // the event param below is needed for proper functioning of the tab select handler
  handleChange = (event, value) => {
    this.setState({ value });
    console.log(`value ${value} was selected`);
    const chosenCity = ["Amsterdam", "Moscow", "New York"];
    const chosenCityID = [2759794, 524901, 5128638];

    // check if the weather was already retrieved for this city or not
    // if not found in state then we will get it

    if (this.props.weather[`${chosenCity[value]}`] === undefined) {
      // Get weather initially for this city
      this.props.getWeather(chosenCityID[value]);
      // update weather for this city every 10 minutes
      setInterval(() => {
        this.props.getWeather(chosenCityID[value]);
      }, 1000 * 60 * 10);
    }
  };

  componentDidMount() {
    // get initial weather for Amsterdam, passing cityID
    this.props.getWeather(2759794);
    // update the weather every 10 minutes
    setInterval(() => this.props.getWeather(2759794), 1000 * 60 * 10);
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static">
          <h3 className="main-title">The weather mood</h3>
        </AppBar>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Amsterdam" />
          <Tab label="Moscow" />
          <Tab label="New York" />
        </Tabs>

        <div className="main-content">
          {value === 0 && <CityWeather city="Amsterdam" cityId="2759794" />}
          {value === 1 && <CityWeather city="Moscow" cityId="524901" />}
          {value === 2 && <CityWeather city="New York" cityId="5128638" />}
        </div>
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
)(SimpleTabs);
