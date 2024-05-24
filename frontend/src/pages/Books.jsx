import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3001/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllBooks();
    }, [])
    return (
        <>
            <h1>List of all books!</h1>
            <div className="books">
                {
                    books.map((book) => (
                        <div className="book">
                            {book.cover && <img src={book.cover} alt="" />}
                            <h2>{book.title}</h2>
                            <p>{book.description}</p>
                            <span>{book.price}</span>
                        </div>
                    ))
                }
            </div>
            <button><Link to="/add">Add New Book</Link></button>
        </>
    )
}

export default Books