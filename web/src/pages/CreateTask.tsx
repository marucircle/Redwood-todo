import { useState } from 'react'

import ReactMarkdown from 'react-markdown'

import { Link, routes } from '@redwoodjs/router'

const CreateTask = () => {
  const [isEdit, setIsEdit] = useState(true)
  const [markdownData, setMarkdownData] = useState('')
  return (
    <div>
      <div className="my-4">
        <span className="bg-info px-4 mx-4 py-2">
          <Link to={routes.createTask()}>Back</Link>
        </span>
      </div>
      <div>
        <div className="my-2">
          <div className="mb-2">タスク内容</div>
          <div onClick={() => setIsEdit(!isEdit)}>表示変更</div>
          {isEdit ? (
            <textarea
              value={markdownData}
              onChange={(e) => setMarkdownData(e.target.value)}
              className="py-4 px-4 w-full"
              rows={10}
            ></textarea>
          ) : (
            <div className="bg-pure-white py-4 px-4">
              <ReactMarkdown className="reactMarkDown">
                {markdownData}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateTask
