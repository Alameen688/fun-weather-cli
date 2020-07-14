#!/usr/bin/env node
const { fireRequestLists, makeRequestListFromAction } = require('./request')
const { create: createSpinner } = require('./spinner')
const { log } = require('./utils')

const runApp = (args = []) => {
  if (!args.length) {
    return log.error(
      'You need to pass one or more locations seperated by comma'
    )
  }

  const action = args[0].split(', ')

  createSpinner('Fetching weather information')

  const requestList = makeRequestListFromAction(action)

  fireRequestLists(requestList)
}

const [executor, ignoredBin, ...args] = process.argv

runApp(args)

module.exports = runApp
