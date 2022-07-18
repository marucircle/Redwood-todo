import { db } from 'src/lib/db'

export const hasTask = async (user_id: number, task_id: number) => {
  const tasks = await db.task.findMany({
    where: { id: task_id, user_id: user_id },
  })

  return tasks.length === 0
}
