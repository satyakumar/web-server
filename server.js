var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var port = 4000;
/*app.use(middleware.requireAuthentication);*/
/*app.get('/',function(req,res) {
	res.send('Hello Express');
});*/
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res) {
	res.send('This is about page');
})
app.use(express.static(__dirname + '/public'));
app.listen(port,function() {
	console.log('Webserver has been started at the port: '+ port)
});