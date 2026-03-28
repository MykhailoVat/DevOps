class TasksRepository {
    constructor(pool) {
        this.pool = pool;
    }

    getAll() {
        const exemple = [
            { id: 1, title: 'Task 1', status: 'done' },
            { id: 2, title: 'Task 2', status: 'pending' }
        ]

        return exemple;
    }

    create(data) {
        return 0;
    }

    markDone(id){
        if (id === -1)
            throw new Error("test");
        return 0;
    }
}

export default new TasksRepository("pool");