import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: 0,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  let pathArray = location.pathname.split('/');
  let bookId = pathArray[pathArray.length - 1];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3001/book/" + bookId, book);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='form'>
      <h1>Update Books</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title" id="title" />
      <input type="text" placeholder="description" onChange={handleChange} name="description" id="description" />
      <input type="number" placeholder="price" onChange={handleChange} name="price" id="price" />
      <input type="text" placeholder="cover" onChange={handleChange} name="cover" id="cover" />
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update