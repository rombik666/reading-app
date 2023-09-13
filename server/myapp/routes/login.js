var express = require('express');
const { body, validationResult} = require('express-validator');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();

let {users} = require('./users');

const validationParams = [body('email').notEmpty().isEmail(), 
body('password').notEmpty().isLength({min: 6})];

router.post('/', validationParams, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const index = users.findIndex((user) => user.email === req.body.email);
    if (index === -1){
        res.send("Неверная почта или пароль");
    } else {
        if (users[index].password === req.body.password){
            res.json(users[index]);
        } else {
            res.send("Неверная почта или пароль");
        }
    }
});


module.exports = router;