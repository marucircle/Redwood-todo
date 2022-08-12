import React, { useReducer } from 'react'

type TaskFilterActionType =
  | {
      type: 'CHANGE_MODE'
      mode: string
    }
  | { type: 'CHANGE_FILTER_TAG'; tagName: string }

type TaskFilterStateType = { mode?: string; tagName?: string }

type TaskFilterContextType = {
  taskFilterState: TaskFilterStateType
  taskFilterDispatch: React.Dispatch<TaskFilterActionType>
}

const taskFilterInitialState = {}

const TaskFilterContext = React.createContext<TaskFilterContextType>(
  {} as TaskFilterContextType
)

const TaskFilterReducer = (
  state: TaskFilterStateType,
  action: TaskFilterActionType
) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, mode: action.mode }

    case 'CHANGE_FILTER_TAG':
      return { ...state, tagName: state.tagName }
    default:
      return state
  }
}

export const TaskFilterProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [taskFilterState, taskFilterDispatch] = useReducer(
    TaskFilterReducer,
    taskFilterInitialState
  )

  return (
    <TaskFilterContext.Provider value={{ taskFilterState, taskFilterDispatch }}>
      {children}
    </TaskFilterContext.Provider>
  )
}
