import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Link, Redirect, routes, useParams } from '@redwoodjs/router'

import { Loading as LoadingView } from 'src/components/Loading'
import { Tag } from 'src/components/Tag'
import { useGetTask } from 'src/hooks/tasks/useGetTask'

const TaskDetail = () => {
  const { id } = useParams()
  const { task, getTaskLoading, getTaskError } = useGetTask(parseInt(id))

  if (getTaskLoading) return <LoadingView></LoadingView>
  if (getTaskError) {
    return <Redirect to={routes.task()} />
  }

  const blob = new Blob([task.detail])

  return (
    <div>
      <div className="my-4">
        <span className="bg-info px-4 py-2">
          <Link to={routes.task()}>Back</Link>
        </span>
      </div>
      <div className="mx-4">
        <div className="mt-8 text-large-title font-bold">{task.name}</div>
        <div className="flex flex-wrap gap-x-4 gap-y-4 mt-8">
          {task.tags.map((tag) => (
            <Tag tag={tag} key={tag.id} />
          ))}
        </div>
        <div className="mt-8">
          <ReactMarkdown className="reactMarkDown" remarkPlugins={[remarkGfm]}>
            {task.detail}
          </ReactMarkdown>
        </div>
        <div className="mt-8 mb-8">
          <span className="button text-medium-title bg-info text-white">
            <a
              href={window.URL.createObjectURL(blob)}
              download={`${task.name}.md`}
            >
              Export
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskDetail
