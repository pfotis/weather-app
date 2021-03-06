const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    // console.log(process.argv)
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if(error) {
            return console.log(error)
        } else {
            // const { latitude, longitude, location } = data
            forecast(latitude, longitude, (error, forecastData) => {
                if(error) {
                    return console.log(error)
                } else {
                    console.log(location)
                    console.log(forecastData)
                }
            })
        }   
    })
}