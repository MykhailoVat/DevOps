const getAll = `SELECT * FROM tasks ORDER BY created_at DESC`
const create = `INSERT INTO tasks (title, status) VALUES ($1, $2) RETURNING *`
const markDone = `UPDATE tasks SET status = 'DONE' WHERE id = $1 RETURNING *`
const find = `SELECT * FROM tasks WHERE id = $1`

export default {getAll, create, markDone, find}