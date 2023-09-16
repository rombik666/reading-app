const express = require('express');
const router = express.Router();
const bookModule = require("../models/book");
const { findById } = require('../models/user');

router.get('/books', async (req, res, next) => {
    const id = req.cookies.id;
    const books = await bookModule.find({userid: id});
    res.json(books)
});

router.post('/books', async (req, res, next) => {
    const id = req.cookies.id;
    const user = await bookModule.findOne({userid: id});
    console.log(user);
    if (!user){
        res.send("Ошибка пользователя");
    }
    const book = await bookModule.create({
        title: req.body.title || "",
        content: req.body.content || "",
        userid: id
    });
    res.json(book);
});

router.put('/books', async (req, res, next) => {
    const {_id, title, content, wordnumb} = req.body;
    await bookModule.findOneAndUpdate({_id: _id}, 
        {
            title: title,
            content: content,
            wordnumb: wordnumb
        })
    res.send("Книга обновлена");
})

router.delete('/books', async (req, res, next) => {
    await bookModule.findByIdAndDelete(req.body._id);
    res.send("Книга удалена");
})

module.exports = router;