const emoji = {
  sun_behind_cloud: '🌥️',
  thunder_cloud_and_rain: '⛈️',
  rain_cloud: '🌧️',
  mostly_sunny: '🌤️',
  barely_sunny: '🌥️',
  partly_sunny_rain: '🌦️',
}

exports.getEmoji = (name) => {
  switch (name.toLowerCase()) {
    case 'partly cloudy':
      return emoji['sun_behind_cloud']
    case 'heavy rain, mist':
      return emoji['thunder_cloud_and_rain']
    case 'rain, mist':
      return emoji['rain_cloud']
    case 'sunny':
      return emoji['mostly_sunny']
    case 'clear':
      return emoji['barely_sunny']
    case 'shower in vicinity':
      return emoji['partly_sunny_rain']
    default:
      return emoji['rain_cloud']
  }
}
