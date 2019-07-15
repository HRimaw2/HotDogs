const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    dog_id: { type: String, required: true },
    floor: { type: Number, required: true },
    description: String,
    marked_floor_plan: String,
});

module.exports = mongoose.model('Dog', LocationSchema);
