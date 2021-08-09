const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    console.log(process.argv)
    geocode(address, (error, data) => {
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
}