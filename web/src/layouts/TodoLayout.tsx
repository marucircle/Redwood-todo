import { CheckOutlined, Delete, FormatListBulleted } from '@material-ui/icons'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type TodoLayoutProps = {
  children?: React.ReactNode
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  const { logOut } = useAuth()
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-pure-white">
        <h1 className="text-large-title font-bold">Redwood Todo</h1>
      </header>
      <div className="flex flex-auto">
        <nav className="w-52 py-4">
          <ul className="grid gap-y-4">
            <li>
              <Link
                to={routes.tasks({ mode: 'all' })}
                className="flex gap-x-4 px-4"
              >
                <FormatListBulleted />
                <span className="flex-auto">All</span>
              </Link>
            </li>
            <li>
              <Link
                to={routes.tasks({ mode: 'archived' })}
                className="flex gap-x-4 px-4"
              >
                <Delete />
                <span className="flex-auto">Archived</span>
              </Link>
            </li>
            <li>
              <Link
                to={routes.tasks({ mode: 'completed' })}
                className="flex gap-x-4 px-4"
              >
                <CheckOutlined />
                <span className="flex-auto">Completed</span>
              </Link>
            </li>
            <li>
              <div className="flex gap-x-4 px-4" onClick={logOut}>
                <CheckOutlined />
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </nav>
        <main className="flex-auto p-4 bg-white shadow-inner">{children}</main>
      </div>
    </div>
  )
}

export default TodoLayout
