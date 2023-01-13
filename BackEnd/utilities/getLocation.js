const axios = require('axios')

const getLocation = async (latitute, longitute) => {
    try {
        const url =
            "http://api.weatherstack.com/current?access_key=90bbc3dc4244aa575bf54997dfcbd1bf&query=" +
            latitute +
            "," +
            longitute +
            "&units=m";
        const { data } = await axios.get(url)

        return { location: data.location.name, country: data.location.country, state: data.location.region, temp: data.current.temperature + "°C" }
    } catch (err) {

        const newErr = new Error("unable to fetch weather")
        newErr.status = 500
        throw newErr
    }
}
//getLocation(24.1720535, 88.2753049)
module.exports = getLocation