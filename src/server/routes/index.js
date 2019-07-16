// EXAMPLE
/*
 * Connect all of your endpoints together here.
 */

const dog = require('./dog.js');

module.exports = (app, router) => {
    app.use('/dogs', dog);
};
