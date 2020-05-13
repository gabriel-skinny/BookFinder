import React, { useState } from 'react';


import axios from "axios"

import "./styles.css"
import Icon from "./assets/icone.svg"

import Book from "./book"

export default function App(){ 
  
  const [book, setBook] = useState("")
  const [responses, setResponses] = useState([])
  
  async function handleSubmit(e){
    e.preventDefault()
    
    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .then(data => {
      console.log(data.data.items)
      setResponses(null)
      setResponses(data.data.items)
    })
    
  }
  
  function handleInputChange(e){
    setBook(e.target.value)
  }

  return (
      <div className="background">
         <form className="flex">
           <h1>
             <b>Book</b>Finder <img src={Icon} alt="searchIcon" size={15}/>
           </h1>
 
           <input type="text" placeholder="search" onChange={handleInputChange}/>
           <button type="submit" onClick={handleSubmit}>Submit</button>
         </form>
       
        {responses && <Book datas = {responses}/> }
       
        {responses == false && <div className="container"><h1>Digite um Livro Qualquer ...</h1> </div>}
       </div> 
   );
  
}


