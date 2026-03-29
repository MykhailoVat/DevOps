// server.js
import app from "./app.js";

const PORT = 3000;
const ADDRESS = "127.0.0.1"

app.listen(PORT, ADDRESS, () => {
    console.log(`Server started on port ${PORT}, urls for tests:`);
    console.log(
        ` ${encodeURI(`http://localhost:${PORT}/tasks/`)} \n`,
        `${encodeURI(`http://localhost:${PORT}/health/`)} \n`,
        `${encodeURI(`http://localhost:${PORT}/`)} \n`,
    );
});
