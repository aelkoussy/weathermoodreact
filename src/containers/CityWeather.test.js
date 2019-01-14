import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { CityWeather } from "./CityWeather";

configure({ adapter: new Adapter() });

describe("<CityWeather/>", () => {
  it("should render CityWeather component", () => {
    const wrapper = mount(<CityWeather weather={{}} />);
    expect(wrapper.find(CityWeather)).toHaveLength(1);
  });
  it("should show weatherMood in CityWeather component in the weather property for a city is found", () => {
    const wrapper = mount(
      <CityWeather
        city="Amsterdam"
        cityWeatherForecast={[
          {
            dt: 1547661600,
            main: {
              temp: 7.25,
              temp_min: 7.25,
              temp_max: 7.25,
              pressure: 1016.47,
              sea_level: 1016.38,
              grnd_level: 1016.47,
              humidity: 87,
              temp_kf: 0
            },
            weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10n" }],
            clouds: { all: 92 },
            wind: { speed: 10.12, deg: 225.001 },
            rain: { "3h": 0.23 },
            sys: { pod: "n" },
            dt_txt: "2019-01-16 18:00:00"
          },
          {
            dt: 1547672400,
            main: {
              temp: 7.39,
              temp_min: 7.39,
              temp_max: 7.39,
              pressure: 1014.98,
              sea_level: 1014.88,
              grnd_level: 1014.98,
              humidity: 90,
              temp_kf: 0
            },
            weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10n" }],
            clouds: { all: 92 },
            wind: { speed: 10.62, deg: 226.003 },
            rain: { "3h": 0.405 },
            sys: { pod: "n" },
            dt_txt: "2019-01-16 21:00:00"
          }
        ]}
      />
    );
    expect(wrapper.find(".weather-gauge")).toHaveLength(1);
    expect(wrapper.find(".weather-gauge-wrapper")).toHaveLength(1);
  });
});
