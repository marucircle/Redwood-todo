import toast from 'react-hot-toast'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { UPDATE_CHECK_TASK } from 'src/graphql/task'
import { Task } from 'src/types'

export const useUpdateCheckTask = () => {
  const [update, { loading, error, data }] = useMutation<Task>(
    UPDATE_CHECK_TASK,
    {
      onCompleted: () => {
        toast.success('タスクのチェック更新に成功しました！')
        navigate(routes.tasks())
      },
      onError: () => {
        toast.error('タスクのチェック更新に失敗しました...。')
      },
    }
  )

  return {
    update,
    updateCheckTaskLoading: loading,
    updateCheckTaskError: error,
    task: data,
  }
}
