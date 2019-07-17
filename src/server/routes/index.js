// EXAMPLE
/*
 * Connect all of your endpoints together here.
 */

const dog = require('./dog.js');
const schedule = require('./schedule.js')

module.exports = (app, router) => {
    app.use('/dogs', dog);
    app.use('/schedules', schedule)
};

