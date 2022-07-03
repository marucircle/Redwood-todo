import { taskViewMode } from 'src/constants'
import { TaskViewMode } from 'src/types'

export const isViewMode = (mode: string): mode is TaskViewMode => {
  return taskViewMode.some((value) => value === mode)
}
