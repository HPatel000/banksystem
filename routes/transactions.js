const express = require('express')
const Transaction = require('../models/transaction')
const Customer = require('../models/customer')

const router = express.Router()

router.get('/', async (req, res) => {
  const transactions = await Transaction.find({}).sort({ date: -1 })
  res.send(transactions)
})

router.post('/', async (req, res) => {
  const { from, to, amount } = req.body
  try {
    const fromCustomer = await Customer.findById(from)
    const newFromBalance = Number(fromCustomer.balance) - Number(amount)
    Customer.updateOne({ _id: from }, { balance: newFromBalance }, err => {
      if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      } else {
        console.log('UPDATED')
      }
    })
    const toCustomer = await Customer.findById(to)
    const newToBalance = Number(toCustomer.balance) + Number(amount)
    Customer.updateOne({ _id: to }, { balance: newToBalance }, err => {
      if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      } else {
        console.log('UPDATED')
      }
    })
    const transaction = new Transaction({
      from: fromCustomer,
      to: toCustomer,
      amount,
    })
    transaction.save()
    res.json(transaction)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error')
  }
})

module.exports = router
