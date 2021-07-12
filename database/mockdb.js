const { Client } = require('pg');
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    user: process.env.USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})
client.connect()
client.query('SELECT * FROM USERS', (err, res) => {
    console.log(err, res)
    client.end()
})
