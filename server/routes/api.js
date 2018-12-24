const express = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const User     = require('../modules/user')
const db       = "mongodb://Hambrsoom:SharedBoard123!@ds042138.mlab.com:42138/sharedboard"

mongoose.connect(db, err => {
  if (err) {
    console.error('ERROR! ' + err)
  }
  else {
    console.log('Connected to mongodb')
  }
})
router.get('/', (req, res) => {
    res.send("From API route")
})

//post requist:

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    }
    else {
      res.status(200).send(registeredUser)
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({
    $or: [
      { email: userData.email },
      { username: userData.username }
    ]
  }, (error, user) => {
    if (error) {
      console.log(error)
    }
    else {
      if (!user) {
        res.status(401).send('Invalid Input')
      }
      else {
        if (user.password !== userData.password) {
          res.status(401).send('Inavalid password')
        }
        else {
          res.status(200).send(user)
        }
      }
    }
})
})

module.exports = router
