// server.js
import app from "./app.js";
import dotenv from 'dotenv';
import path from 'path'
import {fileURLToPath} from 'url'
import * as fs from "node:fs";

let port
let address

if (process.env.NODE_ENV === 'development') {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    dotenv.config({
        path: path.resolve(__dirname, '../../.env_app')
    })

    port = parseInt(process.env.APP_PORT);
    address = process.env.APP_ADDRESS;
} else {
    const config = JSON.parse(
        fs.readFileSync('/etc/mywebapp/config.json', 'utf-8')
    );

    port = config.app_port
    address = config.app_address
}

app.listen(port, address, () => {
    console.log(`Server started on port ${port}, urls for tests:`);
    console.log(
        ` ${encodeURI(`http://localhost:${port}/tasks/`)} \n`,
        `${encodeURI(`http://localhost:${port}/health/`)} \n`,
        `${encodeURI(`http://localhost:${port}/`)} \n`,
    );
});
