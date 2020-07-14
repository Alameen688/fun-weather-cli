const test = require('ava')
const sinon = require('sinon')
const runApp = require('../weather')
const { log } = require('../utils')

test.todo('app should run successfully when called with correct args')

test('app should log error text when called with no location args is passed', (t) => {
  const errorStub = sinon.stub(log, 'error')

  runApp()
  
  t.true(
    errorStub.calledWith('You need to pass one or more locations seperated by comma')
  )
})

test.todo('app should log error text when called with invalid args')
