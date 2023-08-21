require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const apiRouter = require("./routes/ApiPoints");

const staticDir = '../frontend/build/'
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, staticDir)));
app.use('/api', apiRouter);

//Обработка ошибок, последний Middleware
app.use(errorHandler);


const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
