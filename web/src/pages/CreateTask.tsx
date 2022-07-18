import { useState } from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Form, Label, TextAreaField, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

import { NewTag, Tag as TagComponent } from 'src/components/Tag'
import { Tag } from 'src/types'

const CreateTask = () => {
  const [isEdit, setIsEdit] = useState(true)
  const [markdownData, setMarkdownData] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [tags, setTags] = useState<Tag[]>([])

  const onSubmit = () => {
    console.log('submit!')
  }
  return (
    <div>
      <div className="my-4">
        <span className="bg-info px-4 mx-4 py-2">
          <Link to={routes.createTask()}>Back</Link>
        </span>
      </div>
      <Form
        onSubmit={onSubmit}
        className="mt-12 grid justify-items-center
 grid-cols-1"
      >
        <div className="w-3/4 my-4 flex flex-row items-baseline gap-x-8">
          <Label name="name" className="mb-2 font-bold">
            タスク名
          </Label>
          <TextField
            name="name"
            className="py-2 px-4 grow shadow-md rounded-md"
          />
        </div>
        <div className=" w-3/4 my-8 flex flex-row gap-x-8 items-baseline">
          <Label name="name" className="mb-2 font-bold">
            タグ
          </Label>
          <div>
            {tags.map((tag: Tag) => {
              return <TagComponent key={tag.id} tag={tag} />
            })}
            <NewTag onClick={() => setIsOpenModal(true)} />
          </div>
        </div>
        <div className="w-3/4 my-4 items-center">
          <Label name="detail" className="mb-2 font-bold">
            タスク内容
          </Label>
          <div onClick={() => setIsEdit(!isEdit)} className="cursor-pointer">
            表示変更
          </div>
          {isEdit ? (
            <TextAreaField
              name="detail"
              value={markdownData}
              onChange={(e) => setMarkdownData(e.target.value)}
              className="py-4 px-4 w-full shadow-md rounded-md"
              rows={10}
            ></TextAreaField>
          ) : (
            <div className="bg-pure-white py-4 px-4 shadow-md rounded-md">
              <ReactMarkdown
                className="reactMarkDown"
                remarkPlugins={[remarkGfm]}
              >
                {markdownData}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </Form>
    </div>
  )
}

export default CreateTask
