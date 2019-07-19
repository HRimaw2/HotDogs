const mongoose = require('mongoose');

// Define our user schema
const { Schema } = mongoose;

const OwnerSchema =  new Schema({
    dog_id: { type: String },
    name: { type: String },
    user_name: { type: String },
    password: { type: String },
    skylight_link: { type: String },
});

module.exports = mongoose.model('Owner', OwnerSchema);
