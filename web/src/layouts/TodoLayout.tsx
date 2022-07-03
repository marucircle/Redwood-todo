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
        <nav className="w-52 px-2 py-4">
          <ul className="grid gap-y-4">
            <li>
              <Link to={routes.home()}>All</Link>
            </li>
            <li>
              <Link to={routes.home()}>Archived</Link>
            </li>
            <li>
              <Link to={routes.home()}>Completed</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-auto p-4 bg-white shadow-inner">{children}</main>
      </div>
    </div>
  )
}

export default TodoLayout
