// EXAMPLE
/*
 * Connect all of your endpoints together here.
 */
const dog = require('./dog.js');
const owner = require('./owner.js');
const shcedule = require('./schedule.js');
module.exports = (app, router) => {
    app.use('/dogs', dog);
    app.use('/owners', owner);
    app.use('/schedules', schedule)
};

