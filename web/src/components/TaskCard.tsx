import { Task } from 'src/types'

import { Tag } from './Tag'

export type TaskCardProps = {
  task: Task
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  return (
    <div className="rounded-md bg-pure-white shadow-lg p-4 grid">
      <div className="checkbox">checkbox</div>
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
      <div>test</div>
    </div>
  )
}
