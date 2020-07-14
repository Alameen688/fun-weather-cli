const axios = require('axios').default
const camelize = require('camelize')
const chalk = require('chalk')

const makeRequest = (location) => {
  const encodedLocation = encodeURIComponent(location)
  return axios
    .get(
      `http://api.weatherstack.com/current?access_key=a594455897abd90797159e220df05af8&query=${encodedLocation}`
    )
    .then((response) => ({
      resolved: true,
      location,
      response
    }))
    .catch((error) => ({
      resolved: false,
      location,
      error
    }))
}

const makeRequestListFromAction = (action) => {
  let requestList = []

  for (let i = 0; i < action.length; ) {
    const location = action[i]
    const postalCode = action[i + 1]
    if (location && parseInt(postalCode)) {
      i += 2
    } else {
      i += 1
    }
    const request = makeRequest(location)
    requestList.push(request)
  }
  return requestList
}

const fireRequestLists = async (requestList) => {
  const responseList = await Promise.all(requestList)
  try {
    global.spinner.succeed()
    let failedLocations = []
    responseList.forEach((result) => {
      if (result.resolved) {
        const { response } = result
        const weatherData = camelize(response.data)

        console.log(weatherData)
      } else {
        failedLocations.push(result.location)
      }
    })
    failedLocations.forEach((location) => {
      console.log('⛑  Unable to fetch weather data for', chalk.red(location))
    })
  } catch (error) {
    global.spinner.fail()
    console.log(error.message)
  }
}

module.exports = {
  fireRequestLists,
  makeRequest,
  makeRequestListFromAction
}
