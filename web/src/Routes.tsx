// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import TodoLayout from './layouts/TodoLayout'
import Tasks from './pages/Tasks'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />
      <Set wrap={[TodoLayout]}>
        <Route path="/tasks/{mode:String}" page={Tasks} name="tasks" />
        <Route path="/tasks" page={Tasks} name="task" />
      </Set>
    </Router>
  )
}

export default Routes
