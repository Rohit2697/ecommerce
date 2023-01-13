const express = require('express')
const router = express.Router()
const helper = require('../helper/helper')
router.post('/location', helper.locationFetch)

module.exports=router