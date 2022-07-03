import { taskViewMode } from './constants'

export type TaskViewMode = typeof taskViewMode[number]

export type Tag = {
  id: number
  name: string
  bg_color: string
  text_color: string
  created_at: Date
}

export type Task = {
  id: number
  name: string
  detail: string
  tags: Tag[]
  created_at: Date
  is_checked: boolean
  is_archived: boolean
}
