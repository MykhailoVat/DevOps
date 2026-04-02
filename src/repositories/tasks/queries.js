const getAll = `SELECT * FROM tasks`
const create = `INSERT INTO tasks (title, status) VALUES ($1, $2) RETURNING *`
const markDone = `UPDATE tasks SET status = 'DONE' WHERE id = $1 RETURNING *`

export default {getAll, create, markDone}