const express = require('express')
const router = express.Router()
const {CreateBook,getBooks,updateBooksById,editBook,deleteBook} = require('../controllers/userController')

router.get('/users',getBooks)
 router.post('/users',CreateBook)
 router.get('/:id',updateBooksById)
 router.put('/edit/:id',editBook)
 router.delete('/:id',deleteBook)


module.exports = router


//router.get('/users', (req,res) => {
  //  return res.json({message: "funcionou"})
//})