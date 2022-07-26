import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import './Button.css'

const Button = ({id}) => {
   const navigate = useNavigate()
    
    const deleteBook = async() => {
        const Response = await axios.delete(`http://localhost:3000/books/${id}`)
        return await Response
  }
  

const handleSubmit = async (e) => {
  e.preventDefault()
  await deleteBook()
  navigate(0)
    
 
}

    return <button className="deletebtn" onClick={handleSubmit}>excluir</button>
} 

export default Button