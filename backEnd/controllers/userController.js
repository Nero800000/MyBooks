const { default: mongoose } = require('mongoose')
const User = require('../models/user')

const getBooks = async(req,res) => {
    const Books = await User.find()
    return res.json(Books)
}
  

const CreateBook = async(req,res) => {
    const {title, description} = req.body

    if(!title ) {
        return false
    }
    if(!description) {
        return false
       }
    

    const book = await User.create({
        title,
        description
    }) 
    
    if(book) {
        res.status(201).json(book)
    }
   
    
}

const updateBooksById = async(req,res) => {
       const {id} = req.params
   
    
    const book = await User.findById({_id:id})
 

    if(!book) {
        return res.status(404).json({message:"Livro não encontrado"})
    }
    res.status(200).json({book})

}

const editBook = async(req,res) => {
    const {id} = req.params
    const {title, description} = req.body

    
    const book = await User.findById({_id:id})
   
      
    book.title = title

    book.description = description
  
    await book.save()
    res.status(200).json({book})

}

const deleteBook = async(req,res) => {
    const {id} = req.params
    await User.findByIdAndDelete({_id:id})
    
    res.status(201).json({message:"Book Excluido com sucesso brother"})
}



module.exports = {
    getBooks,
    CreateBook,
    updateBooksById,
    editBook,
    deleteBook
        

}