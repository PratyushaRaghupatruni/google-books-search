const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

	// Title of the book
	title: {
		type: String,
		trim: true,
	},
	
	// Author of the book
	author:{
		type:[String],
		trim:true,
	},

  // Description of the book 
  description :{
		type:String,
		trim:true,
	},

	// Image 
	image :{
			type: String,
		  required: true,
	},

	// Link
	link: {
		type: String,
		required: true,
	},

});

// Apply book schema to 'Book' model
const Book = mongoose.model('Book', bookSchema);

// Export book Model

module.exports = Book;