import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
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
    }, []);

    const handleDeleteBook = async (bookId) => {
        try {
            await axios.delete("http://localhost:3001/book/" + bookId);
            window.location.reload();
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleUpdateBook = (bookId) => {
        navigate("/update/" + bookId);
    };

    return (
        <div>
            <h1>List of all books!</h1>
            <div className="books">
                {
                    books.map((book) => (
                        <div className="book">
                            {book.cover && <img src={book.cover} alt="" />}
                            <h2>{book.title}</h2>
                            <p>{book.description}</p>
                            <span>{book.price}</span>
                            <button className="delete" onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            <button className="update" onClick={() => handleUpdateBook(book.id)}>Update</button>
                        </div>
                    ))
                }
            </div>
            <button><Link to="/add">Add New Book</Link></button>
        </div>
    )
}

export default Books