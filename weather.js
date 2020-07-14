#!/usr/bin/env node
const { log } = require('./utils')

const runApp = (args = []) => {
  if (!args.length) {
    return log.error(
      'You need to pass one or more locations seperated by comma'
    )
  }

  const action = args[0].split(', ')

  // Perform weather request
}

const [executor, ignoredBin, ...args] = process.argv

runApp(args)

module.exports = runApp