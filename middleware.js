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
module.exports = middleware;