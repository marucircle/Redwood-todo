import { TaskCard } from 'src/components/TaskCard'

const task = {
  id: 1,
  name: 'TaskTest',
  description: 'タスクの簡潔な内容',
  detail: 'タスクのテストです',
  created_at: new Date('2022/04/01'),
  tags: [
    {
      id: 1,
      name: 'TestTag',
      text_color: '#ffffff',
      bg_color: '#ff0000',
      created_at: new Date('2022/04/01'),
    },
    {
      id: 1,
      name: 'Qiita',
      text_color: '#ffffff',
      bg_color: '#00ff00',
      created_at: new Date('2022/04/01'),
    },
  ],
  is_checked: false,
  is_archived: false,
}

export const defaultTaskCard = () => {
  return <TaskCard task={task} />
}

export const checkedTaskCard = () => {
  return <TaskCard task={{ ...task, is_checked: true }} />
}

export default { title: 'components/TaskCard' }
