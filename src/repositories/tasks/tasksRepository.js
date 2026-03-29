class TasksRepository {
    constructor(pool) {
        this.pool = pool;
    }

    getAll() {
        return 0;
    }

    create(data) {
        return 0;
    }

    markDone(id) {
        if (id === -1)
            throw new Error("test");
        return 0;
    }
}

export default new TasksRepository("pool");