import express from 'express'
import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 3000;
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

const db = mysql.createConnection(connectionCreds)

app.get('/', (req, res) => {
    return res.json("Hello this is backend!");
});

app.get('/books', (req, res) => {
    const q = "SELECT 1+1+1 as total";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data[0].total)
    })
});

app.listen(SERVER_PORT, () => {
    console.log("Connected to express!")
})