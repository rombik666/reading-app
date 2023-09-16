const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const userModel = require('../models/user');
const settingModel = require('../models/setting');

router.post('/login', async (req, res, next) => {
    const {email, password} = req.body;
    const candidate = await userModel.findOne({email:email, password:password});
    if (candidate) {
        res.cookie('id', candidate._id);
        res.send('Вы успешно залогинились')
    }
})

router.post('/logout', async (req, res, next) => {
    res.clearCookie('id');
    res.send('Вы успешно разлогинились')

}) 

router.post('/registration', async (req, res, next) => {
    const candidate = await userModel.findOne({email:req.body.email});
    console.log(candidate);
    if (candidate){
        res.send("Пользователь с такой почтой уже зарегистрирован");
    }

    const user = await userModel.create({
        email: req.body.email,
        password: req.body.password
    })
    await settingModel.create({
        userid:user._id
    })
    res.json(user);
})

module.exports = router;