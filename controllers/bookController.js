const Book = require("../models/Book");

const getBooks= async(req,res)=>{
    try{
        const books = await Book.find();
        res.json(Books);
    }catch(err){
        res.status(400).json({error:error.message});
    }
};

const getBookById = async (req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        res.json(book);
    }catch(err){
        res.status(400).json({error:error.message});
    }
};

module.exports ={getBooks , getBookById};