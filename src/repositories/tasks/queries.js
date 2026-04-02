const getAll = `SELECT * FROM tasks ORDER BY created_at DESC`
const create = `INSERT INTO tasks (title, status, created_at) VALUES ($1, $2, $3) RETURNING *`
const markDone = `UPDATE tasks SET status = 'DONE' WHERE id = $1 RETURNING *`

export default {getAll, create, markDone}