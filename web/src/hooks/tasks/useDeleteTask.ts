import toast from 'react-hot-toast'

import { useMutation } from '@redwoodjs/web'

import { DELETE_TASK } from 'src/graphql/task'

export const useDeleteTask = () => {
  const [deleteTask, { loading, error }] = useMutation(DELETE_TASK, {
    onCompleted: () => {
      toast.success('タスク削除に成功しました！')
    },
    onError: () => {
      toast.error('タスク削除に失敗しました...。')
    },
  })

  return {
    deleteTask,
    deleteTaskLoading: loading,
    deleteTaskError: error,
  }
}
