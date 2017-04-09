var middleware  = {
    requireAuth: function(req, res, next) {
        console.log('private route mon!');
        next();
    },

    logger: function (req, res, next) {
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' On ' + date);
        next();
    }
}
module.exports =  middleware;