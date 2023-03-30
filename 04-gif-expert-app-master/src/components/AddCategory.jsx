import React from 'react'
import { useState } from 'react';
import '../styles/AddCategoryStyle.css';


export const AddCategory = ({onNewCategory, rows}) => {
    const [inputvalue, setInputvalue] = useState('');
    const [numgifs, setnumgifs] = useState();
    const numGifs = [
      {value: null, text: 'Select...'},
      {value: 1, text: '1'},
      {value: 5, text: '5'},
      {value: 10, text: '10'},
      {value: 15, text: '15'},
      {value: 20, text: '20'},
      {value: 25, text: '25'},
      {value: 50, text: '50'},
    ];
  
    const onInputChange = ({target}) => {
        setInputvalue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputvalue.trim().length <= 1) return;
        onNewCategory( inputvalue.trim()); //Solo si el valor es mayor a 1 caracter 
        setInputvalue('');
    }

    const handleSelectChange = event => {
      debugger
      setnumgifs(event.target.value);
      console.log(event.target.value);
    };
  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text"
        className='search'
        placeholder='Search Category'
        maxLength={50}
        value={inputvalue}
        onChange={ (event) => onInputChange(event) }
        />
        <br />
        <select className='selectInput' aria-label="Default select example" onChange={handleSelectChange}>
          {
            numGifs.map( (item, index) => (
              <option key={index} value={ item.value }>{ item.text }</option>
            ))
          }
        </select>
        <button type="submit">Search</button>
    </form>
  )
}
