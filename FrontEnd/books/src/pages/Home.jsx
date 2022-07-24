import React from "react";
import './Home.css'
import {Link} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Home = () => {
     const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription]= useState('')

    const createBook =async() => {
          
        const response = await axios.post('http://localhost:3000/books/users', {
            title:title,
            description:description

        })
        return response

    }
         
 

    const handleSubmit =async (e) => {
         e.preventDefault()
    
        await createBook()

         navigate('/books')

    }

    return( 

         <div>
     <header className="cabecalho">
            <Link to='/'>Cadastrar</Link>
            <Link to='/books'>Livros</Link>
    </header>
 
    <form className="formulario">
    <h1>Cadastre seu livro</h1>
       <input type="text" placeholder="digite seu titulo" name="name" onChange={(e)=> setTitle(e.target.value)}/>
 
       <input type="text" placeholder="digite sua descrição" name="name" onChange={(e)=> setDescription(e.target.value) } />
       <button className="btn" onClick={handleSubmit}>Cadastrar</button>
       </form>
      
    </div>
    )
}

export default Home