const test = require('ava')
const utils = require('../utils')

test('utils.generateTableFromData should output correct table info from weather data', (t) => {
  const data = {
    current: {
      humidity: 81,
      observationTime: '09:40 PM',
      pressure: 1009,
      temperature: 25,
      weatherDescriptions: ['Partly cloudy']
    },
    request: {
      query: 'Tokyo, Japan'
    }
  }

  const table = utils.generateTableFromData(data)
  const tableValues = Object.values(table)

  t.true(tableValues.some((value) => value.temperature === 25))
  t.true(tableValues.some((value) => value.pressure === 1009))
  t.true(tableValues.some((value) => value.humidity === 81))
})

test('utils.getMessageFromData should return the correct message from weather data', (t) => {
  const data = {
    weatherDescription: 'Partly cloudy',
    emoji: '🌥️',
    location: 'New York',
    observationTime: '10:00 PM'
  }

  const message = utils.getMessageFromData(data)
  t.is(message, "It's partly cloudy 🌥️  in New York at 10:00 PM")
})
