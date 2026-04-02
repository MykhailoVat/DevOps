import tasksService from "../../services/tasks/tasksService.js";

class TasksController {
    constructor(service) {
        this.service = service;
    }

    async getAll() {
        const data = await this.service.getAll();
        return {
            status: 200,
            data: data
        };
    }

    async create(data) {
        const task = await this.service.create(data);
        return {
            status: 201,
            data: task
        };
    }

    async markDone(id) {
        console.log(id);
        const task = await this.service.markDone(id);
        return {
            status: 200,
            data: task
        };
    }
}

export default new TasksController(tasksService);