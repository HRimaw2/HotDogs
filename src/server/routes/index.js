
/*
 * Connect all of your endpoints together here.
 */
const dog = require('./dog.js');
const owner = require('./owners.js');
const schedule = require('./schedule.js');
<<<<<<< HEAD
const location = require('./location.js');
module.exports = (app, router) => {
    app.use('/dogs', dog);
    app.use('/owners', owner);
    app.use('/schedules', schedule)
    app.use('/location', location)
=======
const login = require('./login');
const location = require('./location.js');

module.exports = (app, router) => {
    app.use('/dogs', dog);
    app.use('/owners', owner);
    app.use('/schedules', schedule);
    app.use('/login', login);  
    app.use('/location', location);
>>>>>>> 5da5347c7d29b05d7e9666d29af780e02e2cb391
};
