import React from "react";
import './Home.css'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


 

const Edit = () => {

const {id} = useParams()
const navigate = useNavigate()

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [book, setBook] = useState('')
      
  const getBookByID = async() => {
    const response = await axios.get(`http://localhost:3000/books/${id}`)

    setBook(response.data.book)

  }

  

  useEffect(()=> {
    getBookByID()
  },[])
           
  const EditBook = async() => {
    const response = await axios.put(`http://localhost:3000/books/edit/${id}`,{
      title:title,
      description:description
    })
 
    return  response
 

  }
    const  handleSubmit = async (e) => {
      e.preventDefault()
     await EditBook()
      navigate('/books')
    }
    
    useEffect(()=> {
      setTitle(book.title)
    setDescription(book.description)

    },[book.title,book.description])

    
    
    console.log("title",title,"description",description)
   

    return( 

         <div className="container">
     <header className="cabecalho">
            <Link to='/'>Cadastrar</Link>
            <Link to='/books'>Livros</Link>
    </header>
    
    <form className="formulario" >
    <h1>Edite seu livro</h1>
       
       <input type="text" placeholder="digite seu titulo"  defaultValue={book.title} onChange={(e)=>setTitle(e.target.value)} />
 
       <input type="text" placeholder="digite sua descrição" defaultValue={book.description} onChange={(e)=>setDescription(e.target.value)} />
       <button className="btn" onClick={handleSubmit}>Editar</button>
       </form>
  
    </div>
    )
}

export default Edit