const mongoose = require('mongoose');

const { Schema } = mongoose;

const ScheduleSchema = new Schema({
  dnd_times: {
    type: [],
    default: []
  },
  available_times: {
    type: [],
    default: []
  },
  dog_id: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
