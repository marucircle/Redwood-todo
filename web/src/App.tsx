import { Toaster } from 'react-hot-toast'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { TaskFilterProvider } from './contexts/TaskFilterContext'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider type="dbAuth">
        <TaskFilterProvider>
          <RedwoodApolloProvider>
            <Toaster />
            <Routes />
          </RedwoodApolloProvider>
        </TaskFilterProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
