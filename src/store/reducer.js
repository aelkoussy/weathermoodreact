import * as actions from "./actions";

const weatherObject = {};

const initialState = {
  weather: weatherObject
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // call API to get the Weather for a city
    case actions.GET_WEATHER:
      // deep copy the current state weather to avoid direct mutation of the state
      const updatedWeather = { ...state.weather };
      // update the new object with the API data
      updatedWeather[action.cityName] = action.cityWeather;

      // update the state immutably
      return {
        ...state,
        weather: updatedWeather
      };

    default:
      return state;
  }
};

export default reducer;
