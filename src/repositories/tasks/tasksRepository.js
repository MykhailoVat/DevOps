import pool from "../pool.js";
import q from "./queries.js";

class TasksRepository {
    constructor(pool) {
        this.pool = pool;
        //this.client = this.pool.connect();
    }

    async getAll() {
        const res = await this.pool.query(q.getAll)

        return res.rows
    }

    async create(data) {
        const res = await this.pool.query(q.create,[data.title, data.status]);

        return res.rows[0];
    }

    async markDone(id) {
        const res = await this.pool.query(q.markDone, [id]);
        return res.rows[0];
    }

    async find(id) {
        const res = await this.pool.query(q.find, [id]);
        return res.rows[0];
    }
}

export default new TasksRepository(pool);