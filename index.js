const express = require('express');
const app = express();
const port = 3030;

app.get('/', function (req, res) {
    res.send('GET');
});