# Fun Weather CLI

This is a weather cli app project that displays weather information for a location or a number of locations seperated by comma.


## Installation

```bash
cd fun-weather-cli
npm install -g .
```

You can always uninstall using `npm uninstall -g .` in the project root.

## Usage
There are two (2) ways to run the app

### Not Installed

If you didn't run the installation described above, you can simply point to the `weather.js` file

```bash
./weather.js "New York, 10005, Tokyo, São Paulo, Pluto"
```

### Installed

If you performed the installation described in the [Installation](#installation) section 

```bash
fun-weather "New York, 10005, Tokyo, São Paulo, Pluto"
```


PS: You can obtain a new API key from [WeatherStack](https://weatherstack.com/signup/free) if the one included in this project is no longer functional.
