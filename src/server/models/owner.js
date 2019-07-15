const mongoose = require('mongoose');

// Define our user schema
const { Schema } = mongoose;

const OwnerSchema =  new Schema({
    _id: Schema.Types.ObjectId,
    dog_id: { type: String, required: true },
    name: { type: String, required: true },
    user_name: { type: String, required: true },
    skylight_link: String,
});

module.exports = mongoose.model('Dog', OwnerSchema);
