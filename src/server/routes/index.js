/*
 * Connect all of your endpoints together here.
 */
const dog = require('./dog.js');
const owner = require('./owners.js');
const schedule = require('./schedule.js');
const login = require('./login');
const location = require('./location.js');

module.exports = (app, router) => {

    app.use('/api/dogs', dog);
    app.use('/api/owners', owner);
    app.use('/api/schedules', schedule);
    app.use('/api/login', login);
    app.use('/api/location', location);

};
