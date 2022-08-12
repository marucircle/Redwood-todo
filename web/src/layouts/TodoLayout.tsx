import { useContext } from 'react'

import { CheckOutlined, Delete, FormatListBulleted } from '@material-ui/icons'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import { TaskFilterContext } from 'src/contexts/TaskFilterContext'

type TodoLayoutProps = {
  children?: React.ReactNode
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  const { logOut } = useAuth()
  const { taskFilterDispatch } = useContext(TaskFilterContext)
  return (
    <div className="flex flex-col">
      <header className="flex items-center h-header bg-pure-white px-4">
        <h1 className="text-large-title font-bold">Redwood Todo</h1>
      </header>
      <div className="flex flex-auto h-full">
        <nav className="w-52 py-4">
          <ul className="grid gap-y-4">
            <li
              onClick={() =>
                taskFilterDispatch({ type: 'CHANGE_MODE', mode: 'all' })
              }
              className="flex gap-x-4 px-4"
            >
              <FormatListBulleted />
              <span className="flex-auto">All</span>
            </li>
            <li
              onClick={() =>
                taskFilterDispatch({ type: 'CHANGE_MODE', mode: 'archived' })
              }
              className="flex gap-x-4 px-4"
            >
              <Delete />
              <span className="flex-auto">Archived</span>
            </li>
            <li
              onClick={() =>
                taskFilterDispatch({ type: 'CHANGE_MODE', mode: 'completed' })
              }
              className="flex gap-x-4 px-4"
            >
              <CheckOutlined />
              <span className="flex-auto">Completed</span>
            </li>
          </ul>
          <Link
            to={routes.createTask()}
            className="flex justify-center bg-info mx-8 py-2 my-16"
          >
            New Task
          </Link>
          <div className="flex gap-x-4 px-4 my-16" onClick={logOut}>
            <CheckOutlined />
            <span>Logout</span>
          </div>
        </nav>
        <main className="flex-auto p-4 bg-white shadow-inner overflow-y-scroll h-task-list">
          {children}
        </main>
      </div>
    </div>
  )
}

export default TodoLayout
