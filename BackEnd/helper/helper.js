const getLocation = require('../utilities/getLocation')
const helper = {}

helper.locationFetch = async (req, res, next) => {
    try {
        const lat = req.body.lat ? req.body.lat : 0
        const lon = req.body.lon ? req.body.lon : 0
        let returnData = await getLocation(lat, lon)
        res.status(200).send(returnData)
    } catch (err) {
        return next(err)
    }
}

module.exports = helper