var express = require('express');
var app = express();
var port = 4000;
var middleware = {
	requireAuthentication: function(req,res,next) {
		console.log('Private route hit');
		next();
	},
	logger: function(req,res,next) {
		console.log('Request Method: '+req.method+' & Request URL: '+req.originalUrl+' & Requested at: '+ new Date().toString());
		next();
	}
}
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