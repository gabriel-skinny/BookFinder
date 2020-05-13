import React from "react"

export default function Book({ datas }){
  return (
      <div className="tudo">
      {datas.map(data =>(
          <a key={data.id} href={data.volumeInfo.previewLink}>
          <div className="container">
          <img src={data.volumeInfo.imageLinks.thumbnail} alt="book"/>
          <div className="content">
            <h1>{data.volumeInfo.title}</h1>
            <p>{data.volumeInfo.description}</p>
            <small>{data.volumeInfo.authors.map(author =>(
              <small>{author}</small>
            ))}</small>
          </div>
          </div>
          </a>
        ))}
        </div>
  )   
}