import { useParams, routes, Redirect } from '@redwoodjs/router'

import { Loading as LoadingView } from 'src/components/Loading'
import { TaskCard } from 'src/components/TaskCard'
import { useDeleteTask } from 'src/hooks/tasks/useDeleteTask'
import { useGetTaskAll } from 'src/hooks/tasks/useGetTaskAll'
import { useUpdateCheckTask } from 'src/hooks/tasks/useUpdateCheckTask'

import { isViewMode } from '../utils/isViewMode'

const Tasks = () => {
  const { mode = 'all' } = useParams()
  const { tasks, getTasksLoading, getTasksRefetch } = useGetTaskAll()
  const { update: updateCheckTask } = useUpdateCheckTask()
  const { deleteTask } = useDeleteTask()

  const onCheck = async (id: number) => {
    updateCheckTask({ variables: { id } })
  }

  if (!isViewMode(mode)) {
    return <Redirect to={routes.task()} />
  }

  if (getTasksLoading) return <LoadingView></LoadingView>

  return (
    <div className="grid grid-cols-1 gap-y-4 gap-x-8 px-8">
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            onChangeCheck={() => onCheck(task.id)}
            onDelete={() => {
              deleteTask({ variables: { id: task.id } })
              getTasksRefetch()
            }}
          />
        )
      })}
    </div>
  )
}

export default Tasks
