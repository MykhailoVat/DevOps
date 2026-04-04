import {Router} from 'express';

const router = Router();

const getBaseRouter = () => {

    //GET
    router.get('/', async (req, res) => {
        if(req.accepts('text/html')) {
            res.setHeader('content-type', 'text/html');

            const html = `
            <html>
            <body>
            <h1>MyWebApp API</h1>
            <p>Available endpoints:</p>
            <p>GET /tasks — list all tasks</p>
            <p>POST /tasks — create new task</p>
            <p>POST /tasks/:id/done — mark task as done</p>
            <p>GET /health/alive — check if server alive</p>
            <p>GET /health/ready — check if database ready ro accept connection</p>
            <p>GET / — (this) see available endpoints </p>
            </body>
            </html>        
            `;

            res.send(html)
        }
    });

    return router;
}

export default getBaseRouter;