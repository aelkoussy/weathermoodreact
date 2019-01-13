import reducer from "./reducer";
import * as actions from "./actions";

describe("Reducer:", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({ weather: {} });
  });

  it("should return initial state even if wrong action is passed", () => {
    expect(
      reducer({ weather: {} }, { type: actions.WRONG_ACTION, weather: { rain: 0.5, temp: 27 } })
    ).toEqual({
      weather: {}
    });
  });

  it("Get weather data from API & add it in the weather state for each city", () => {
    expect(
      reducer(
        {
          weather: {}
        },
        {
          type: actions.GET_WEATHER,
          cityName: "Amsterdam",
          cityWeather: [
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
          ]
        }
      )
    ).toEqual(
      // note how this shall disappear
      {
        weather: {
          Amsterdam: [
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
          ]
        }
      }
    );
  });
});
