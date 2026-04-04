import {Router} from 'express';
import fat_html from "./fat_html.js";

const router = Router();
import tasksController from '../../../controllers/tasks/tasksWrapper.js';

const getTasksRouter = () => {

    //GET
    router.get('/', async (req, res) => {
        const result = await tasksController.getAll()
        res.status(result.status)

        if (req.accepts('text/html')) {
            res.setHeader('Content-Type', 'text/html');
            if (result.error) {
                res.send(fat_html(result.data))
            } else {
                res.send(fat_html(result.data))
            }
        } else if (req.accepts('application/json')) {
            res.json(result.data)
        }
    });

    //POST
    router.post('/', async (req, res) => {
        const result = await tasksController.create(req.body)
        res.status(result.status)

        if (req.accepts('text/html')) {
            res.setHeader('Content-Type', 'text/html');
            if (result.error) {
                res.send("ERROR")
            } else {
                res.send(`<p>Task created with id ${result.data.id}</p>`);
            }
        } else if (req.accepts('application/json')) {
            res.json(result.data)
        }
    });

    router.post('/:id/done', async (req, res) => {
            const id = req.params.id
            const result = await tasksController.markDone(id)
            res.status(result.status)

            if (req.accepts('text/html')) {
                res.setHeader('Content-Type', 'text/html');
                if (result.error) {
                    res.send("ERROR")
                } else {
                    res.send(`<p>Task ${result.data.title} with id ${result.data.id} was set to done status</p>`);
                }
            } else if (req.accepts('application/json')) {
                res.json(result.data)
            }
        }
    )
    ;

    return router;
}

export default getTasksRouter;