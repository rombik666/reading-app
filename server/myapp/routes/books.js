var express = require('express');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();

let books = [];
books[0] = {
    bookid: 1,
    title: "Сказ о сыне шлюхи",
    content: "Жил был сын шлюхи, его мать ебалась за деньги, так и умерла в общем.",
    wordnumb: 0,
    userid: 1
}
books[1] = {
    bookid: 2,
    title: "Сказ шлюхоматери",
    content: "Жила была шлюхомать, сын этой матери был сыном шлюхи, так и умерла в общем.",
    wordnumb: 0,
    userid: 1
}

router.get('/', (req, res, next) => {
    res.json(books)
});

router.post('/', (req, res, next) => {
    newBook = {
        bookid: uuidv4(),
        title: req.body.title || '',
        content: req.body.content,
        wordnumb: 0
    }
    books.push(newBook);
    res.send(books);
});

router.put('/', (req, res, next) => {
    const index = books.findIndex((book) => book.bookid === req.body.bookid);
    if (index !== -1){
        updatedBook = {
            bookid: req.body.bookid,
            title: req.body.title || books[index].title,
            content: req.body.content || books[index].content,
            wordnumb: req.body.wordnumb || books[index].wordnumb
        }
        books[index] = updatedBook;
        res.json(updatedBook);
    } else {
        res.status(404).send('Объект с таким id не найден')
    }

})

router.delete('/', (req, res, next) => {
    const index = books.findIndex((book) => book.bookid === req.body.bookid);
    if (index !== -1){
        books.splice(index, 1);
        res.json(books);
    } else {
        res.status(404).send('Объект с таким id не найден')
    }
})

module.exports = router;