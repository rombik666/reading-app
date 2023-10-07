const express = require('express');
const router = express.Router();
const bookModule = require("../models/book");

router.get('/books', async (req, res, next) => {
    try {
        const id = req.cookies.id;
        const books = await bookModule.find({userid: id});
        res.json(books)
    } catch (err) {
        console.log(err);
        res.status(500).send("Ошибка сервера при получении книг");
    }
});

router.post('/books', async (req, res, next) => {
    try{
        const id = req.cookies.id;
        const user = await bookModule.findOne({userid: id});
        if (!user){
            res.send("Ошибка пользователя");
        }
        const book = await bookModule.create({
            title: req.body.title || "",
            content: req.body.content || "",
            userid: id
        });
        res.json(book);
    } catch (err){
        console.log(err);
        res.status(500).send("Ошибка сервера при создании книги");
    }
    
});

router.put('/books', async (req, res, next) => {
    try {
        const {_id, title, content, wordnumb} = req.body;
        await bookModule.findOneAndUpdate({_id: _id}, 
            {
                title: title,
                content: content,
                wordnumb: wordnumb
            })
        res.send("Книга обновлена");
    } catch (err) {
        console.log(err);
        res.status(500).send("Ошибка сервера при обновлении книги");
    }
    
})

router.delete('/books', async (req, res, next) => {
    try {
        await bookModule.findByIdAndDelete(req.body._id);
        res.send("Книга удалена");
    } catch (err) {
        console.log(err);
        res.status(500).send("Ошибка сервера при ");
    }
})

module.exports = router;

