import {Client} from 'pg';
import pool from './pool.js';

class Checker {
    constructor(pool) {
        this.pool = pool;
    }

    async checkDb() {
        let client;

        try {
            client = await this.pool.connect();
            await client.query('SELECT 1');

            return {status: 200};
        } catch (err) {
            return {status: 500, error: err.message};
        } finally {
            if (client) client.release();
        }
    }
}

export default new Checker(pool);