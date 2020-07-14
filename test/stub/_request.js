const nock = require('nock')

const mockData = {
  isTestData: true,
  request: {
    type: 'City',
    query: 'New York',
    language: 'en',
    unit: 'm'
  },
  location: {
    name: 'New York',
    country: 'Country',
    region: 'New York',
    localtime: '2020-07-14 06:44',
    localtimeEpoch: 1594709040
  },
  current: {
    observationTime: '10:44 AM',
    temperature: 23,
    weatherDescriptions: ['Partly cloudy'],
    pressure: 1012,
    humidity: 62
  }
}

const generateDataForLocation = (location) => {
  return {
    ...mockData,
    request: { ...mockData.request, query: location },
    location: { ...mockData.location, name: location, region: location }
  }
}

const interceptApiRequest = (location, success = true) => {
  const encodedLocation = encodeURIComponent(location)

  nock('http://api.weatherstack.com:80', { encodedQueryParams: true })
    .get('/current')
    .query({
      access_key: 'a594455897abd90797159e220df05af8',
      query: encodedLocation
    })
    .reply(200, generateDataForLocation(location))
}

module.exports = {
  generateDataForLocation,
  interceptApiRequest
}
