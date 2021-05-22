import axios from "axios";

export const GET_WEATHER = "GET_WEATHER";

const APPID = "881004c30eb4f93aa756c130be55edc3";

export const getWeather = (cityName, cityWeather) => {
  return { type: GET_WEATHER, cityName, cityWeather };
};

export const getWeatherAsync = cityID => {
  return dispatch => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?APPID=${APPID}&id=${cityID}&units=metric`
      )
      //   passing the city name & the response weather array to the action
      .then(response => {
        dispatch(getWeather(response.data.city.name, response.data.list));
      })
      .catch(console.log("Sorry, something went wrong"));
  };
};
