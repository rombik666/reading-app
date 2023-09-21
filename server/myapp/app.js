var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const Cors = require('cors')

const authRouter = require('./routes/auth');
const booksRouter = require('./routes/books');
const settingsRouter = require('./routes/settings');
const userRouter = require('./routes/users');

const uri = "mongodb+srv://root:root@gachicluster.och71zo.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Подключение к MongoDB успешно!');
  }).catch((err) => {
    console.error('Ошибка подключения к MongoDB:', err);
  });

let app = express();

app.use(Cors({
  origin: 'http://localhost:5173',   
  credentials: true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', authRouter);
app.use('/api', booksRouter);
app.use('/api', settingsRouter);
app.use('/api', userRouter);

app.listen(3000, () => {
    console.log(`Сервер запущени на 3000 порте.`);
})
