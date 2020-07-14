#!/usr/bin/env node

const runApp = () => {
  const [executor, ignoredBin, ...args] = process.argv
  
  const action = args[0].split(', ')

  // Perform weather request
}

runApp()
