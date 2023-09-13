var express = require('express');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();

let settings = []
settings[0] = {
    settingid: 1,
    font: "roboto",
    fontsize: 12,
    textcolor: "black",
    theme: "white",
    userid: 1
}
settings[1] = {
    settingid: 2,
    font: "times new roman",
    fontsize: 14,
    textcolor: "black",
    theme: "black",
    userid: 2
}

router.get('/', (req, res, next) => {
    res.json(settings);
});

router.put('/', (req, res, next) => {

});



module.exports = {settingsRouter: router, settings};
