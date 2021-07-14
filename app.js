const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=89906dfb7f555d9f1870b074e1ec1aba&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log(`It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
})

