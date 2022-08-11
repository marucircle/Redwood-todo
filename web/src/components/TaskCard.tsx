import { Link, routes } from '@redwoodjs/router'

import { Task } from 'src/types'
import { classNames } from 'src/utils/classNames'

import { Tag } from './Tag'

export type TaskCardProps = {
  task: Task
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  return (
    <div className="rounded-md bg-pure-white shadow-lg p-4 grid grid-row-1">
      {!task.is_archived && (
        <div
          className={classNames(
            'checkbox',
            task.is_checked && 'checkbox_is_checked'
          )}
        />
      )}
      <div className="text-medium-title font-bold pt-2">{task.name}</div>
      <div className="flex flex-wrap gap-x-2 gap-y-2 py-2">
        {task.tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />
        })}
      </div>
      {task.description && <div className="py-2">{task.description}</div>}
      <div className="pt-4 flex justify-around">
        <div className="button text-medium-title bg-info text-white">
          <Link to={routes.taskDetail({ id: task.id })}>詳細を見る</Link>
        </div>
        {task.is_archived ? (
          <div className="button text-medium-title bg-green text-white">
            元に戻す
          </div>
        ) : (
          <div className="button text-medium-title bg-danger text-white">
            削除する
          </div>
        )}
      </div>
    </div>
  )
}
