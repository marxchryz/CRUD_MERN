const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Mongodb connection established successfully');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
