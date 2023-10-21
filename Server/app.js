const express = require('express');
const morgan = require('morgan');
const app = express();
const bookRouter = require('./routes/bookRoutes');
const userRouter = require('./routes/userRoutes');

////////////// MIDDLEWARE ////////////////////////////////////
app.use(express.json());

app.use(morgan('dev'));

// const userRoute = require('./routes/userRoutes');

////////// ROUTES ///////////////////////////////////////
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
