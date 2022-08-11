import { Redirect, routes, useParams } from '@redwoodjs/router'

import { Loading as LoadingView } from 'src/components/Loading'
import { useGetTask } from 'src/hooks/tasks/useGetTask'

const TaskDetail = () => {
  const { id } = useParams()
  const { task, getTaskLoading, getTaskError } = useGetTask(parseInt(id))

  if (getTaskLoading) return <LoadingView></LoadingView>
  if (getTaskError) {
    return <Redirect to={routes.task()} />
  }
  return (
    <div>
      <div>{task.name}</div>
    </div>
  )
}

export default TaskDetail
