const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema(
	{
		information: {
			type: String,
			required: [true, 'Please provide information to share'],
			maxlength: 50,
		},
		// position: {
		// 	type: String,
		// 	required: [true, 'Please provide position'],
		// 	maxlength: 100,
		// },
		status: {
			type: String,
			enum: ['send', 'not send'],
			default: 'not send',
		},

		infoFrequency: {
			type: String,
			enum: ['weekly', 'monthly'],
			default: 'weekly',
		},
		infoCounty: {
			type: String,
			default: 'Nairobi',
			required: true,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide user'],
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Info', InfoSchema)