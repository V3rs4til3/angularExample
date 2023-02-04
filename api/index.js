const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(r => {
    console.log('Connected to MongoDB');
});
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});