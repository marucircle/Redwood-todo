import { useContext } from 'react'

import { resolveValue } from 'react-hot-toast'

import { Label } from '@redwoodjs/forms'

import { Loading as LoadingView } from 'src/components/Loading'
import { TaskCard } from 'src/components/TaskCard'
import { TaskFilterContext } from 'src/contexts/TaskFilterContext'
import { useGetTagAll } from 'src/hooks/tags/useGetTagAll'
import { useGetTaskAll } from 'src/hooks/tasks/useGetTaskAll'
import { useUpdateArchiveTask } from 'src/hooks/tasks/useUpdateArchiveTask'
import { useUpdateCheckTask } from 'src/hooks/tasks/useUpdateCheckTask'
const Tasks = () => {
  const { taskFilterState, taskFilterDispatch } = useContext(TaskFilterContext)
  const { tasks, getTasksLoading } = useGetTaskAll(taskFilterState)
  const { tags, getTagsLoading } = useGetTagAll()
  const { update: updateCheckTask } = useUpdateCheckTask()
  const { update: updateArchiveTask } = useUpdateArchiveTask()

  if (getTasksLoading || getTagsLoading) return <LoadingView></LoadingView>

  return (
    <div className="px-8">
      <div>
        <label htmlFor="tagFilter" className="mb-2 font-bold">
          タグ絞り込み：
        </label>
        <select
          id="tagFilter"
          onChange={(e) => {
            console.log(e.target.value)
            taskFilterDispatch({
              type: 'CHANGE_FILTER_TAG',
              tagName: e.target.value,
            })
          }}
          value={taskFilterState.tagName}
          className="py-2 px-1 grow shadow-md rounded-md"
        >
          <option key="all" value="">
            {' '}
            -{' '}
          </option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-y-4 gap-x-8 mt-4">
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              task={task}
              onChangeCheck={() =>
                updateCheckTask({ variables: { id: task.id } })
              }
              onChangeArchive={() => {
                updateArchiveTask({ variables: { id: task.id } })
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Tasks
