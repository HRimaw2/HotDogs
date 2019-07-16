//EXAMPLE
/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app, router) {

    // app.use('/api', require('./home.js')(router));
    app.use('/dog', require('./dog.js'));
    // app.use('/api/tasks', require('./tasks.js'));
};

module.exports = function (app,router) {
  app.use('/location', require('./location.js'))
}
