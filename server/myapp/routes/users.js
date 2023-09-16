const express = require('express');
const router = express.Router();
const userModel = require('../models/user.js')

router.get('/users', async (req, res, next) => {
    const users = await userModel.find();
    res.json(users);
});

module.exports = router;
