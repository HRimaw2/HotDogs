// EXAMPLE
/*
 * Connect all of your endpoints together here.
 */
const dog = require('./dog.js');
const owner = require('./owners.js');

module.exports = (app, router) => {
    app.use('/dogs', dog);
    app.use('/owners', owner);
};
