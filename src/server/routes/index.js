// EXAMPLE
/*
 * Connect all of your endpoints together here.
 */
const dog = require('./dog.js');
const owner = require('./owners.js');
const schedule = require('./schedule.js');
module.exports = (app, router) => {
    app.use('/dogs', dog);
    app.use('/owners', owner);
    app.use('/schedules', schedule)
};

