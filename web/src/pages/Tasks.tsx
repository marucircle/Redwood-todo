import { useParams, routes, Redirect } from '@redwoodjs/router'

import { isViewMode } from '../utils/isViewMode'

const Tasks = () => {
  const { mode = 'all' } = useParams()
  if (!isViewMode(mode)) {
    return <Redirect to={routes.task()} />
  }
  return <>{mode}ページです</>
}

export default Tasks
