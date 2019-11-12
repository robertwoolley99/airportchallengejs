function Weather() {
}

  Weather.prototype.forecast = function() {
    var randomWeather
    randomWeather = Math.floor(Math.random() * 10);
    if (randomWeather === 30) {
      return "Stormy";
    } else {
      return "Sunny";
    }
  };
