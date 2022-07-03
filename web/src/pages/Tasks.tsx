import { useParams } from '@redwoodjs/router'

const Tasks = () => {
  const { mode = 'all' } = useParams()
  return <>{mode}ページです</>
}

export default Tasks
