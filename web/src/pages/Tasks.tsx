import { useContext } from 'react'

import { Loading as LoadingView } from 'src/components/Loading'
import { TaskCard } from 'src/components/TaskCard'
import { TaskFilterContext } from 'src/contexts/TaskFilterContext'
import { useGetTaskAll } from 'src/hooks/tasks/useGetTaskAll'
import { useUpdateArchiveTask } from 'src/hooks/tasks/useUpdateArchiveTask'
import { useUpdateCheckTask } from 'src/hooks/tasks/useUpdateCheckTask'
const Tasks = () => {
  const { taskFilterState } = useContext(TaskFilterContext)
  const { tasks, getTasksLoading } = useGetTaskAll(taskFilterState)
  const { update: updateCheckTask } = useUpdateCheckTask()
  const { update: updateArchiveTask } = useUpdateArchiveTask()

  const onCheck = async (id: number) => {
    updateCheckTask({ variables: { id } })
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
            onChangeArchive={() => {
              updateArchiveTask({ variables: { id: task.id } })
            }}
          />
        )
      })}
    </div>
  )
}

export default Tasks
