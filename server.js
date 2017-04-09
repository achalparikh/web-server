var express = require ('express');
var app = express();
var PORT = 3000;
var date = new Date().toString();

var middleware = {
    requireAuth: function(req, res, next) {
        console.log('private route mon');
        next();
    },

    logger: function (req, res, next) {
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' On ' + date);
        next();
    }
}

app.use(middleware.logger);

app.get('/', function(req, res){
    res.send('hello this is a response from the server');
});

app.get ('/about', middleware.requireAuth, function(req, res) {
    res.send('This is an about us page! WHOW');
});

app.use(express.static(__dirname + '/public'))

app.listen(PORT, function(){
    console.log('server is running betta catch it on ' + PORT);
});