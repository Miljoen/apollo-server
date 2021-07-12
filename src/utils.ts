import {client} from "../database/db";
client.connect();

export const createUsersTable = async () => {
    const query = `
        CREATE TABLE users
        (
            id       int primary key,
            name     varchar,
            email    varchar,
            password varchar
        );
    `;

    try {
        const res = await client.query(query);
        console.log('Table created');
    } catch (e) {
        console.error(e);
    } finally {
        client.end();
    }
}

export const listTables = async () => {
    const query = `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
        ORDER BY table_name;
    `

    try {
        const res = await client.query(query);
        console.log(res.rows);
    } catch (e) {
        console.error(e);
    } finally {
        client.end();
    }
}

export const addUser = async (
    id: number,
    name: string,
    email: string,
    password: string,
) => {
    const query = {
        text: 'INSERT INTO users(id, name, email, password) VALUES($1, $2, $3, $4)',
        values: [id, name, email, password],
    }

    try {
        const res = await client.query(query);
        console.log(res.rows);
    } catch (e) {
        console.log(e);
    } finally {
        client.end();
    }
}

export const getUsers = async() => {
    const query = `
        SELECT * FROM users;
    `;

    try {
        const res = await client.query(query);
        console.log(res.rows);
        return res.rows;
    } catch (e) {
        console.log(e);
    } finally {
        client.end();
    }
}
