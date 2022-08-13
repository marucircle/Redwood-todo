import { db } from 'src/lib/db'

export const hasTask = async (user_id: number, task_id: number) => {
  const tasks = await db.user
    .findUnique({ where: { id: user_id } })
    .tasks({ where: { id: task_id } })
  return tasks.length === 0
}
