const express = require('express')
const Customer = require('../models/customer')
const router = express.Router()
router.get('/', async (req, res) => {
  const customers = await Customer.find({})
  res.send(customers)
})

module.exports = router
