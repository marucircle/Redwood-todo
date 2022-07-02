import { Link, routes } from '@redwoodjs/router'

type TodoLayoutProps = {
  children?: React.ReactNode
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Todo</h1>
      </header>
      <div className="grid grid-cols-2">
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </>
  )
}

export default TodoLayout
