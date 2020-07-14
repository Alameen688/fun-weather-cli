const test = require('ava')
const request = require('../request')
const utils = require('../utils')
const {
  interceptApiRequest,
  generateDataForLocation
} = require('./stub/_request')
const sinon = require('sinon')

global.spinner = {
  fail: () => {},
  succeed: () => {}
}

const actions = ['New York', 10005, 'Tokyo', 'São Paulo']

test.beforeEach((t) => {
  actions.forEach((location) => {
    interceptApiRequest(location)
  })

  t.context.requestList = request.makeRequestListFromAction(actions)
})

test('request.makeRequestListFromAction should return the correct list of Promises', (t) => {
  const requestList = t.context.requestList

  const listItemIsAPromise = typeof requestList[0].then === 'function'

  t.is(requestList.length, 3)
  t.true(listItemIsAPromise)
})

test('request.fireRequestLists should generate the right table data from weather data', async (t) => {
  const spy = sinon.stub(utils, 'generateTableFromData').returns({})

  await request.fireRequestLists(t.context.requestList)

  const weatherDataResponse1 = generateDataForLocation(actions[0])
  const weatherDataResponse2 = generateDataForLocation(actions[2])
  const weatherDataResponse3 = generateDataForLocation(actions[3])

  t.deepEqual(spy.getCall(0).args[0], weatherDataResponse1)
  t.deepEqual(spy.getCall(1).args[0], weatherDataResponse2)
  t.deepEqual(spy.getCall(2).args[0], weatherDataResponse3)
})
