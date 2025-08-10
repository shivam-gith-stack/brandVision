const express = require("express")
const { register, login } = require('./controllers')
const router = express.Router()

router.route('/register').post(register)

module.exports = router