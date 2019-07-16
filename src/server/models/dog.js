// EXAMPLE
// Load required packages
const mongoose = require('mongoose');

// Define our user schema
const { Schema } = mongoose;

const DogProfileSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    colors: { type: [], required: true },
    size: { type: String, required: true },
    breed: { type: String, required: true },
    about: { type: String, default: 'Not posted yet' },
	likes: { type: String, default: '' },
	dislike: { type: String, default: '' },
	status: { type: [], default: ['Awake'] },
	profile_picture: { type: String, required: true },
	pictures: { type: [], required: true, default: [] },
	allergies: { type: String, required: true, default: 'No allergies' },
	treats: { type: String, default: 'No treats allowed' },
	requests: { type: String, default: '' },
	location_id: { type: Object, required: true },
	schedule_id: { type: Object, required: true },
	owner_id: { type: Object, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('Dog', DogProfileSchema);
