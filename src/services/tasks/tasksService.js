import tasksRepository from "../../repositories/tasks/tasksRepository.js";
import {InvariantError, NotFoundError} from "../../errors/customErrors.js";

class TasksService {
    constructor(repository) {
        this.repository = repository;

    }

    async getAll() {
        return await this.repository.getAll();
    }

    async create(data) {
        this.checkTitle(data);
        this.insertDefaultStatus(data);
        return await this.repository.create(data);
    }

    async markDone(id) {
        await this.find(id);
        return await this.repository.markDone(id);
    }

    checkTitle(data) {
        if (data.title.length > 30 || data.title.length === 0) {
            throw new InvariantError('Title cannot be longer than 30 or shorter than 0 characters.');
        }
    }

    insertDefaultStatus(data) {
        data.status = 'NEW';
    }

    async find(id){
        const res = await this.repository.find(id)

        if(!res){
            throw new NotFoundError('Not Found');
        }
    }
}

export default new TasksService(tasksRepository);