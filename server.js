var express = require('express');
var app = express();
var path = require("path");
http = require('http');
app.use(express.static(__dirname)); // set the static files location /public/img will be /img for users

app.get('/', function(req, res) {
    res.sendFile('index.html');
});
app.get('/chivo-guisado', function(req, res) {
    res.sendFile(__dirname + '/chivo-guisado.html');
});
app.get('/pictures', function(req, res) {
    res.sendFile(__dirname + '/photos.html');
});
app.get('/pay-the-players', function(req, res) {
    res.sendFile(__dirname + '/mmm.html');

})

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000!');
});

//static files 
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(express.static(__dirname + '/public'));