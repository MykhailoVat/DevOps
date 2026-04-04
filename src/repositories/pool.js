import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path'
import { fileURLToPath } from 'url'
import fs from "node:fs";

let host
let port
let user
let password
let name

if (process.env.NODE_ENV === 'development') {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    dotenv.config({
        path: path.resolve(__dirname, '../../.env_db')
    })

    host = process.env.DATABASE_HOST
    port = process.env.DATABASE_PORT
    user = process.env.DATABASE_USER
    password = process.env.DATABASE_PASSWORD
    name = process.env.DATABASE_NAME
} else {
    const config = JSON.parse(
        fs.readFileSync('/etc/mywebapp/config.json', 'utf-8')
    );
    host = config.db.host
    port = config.db.port
    user = config.db.user
    password = config.db.password
    name = config.db.name
}

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default pool

