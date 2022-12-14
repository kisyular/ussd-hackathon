const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI)
		console.log(`MongoDB Connected`)
	} catch (err) {
		console.log(`MongoDB encountered an error ${err}`)
	}
}

module.exports = connectDB
