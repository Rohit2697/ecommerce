const express = require('express')
const errorLogging = require('./Logs/errorLogger')
const bodyParser = require('body-parser')
const cors=require('cors')
const app = express()
const port = process.env.PORT || 4000
app.use(cors())
const helper = require('./helper/helper')
const router=require('./Router/router')
app.use(bodyParser.json())
app.use('/', router)
//app.post('/location', helper.locationFetch)
app.use(errorLogging)

app.listen(port, () => {
    console.log("App is running on: ", port)
})


