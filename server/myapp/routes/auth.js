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
    const candidate = await userModel.findOne({email:email});
    if (candidate) {
        const isCorrectPassword = await bcrypt.compare(password, candidate.password);
        if (isCorrectPassword) {
            console.log(`Пользователь ${email}, залогинился`)
            res.cookie('id', candidate._id);
            res.send('Вы успешно залогинились');
        } else {
            console.log(`Неверный пароль при почте ${email}`);
            res.send('Неверная почта или пароль');
        }
    } else {
        console.log(`Неудачная попытка входа через почту: ${email}`);
        res.send('Неверная почта или пароль');
    }
})

router.post('/logout', async (req, res, next) => {
    if (req.cookies.id) {
        console.log(`Пользователь с id ${req.cookies.id} разлогинился`);
        res.clearCookie('id');
        res.send("Вы разлогинились");
    } else {
        res.send("Вы не залогинены");
    }
}) 

router.post('/registration', async (req, res, next) => {
    const candidate = await userModel.findOne({email:req.body.email});
    console.log(candidate);
    if (candidate){
        res.send("Пользователь с такой почтой уже зарегистрирован");
    }
    const hashPassword = await bcrypt.hash(req.body.password, 8);
    
    const user = await userModel.create({
        email: req.body.email,
        password: hashPassword
    })
    await settingModel.create( {
        userid:user._id
    })
    res.json(user);
})

module.exports = router;