// import React from 'react'
import { useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GifGrid } from "../components/GifGrid"
import '../styles/GitExpertAppStyle.css'
export const GifExpertApp = () => {
  const [categories, SetCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    SetCategories([newCategory, ...categories])
  }
  return (
    <>
        {/* Titulo */}
        <h1 className='mainTitle'>GifExpertApp</h1>
        {/* Input */}
        <AddCategory onNewCategory={ (value) => onAddCategory(value)}/>
        {/* Lista de tarjetas */}
          {
            categories.map( (category) => (
              <GifGrid 
                key={category}
                category={category}
                rows={23}
              />
            ))
          }
    </>
  )
}
