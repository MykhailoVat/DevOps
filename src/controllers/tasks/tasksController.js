import tasksService from "../../services/tasks/tasksService.js";
import {ValidationError} from "../../errors/customErrors.js";

class TasksController {
    constructor(service) {
        this.service = service;
    }

    async getAll() {
        try {
            const data = await this.service.getAll();
            return {
                status: 200,
                data: data
            };
        } catch (error) {
            return this.catcher(error);
        }
    }

    async create(data) {
        try {
            this.checkData(data);
            const task = await this.service.create(data);
            return {
                status: 201,
                data: task
            };
        } catch (error) {
            return this.catcher(error);
        }
    }

    async markDone(id) {
        try {
            this.checkId(id);
            const task = await this.service.markDone(id);
            return {
                status: 200,
                data: task
            };
        } catch (error) {
            return this.catcher(error);
        }
    }

    checkId(id) {
        const pars = Number(id)
        if (typeof pars !== 'number' || pars <= 0 || !Number.isInteger(pars)) {
            throw new ValidationError("invalid id");
        }
    }

    checkData(data) {
        const ALLOWED_REQUIRED = ['title']
        const keys = Object.keys(data)
        for (const key of keys) {
            if (!ALLOWED_REQUIRED.includes(key) || keys.length !== 1) {
                throw new ValidationError('only title should be provided');
            }
        }
    }

    catcher(error) {
        console.log(error);
        return {
            data: error.message,
            status: error.status
        }
    }
}

export default new TasksController(tasksService);