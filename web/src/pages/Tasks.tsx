import { useParams, routes, Redirect } from '@redwoodjs/router'

const taskViewMode = ['all', 'archived', 'completed'] as const

type TaskViewMode = typeof taskViewMode[number]

const isViewMode = (mode: string): mode is TaskViewMode => {
  return taskViewMode.some((value) => value === mode)
}

const Tasks = () => {
  const { mode = 'all' } = useParams()
  if (!isViewMode(mode)) {
    return <Redirect to={routes.task()} />
  }
  return <>{mode}ページです</>
}

export default Tasks
