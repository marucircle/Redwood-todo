import { Link, routes } from '@redwoodjs/router'

import { Task } from 'src/types'
import { classNames } from 'src/utils/classNames'

import { Tag } from './Tag'

export type TaskCardProps = {
  task: Task
  onChangeCheck: () => void
  onChangeArchive: () => void
  onClickTag: (tagName: string) => void
}

export const TaskCard = ({
  task,
  onChangeCheck,
  onChangeArchive,
  onClickTag,
}: TaskCardProps): JSX.Element => {
  return (
    <div
      className={classNames(
        'rounded-md shadow-lg p-4 grid grid-row-1',
        task.is_archived ? 'bg-archived' : 'bg-pure-white'
      )}
    >
      {!task.is_archived && (
        <div
          className={classNames(
            'checkbox',
            task.is_checked && 'checkbox_is_checked'
          )}
          onClick={onChangeCheck}
        />
      )}
      <div className="text-medium-title font-bold pt-2">{task.name}</div>
      <div className="flex flex-wrap gap-x-2 gap-y-2 py-2">
        {task.tags.map((tag, index) => {
          return (
            <span
              key={index}
              onClick={() => onClickTag(tag.name)}
              className="cursor-pointer"
            >
              <Tag tag={tag} />
            </span>
          )
        })}
      </div>
      {task.description && <div className="py-2">{task.description}</div>}
      <div className="pt-4 flex justify-around">
        <div className="button text-medium-title bg-info text-white">
          <Link to={routes.taskDetail({ id: task.id })}>詳細を見る</Link>
        </div>
        {task.is_archived ? (
          <div
            className="button text-medium-title bg-green text-white"
            onClick={onChangeArchive}
          >
            元に戻す
          </div>
        ) : (
          <div
            className="button text-medium-title bg-danger text-white"
            onClick={onChangeArchive}
          >
            削除する
          </div>
        )}
      </div>
    </div>
  )
}
