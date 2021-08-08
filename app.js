const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=89906dfb7f555d9f1870b074e1ec1aba&query=&units=f'
// const geocodeURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGZvdGlzIiwiYSI6ImNrczJvc2Q5dDBxaHIyd3J5YXVqMmlhbm8ifQ.iHnpfKTSVHvyu8HG1WiEOQ&limit=1"

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`)
//     }
// })



// request({url: geocodeURL, json: true }, (error, response) => {
    
//     if(error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
    
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicGZvdGlzIiwiYSI6ImNrczJvc2Q5dDBxaHIyd3J5YXVqMmlhbm8ifQ.iHnpfKTSVHvyu8HG1WiEOQ&limit=1'
}

geocode('Melbourne', (error, data) => {

})