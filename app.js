const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=89906dfb7f555d9f1870b074e1ec1aba&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
})

const url_2 ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGZvdGlzIiwiYSI6ImNrczJvc2Q5dDBxaHIyd3J5YXVqMmlhbm8ifQ.iHnpfKTSVHvyu8HG1WiEOQ&limit=1"

request({url: url_2, json: true }, (error, response) => {
    console.log(response.body.features)
})