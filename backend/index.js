import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());

const SERVER_PORT = 3000;
const connectionCreds = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.FORWARD_DB_PORT,
    database: process.env.DB_DATABASE,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const db = mysql.createConnection(connectionCreds);

app.get('/', (req, res) => {
    return res.json("Hello this is backend!");
});

app.get('/books', (req, res) => {
    const q = "SELECT * from `books` order by id desc";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
});

app.post('/books', (req, res) => {
    const q = "INSERT into `books` (`title`, `description`,`price`, `cover`) values (?)";

    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];
    // const values = ['post_title1', 'post_description1', 100.00, 'post_cover1.png'];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book created")
    });
});

app.delete('/book/:id',(req,res) => {
    const bookId = req.params.id;
    const q = "DELETE from books where id = ?";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("Book deleted")
    });

});

app.listen(SERVER_PORT, () => {
    console.log("Connected to express!");
});