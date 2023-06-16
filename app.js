/*

#scratch-gui起動スクリプト
node app.js

# Client
http://192.168.0.10:8333

*/
const express = require('express');
const path = require('path');

console.log('NODE_NEV:', process.env.NODE_ENV);
var app = express();
app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// static page
app.use('/', express.static(path.join(__dirname, './build')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    return next(err)
});

// error handler
app.use(function(err, req, res, next) {
    console.log("ERROR!!!!:", err.message)
    console.log(req.url)
    res.status(err.status || 500).send(err.message);
});

// Start listening
var port = process.env.PORT || 8333;
app.listen(port, function () {
    console.log('Server listening on port: ', port);
});
