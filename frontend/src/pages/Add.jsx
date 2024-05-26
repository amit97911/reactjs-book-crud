import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: 0,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/books", book);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='form'>
      <h1>Add Books!</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title" id="title" />
      <input type="text" placeholder="description" onChange={handleChange} name="description" id="description" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" id="price" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover" id="cover" />
      <button className='formButton' onClick={handleClick}>Add Book</button>
    </div>
  )
}

export default Add