import {Router} from 'express';
import checkerTool from "../../../repositories/checkerTool.js";

const router = Router();

const getHealthRouter = () => {

    //GET
    router.get('/alive', async (req, res) => {
        res.status(200).send("app alive")
    });

    router.get('/ready', async (req, res) => {
        const result = await checkerTool.checkDb();

        res.status(result.status).send(result.error || null);
    });

    return router;
}

export default getHealthRouter;