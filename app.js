const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=89906dfb7f555d9f1870b074e1ec1aba&query=&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
//     }
// })


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data' , data)
})

forecast(42.3605, -71.0596, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})