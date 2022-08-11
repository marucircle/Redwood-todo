// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import StandardLayout from './layouts/StandardLayout'
import TodoLayout from './layouts/TodoLayout'
import CreateTag from './pages/CreateTag'
import CreateTask from './pages/CreateTask'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
import SignupPage from './pages/SignupPage/SignupPage'
import TaskDetail from './pages/TaskDetail'
import Tasks from './pages/Tasks'

const Routes = () => {
  return (
    <Router>
      <Set>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Set>
      <Private unauthenticated="login">
        <Set wrap={[TodoLayout]}>
          <Route path="/tasks/{mode:String}" page={Tasks} name="tasks" />
          <Route path="/tasks" page={Tasks} name="task" />
        </Set>
        <Set wrap={[StandardLayout]}>
          <Route path="/task/create" page={CreateTask} name="createTask" />
          <Route path="/tag/create" page={CreateTag} name="createTag" />
          <Route path="/task/{id:number}" page={TaskDetail} name="taskDetail" />
        </Set>
      </Private>
    </Router>
  )
}

export default Routes
