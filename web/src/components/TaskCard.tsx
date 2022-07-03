import { Task } from 'src/types'

export type TaskCardProps = {
  task: Task
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  return <div>{task.name}</div>
}
