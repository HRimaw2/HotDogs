const mongoose = require('mongoose');

const { Schema } = mongoose;

const ScheduleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    dnd_times: { type: [], default: [] },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
