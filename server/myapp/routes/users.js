var express = require('express');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();

let users = []
users[0] = {
  userid: 1,
  email: "example@gmail.com",
  password: "1234Example",
  premium: 0
}

router.get('/', (req, res, next) => {
    res.send(users);
});





module.exports = {usersRouter: router, users};
