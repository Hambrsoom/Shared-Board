const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const User     = require('../modules/user')
const Group    = require('../modules/groups')
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
  res.setHeader('Access-Control-Allow-Origin', '*');
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

//Creating new Group in the db
router.post('/create', (req, res) => {
  let reqGroup = req.body
  let group = new Group(reqGroup)
  group.save((err, savedGroup) => {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).send(savedGroup)
    }
  })
})

//retrieving all the groups from the db:


router.get('/home', (req, res) => {
  Group.find({}, function(err,gr) {
    if (err) {
      console.log(err)
    }
    else {
      console.log('retrieved list of groups')
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send(gr)
    }
  })
})

//retrieving a specific group from the db:
router.get('/home/search', (req, res) => {
  let groupData = req.body
  Group.find({ name: groupData.name }, (error, group) => {
    if (error) {
      console.log(error)
    }
    else {
      if (!group) {
        res.status(401).send('Invalid Group Name')
      }
      else {
        res.status(200).send(group)
      }
    }
  })
})

//Taken from Stackoverflow:
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get('/me', (req, res) => {
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), 'gi')
    Group.find({ name: regex }, (err, allgroups) => {
      if (err) {
        console.log(err)
      }
      else {
        var noMatch = ""
        if (allgroups.length < 1) {
          noMatch = "No match"

        }
        res.render("groups/index", { groups: allgroups, noMatch: noMatch })
      }
    })
    
  }
})

module.exports = router
