import toast from 'react-hot-toast'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { CREATE_TASK } from 'src/graphql/task'
import { Task } from 'src/types'

export const useCreateTask = () => {
  const [create, { loading, error, data }] = useMutation<Task>(CREATE_TASK, {
    onCompleted: () => {
      toast.success('タスク登録に成功しました！')
      navigate(routes.task())
    },
    onError: () => {
      toast.error('タグ取得に失敗しました...。')
    },
  })

  return {
    create,
    createTaskLoading: loading,
    createTaskError: error,
    task: data,
  }
}
