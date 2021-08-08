const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Boston', (error, data) => {
    if(error) {
        return console.log(error)
    } else {
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            } else {
                console.log(data.location)
                console.log(forecastData)
            }
        })
    }   
})
