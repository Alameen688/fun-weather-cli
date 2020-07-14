const Table = require('cli-table')
const chalk = require('chalk')
const { getEmoji } = require('./emoji')

const log = {
  error: (message) => {
    //TODO: Add chalk error color
    console.log(message)
  }
}
const getMessageFromData = (data) =>
  chalk.yellow(
    "It's",
    chalk.bold(data.weatherDescription.toLowerCase()),
    `${data.emoji}  in`,
    chalk.blue.bold(data.location),
    `at ${data.observationTime}`
  )

const generateTableFromData = (data) => {
  const {
    humidity,
    observationTime,
    pressure,
    temperature,
    weatherDescriptions
  } = data.current
  const weatherDescription = weatherDescriptions[0]
  const emoji = getEmoji(weatherDescription)
  const weatherInfoMessage = getMessageFromData({
    weatherDescription,
    emoji,
    location: data.request.query,
    observationTime
  })
  console.log(weatherInfoMessage)
  const table = new Table()
  table.push({ temperature }, { pressure }, { humidity })
  return table
}

module.exports = {
  generateTableFromData,
  getMessageFromData,
  log
}
