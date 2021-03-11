const express = require('express');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const config = require('./config.js');
const cors = require('cors');

const authRouter = require('./resources/auth/auth.router');
const categoriesRouter = require('./resources/categories/categories.router');
const messagesRouter = require('./resources/messages/messages.router');
const notificationsRouter = require('./resources/notifications/notifications.router');
const productsRouter = require('./resources/products/products.router');
const tagsRouter = require('./resources/tags/tags.router');
const usersRouter = require('./resources/users/users.router');

const jwt = require('express-jwt');
const dotenv = require("dotenv");
const mongo = require("./config/mongo");

dotenv.config();
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.disable('x-powered-by');

app.use('/', authRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/products', productsRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/users', usersRouter);

app.get('/protected', jwt( { secret: process.env.TOKEN_SECRET, algorithms: ['HS256'] } ), (req, res) => {
  res.send('protected');
});

const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  start,
  app,
};
