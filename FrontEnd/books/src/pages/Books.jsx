

import React,{useState, useEffect} from "react";
import './Books.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Button from "../componentes/Button";

const Books = () => {
    const [data,setDatas] = useState([])
           
      const getBooks = async () => {
           const myFecth = await axios.get('http://localhost:3000/books/users')
           const test = myFecth.data

         setDatas(test.reverse())
      }

      useEffect(()=> {
        getBooks()
      },[])

    
        
    return(    

         <div className="container">
     <header className="cabecalho">

            <Link to='/'>cadastrar</Link>
    </header>
     <h1>Livros disponiveis</h1>
     <div className="my-books" >
         {data && data.map((book,index) => {
            return (
                  <div key={index} className="books"> 

                <h3>{book.title}</h3>
                 <p>{book.description}</p> 
                 <Link to={`/edit/${book._id}`}>editar</Link>
                     <Button id={book._id}/>
               
                 <p>__________________-</p>
                 </div>                              
            )
        })}

     </div>
       
    </div>
    )
}

export default Books