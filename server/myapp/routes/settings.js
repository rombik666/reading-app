const express = require('express');
const router = express.Router();
const settingModel = require('../models/setting');

router.get('/settings', async (req, res, next) => {
    try {
        const settings = await settingModel.findOne({userid:req.cookies.id});
        res.json(settings);
    } catch (err) {
        console.log(err);
        res.status(500).send("Ошибка сервера при ");
    }
});

router.put('/settings', async (req, res, next) => {
    try {
        const update = req.body;
        const settings = await settingModel.findOneAndUpdate({userid: req.cookies.id}, update);
        res.json(settings);
    } catch (err) {
        console.log(err);
        res.status(500).send("Ошибка при изминении настроек");
    }
});


module.exports = router;
