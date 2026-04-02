import {Router} from 'express';

const router = Router();
import tasksController from '../../../controllers/tasks/tasksWrapper.js';

const getTasksRouter = () => {

    //GET
    router.get('/', async (req, res) => {
        const result = await tasksController.getAll()
        res.status(result.status)

        if (req.accepts('text/html')) {
            res.setHeader('Content-Type', 'text/html');

            const html = `
            <html>
            <body>
            <h1>Tasks</h1>
            <table border="1">
            <tr><th>ID</th><th>Title</th><th>Status</th></tr>
            ${result.data.map(t => `<tr><td>${t.id}</td><td>${t.title}</td><td>${t.status}</td></tr>`).join('')}
            </table>
            </body>
            </html>
            `;

            res.send(html)
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
            res.send(`<p>Task created with id ${result.data.id}</p>`);
        } else if (req.accepts('application/json')) {
            res.json(result.data)
        }
    });

    router.post('/:id/done', async (req, res) => {
            const id = req.params.id
            const result = await tasksController.markDone(id)
            res.status(result.status)

            if (req.headers.accept.includes('text/html')) {
                res.setHeader('Content-Type', 'text/html');
                res.send(`<p>Task ${result.data.title} with id ${result.data.id} was set to done status</p>`);
            } else if (req.headers.accept.includes('application/json')) {
                res.json(result.data)
            }
        }
    )
    ;

    return router;
}

export default getTasksRouter;