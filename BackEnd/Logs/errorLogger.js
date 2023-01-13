const fs = require('fs')
const { promisify } = require('util')

const appendFile = promisify(fs.appendFile);

const errorLogging = async (err, req, res, next) => {
    if (err) {
        const errObj = {
            message: err.message,
            status: err.status ? err.status : 500
        }
        await appendFile('error.txt',  JSON.stringify(errObj)+"\n" )
        res.status(errObj.status).send(errObj)
    }
}
module.exports = errorLogging