const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
    dog_id: { type: String, required: true },
    floor: { type: Number, required: true },
    description: String,
    marked_floor_plan: String
});

module.exports = mongoose.model('Location', LocationSchema);
