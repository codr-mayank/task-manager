const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const port = 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('CONNECTED to db & SERVER port', port));
  } catch (err) {
    console.error('!!!');
    console.error('!ERROR!');
    console.error(err);
    console.error('!!!');
  }
}

startServer();
