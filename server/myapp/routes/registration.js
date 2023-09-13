var express = require('express');
const { body, validationResult} = require('express-validator');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();
let {settings} = require('./settings');

let {users} = require('./users');
let defaultSettings = {
    settingid: 1,
    font: "roboto",
    fontsize: 12,
    textcolor: "black",
    theme: "darkblue",
    
}


const validationParams = [body('email').notEmpty().isEmail(), 
body('password').notEmpty().isLength({min: 6})];

router.post('/', validationParams, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const foundEmail = users.find((user) => user.email === req.body.email);

    if (foundEmail === undefined){
        const userid = uuidv4();
        newUser = {
            userid: userid,
            email: req.body.email,
            password: req.body.password,
            premium: 0
        }

        defaultSettings.userid = userid;
        settings.push(defaultSettings);

        users.push(newUser);
        res.json(newUser);
    } else {
        res.send("Пользователь с такой почтой уже сущействует")
    }
});


module.exports = router;