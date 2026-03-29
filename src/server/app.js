import express from "express";
import getUserRouter from "./routes/appRoutes/tasksRoutes.js";
import getHealthRouter from "./routes/techRoutes/healthRoutes.js";
import getBaseRouter from "./routes/techRoutes/baseRoutes.js";

const app = express();

app.set("query parser", "extended");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", getUserRouter());
app.use("/health", getHealthRouter());
app.use("/", getBaseRouter());

export default app;
