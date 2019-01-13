export const CalcWeatherMood = cityWeatherArray => {
  const temperatureArray = cityWeatherArray.map(cityWeatherObj => cityWeatherObj.main.temp);
  // to replace undefined enteries if no rain in some elements with Zero for better average
  let rainVolumeArray = [0];

  // if the rain info is not sent then we skip this block & assume no rain as shown above in the initialization
  if (cityWeatherArray.rain !== undefined) {
    rainVolumeArray = cityWeatherArray.map(cityWeatherObj =>
      cityWeatherObj.rain["3h"] === undefined ? 0 : cityWeatherObj.rain["3h"]
    );
  }

  const windSpeedArray = cityWeatherArray.map(cityWeatherObj => cityWeatherObj.wind["speed"]);
  const humidityArray = cityWeatherArray.map(cityWeatherObj => cityWeatherObj.main.humidity);

  // getting averages:
  const tempAvg = temperatureArray.reduce((acc, temp) => acc + temp) / temperatureArray.length;
  const rainVolAvg =
    rainVolumeArray.reduce((acc, rainVol) => acc + rainVol) / rainVolumeArray.length;
  const humidityAvg =
    humidityArray.reduce((acc, humidity) => acc + humidity) / humidityArray.length;
  const windSpeedAvg =
    windSpeedArray.reduce((acc, windSpeed) => acc + windSpeed) / windSpeedArray.length;

  // just here we assume some ideal meteric to calc devation of weather with them
  const perfectTemp = 21;
  const perfectWindSpeed = 4;
  const perfecthumidity = 70;
  const perfectRainVol = 0; //  (assuming you hate rain :D)

  // getting the deviation from perfect weather

  // getting the temp dev & then this is 50% of the gauge
  const tempDev = Math.abs(perfectTemp - tempAvg) / perfectTemp;
  // getting the wind speed dev & then this is 20% of the gauge
  const windSpeedDev = Math.abs(perfectWindSpeed - windSpeedAvg) / perfectWindSpeed;
  // getting the wind speed dev & then this is 10% of the gauge
  const humidityDev = Math.abs(perfecthumidity - humidityAvg) / perfecthumidity;
  // getting the wind speed dev & then this is 20% of the gauge
  const rainDev = Math.abs(perfectRainVol - rainVolAvg);

  // calc the weatherMood based on the above calculated deviations
  let weatherMood = 100 - [50 * tempDev + 20 * windSpeedDev + 10 * humidityDev + 20 * rainDev];

  // rounding the result to nearest digit
  weatherMood = Math.round(weatherMood);

  return weatherMood;
};
