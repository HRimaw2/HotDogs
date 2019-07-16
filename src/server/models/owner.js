const mongoose = require('mongoose');

const OwnerSchema =  new mongoose.Schema({
    dog_id: {type: String, required: true},
    name: {type: String, required: true},
    user_name: {type: String, required: true},
    password: {type: String, required: true},
    skylight_link: String,
});

module.exports = mongoose.model('Owner', OwnerSchema);
