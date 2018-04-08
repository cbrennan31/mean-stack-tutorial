const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test')

const { User } = require('../models/user')

router.post('/users', (req, res) => {
  let user = new User({
    email: req.body.email,
    password: req.body.password
  })

  user.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
})

module.exports = router;
