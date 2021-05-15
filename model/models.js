// Step 3 - this is the code for ./models.js

var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	FullName: String,
    Email: String,
    Occupation: String,
    Contact: Number,
    Address: String,
    Experience: String,
    DOB: String,
    Education: String,
    Description: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
    
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('image', imageSchema);
