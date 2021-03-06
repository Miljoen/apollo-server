const { Client } = require('pg');
import dotenv from "dotenv";
dotenv.config();

export const client = new Client({
    user: process.env.USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})
