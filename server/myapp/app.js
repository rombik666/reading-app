var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let {usersRouter} = require('./routes/users');
let booksRouter = require('./routes/books');
let {settingsRouter} = require('./routes/settings');
let registrationRouter = require('./routes/registration');
let loginRouter = require('./routes/login');

const port = process.env.port || 3000;
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/books', booksRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/registration', registrationRouter);
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})
