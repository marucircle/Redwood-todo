import { useMutation } from '@redwoodjs/web'

import { CREATE_TASK } from 'src/graphql/task'
import { Task } from 'src/types'

export const useCreateTask = () => {
  const [create, { loading, error, data }] = useMutation<Task>(CREATE_TASK, {
    onCompleted: () => {
      alert('タスク登録に成功しました！')
    },
  })

  return {
    create,
    createTaskLoading: loading,
    createTaskError: error,
    task: data,
  }
}
