import { Task } from 'src/types'
import { classNames } from 'src/utils/classNames'

import { Tag } from './Tag'

export type TaskCardProps = {
  task: Task
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  return (
    <div className="rounded-md bg-pure-white shadow-lg p-4 grid">
      <div
        className={classNames(
          'relative',
          'border-2',
          'border-checkbox',
          'w-6',
          'h-6',
          'rounded-sm',
          task.is_checked && 'bg-checkbox',
          task.is_checked && 'after:absolute',
          task.is_checked && "after:content-['']",
          task.is_checked && 'after:w-3/6',
          task.is_checked && 'after:h-5/6',
          task.is_checked && 'after:top-10px',
          task.is_checked && 'after:left-1/4',
          task.is_checked && 'after:border-white',
          task.is_checked && 'after:border-r-4',
          task.is_checked && 'after:border-b-4',
          task.is_checked && 'after:rotate-45'
        )}
      />
      <div className="text-medium-title font-bold pt-2">{task.name}</div>
      <div className="py-2">
        {task.tags.map((tag, index) => {
          return (
            <span key={index} className="pr-2">
              <Tag tag={tag} />
            </span>
          )
        })}
      </div>
      {task.description && <div className="py-2">{task.description}</div>}
    </div>
  )
}
