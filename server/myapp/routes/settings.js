const express = require('express');
const router = express.Router();
const settingModel = require('../models/setting');
const { find } = require('../models/user');

router.get('/settings', async (req, res, next) => {
    const settings = await settingModel.findOne({userid:req.cookies.id});
    res.json(settings);
});

router.put('/settings', async (req, res, next) => {
    const update = req.body;
    const settings = await settingModel.findOneAndUpdate({userid: req.cookies.id}, update);
    res.json(settings);
});


module.exports = router;
