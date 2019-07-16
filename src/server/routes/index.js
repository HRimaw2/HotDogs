//EXAMPLE
/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {
    app.use('/api/owners', require('./owners.js'));
};