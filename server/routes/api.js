const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../modules/user')
const Group = require('../modules/groups')
const db = "mongodb://Hambrsoom:SharedBoard123!@ds042138.mlab.com:42138/sharedboard"
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hostlocal4200@gmail.com',
    pass: 'Localhost4200**'
  }
});
//For the twilio phone number
const accountSid = 'AC14388c36df0c62457756fd0c12897e72';
const authToken = '0529b8411773ebf84b8dcadad70e7f5d';
const client = require('twilio')(accountSid, authToken);



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
      {email: userData.email},
      {username: userData.username}
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
  Group.find({}, function (err, gr) {
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
  Group.find({name: groupData.name}, (error, group) => {
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
    Group.find({name: regex}, (err, allgroups) => {
      if (err) {
        console.log(err)
      }
      else {
        var noMatch = ""
        if (allgroups.length < 1) {
          noMatch = "No match"

        }
        res.render("groups/index", {groups: allgroups, noMatch: noMatch})
      }
    })

  }
})

module.exports = router


//Resetting password
router.put('/forgotpassword', function (req, res) {
  User.findOne({email: req.body.email}).select('username email').exec(function (err, user) {
      if (err)
        console.log(err);
      else {
        if (!user)
          res.status(401).send('Invalid user email');
        else if (!user.active)
          res.status(401).send('Account not activated yet');
        else {
          //For the email
          var mailOptions = {
            from: 'hostlocal4200@gmail.com',
            to: email,
            subject: 'Password Request',
            text: 'Hi! You recently requested a retrieval of your password from our website. We\'re happy to help.' +
            'The password associated with this account is: ' + user.password + '.\nRegards,\nThe Team.'
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          //For the number
          client.messages
            .create({
              body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
              from: '+15146127252',
              to: '+15558675310'//Need user phone number update in the form and db
            })
            .then(message => console.log(message.sid))
            .done();

          res.status(200).send('Please check your email/phone to retrive your password');
        }
      }
    }
  )
});
