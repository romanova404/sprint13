const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const routes = require('./routes');
// const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5e44647cabaee231048130ab',
  };

  next();
});

app.use(bodyParser.json());
app.use('/', routes);
app.use(errors());


// app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
