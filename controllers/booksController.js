const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: async(req, res) => {
    try{
    const findBooks=await db.Book.find(req.query)
     return res.json(findBooks);
    }catch(error) { 
        res.status(422).json(error);
    }
  },
  findById: async(req, res) => {
      try{
    const findBooks=await db.Book.findById(req.params.id)
     return res.json(findBooks);
      }catch(error){
          res.status(422).json(error);
      }
  },
  create: async(req, res) => {
      try{
			//	create new book
    const createBook=await db.Book.create(req.body)
				
		// Send back created entry
			return res.json(createBook);
      }
      catch(error) { 
          res.status(422).json(error);
        }
	},
	
  update: async(req, res) => {
		try{
    const updateBook =await db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
			return res.json(updateBook)
		}
      catch(error) {
				 res.status(422).json(error)
			}
	},
	
  remove: async(req, res) => {
		try{

    const deleteBook = await db.Book.findOneAndDelete(req.params.id)
      
			//sends back deleted entry
			return res.json(deleteBook);
			
		}
      catch(error) {
				res.status(422).json(error);
   	}
 }
};
