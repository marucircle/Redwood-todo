import { CheckOutlined, Delete, FormatListBulleted } from '@material-ui/icons'

import { Link, routes } from '@redwoodjs/router'

type TodoLayoutProps = {
  children?: React.ReactNode
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-pure-white">
        <h1 className="text-large-title font-bold">Redwood Todo</h1>
      </header>
      <div className="flex flex-auto">
        <nav className="w-52 py-4">
          <ul className="grid gap-y-4">
            <li>
              <Link to={routes.home()} className="flex gap-x-4 px-2">
                <FormatListBulleted />
                <span className="flex-auto">All</span>
              </Link>
            </li>
            <li>
              <Link to={routes.home()} className="flex gap-x-4 px-2">
                <Delete />
                <span className="flex-auto">Archived</span>
              </Link>
            </li>
            <li>
              <Link to={routes.home()} className="flex gap-x-4 px-2">
                <CheckOutlined />
                <span className="flex-auto">Completed</span>
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-auto p-4 bg-white shadow-inner">{children}</main>
      </div>
    </div>
  )
}

export default TodoLayout
