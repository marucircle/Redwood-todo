import { useState } from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
  Form,
  Label,
  SelectField,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

import { SelectTagModal } from 'src/components/containers/SelectTagModal'
import { Loading as LoadingView } from 'src/components/Loading'
import { CreateTaskViewTag, NewTag } from 'src/components/Tag'
import { useGetTagAll } from 'src/hooks/tags/useGetTagAll'
import { useCreateTask } from 'src/hooks/tasks/useCreateTask'
import { Tag } from 'src/types'

type createTaskForm = {
  name: string
  priority: number
}

const CreateTask = () => {
  const [isEdit, setIsEdit] = useState(true)
  const [markdownData, setMarkdownData] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { create, createTaskLoading } = useCreateTask()
  const [tags, setTags] = useState<Tag[]>([])
  const { tags: registeredTags, getTagsLoading } = useGetTagAll()

  const onSubmit = (data: createTaskForm) => {
    create({
      variables: {
        input: {
          name: data.name,
          priority: data.priority,
          detail: markdownData,
          tags: tags.map((tag) => tag.id),
        },
      },
    })
  }

  const handleChangeTag = (tag: Tag) => {
    if (tags.some((checker) => checker.id === tag.id)) {
      setTags((previousTags) =>
        previousTags.filter((checker) => checker.id !== tag.id)
      )
    } else {
      setTags((previousTags) => [...previousTags, tag])
    }
  }

  if (getTagsLoading) return <LoadingView />

  return (
    <div>
      {createTaskLoading && <LoadingView />}
      {isOpenModal && (
        <SelectTagModal
          onClose={() => setIsOpenModal(false)}
          setTag={(tag) => handleChangeTag(tag)}
          currentSelectTags={tags}
          registeredTags={registeredTags}
        />
      )}
      <div className="my-4">
        <span className="bg-info px-4 mx-4 py-2">
          <Link to={routes.tasks()}>Back</Link>
        </span>
      </div>
      <Form
        onSubmit={onSubmit}
        className="mt-12 grid justify-items-center grid-cols-1"
      >
        <div className="w-3/4 my-4 grid grid-cols-form-input items-baseline gap-x-8">
          <Label name="name" className="mb-2 font-bold">
            タスク名
          </Label>
          <TextField
            name="name"
            className="py-2 px-2 grow shadow-md rounded-md"
            validation={{ required: true }}
          />
        </div>
        <div className=" w-3/4 my-8 grid grid-cols-form-input gap-x-8 items-baseline">
          <Label name="name" className="mb-2 font-bold">
            タグ
          </Label>
          <div className="flex flex-row gap-x-2">
            {tags.map((tag: Tag) => {
              return (
                <span key={tag.id} onClick={() => handleChangeTag(tag)}>
                  <CreateTaskViewTag tag={tag} />
                </span>
              )
            })}
            <NewTag onClick={() => setIsOpenModal(true)} />
          </div>
        </div>
        <div className="w-3/4 my-4 grid grid-cols-form-input items-baseline gap-x-8">
          <Label name="priority" className="mb-2 font-bold">
            優先度
          </Label>
          <SelectField
            name="priority"
            className="py-2 px-1 grow shadow-md rounded-md"
            validation={{
              required: true,
              valueAsNumber: true,
              validate: {
                matchesInitialValue: (value) => {
                  return value !== '-'
                },
              },
            }}
          >
            <option>-</option>
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </SelectField>
        </div>
        <div className="w-3/4 my-4 items-center">
          <Label name="detail" className="mb-2 font-bold">
            タスク内容
          </Label>
          <span onClick={() => setIsEdit(!isEdit)} className="cursor-pointer">
            表示変更
          </span>
          {isEdit ? (
            <TextAreaField
              name="detail"
              value={markdownData}
              onChange={(e) => setMarkdownData(e.target.value)}
              validation={{ required: true }}
              className="py-4 px-4 w-full shadow-md rounded-md"
              rows={10}
            ></TextAreaField>
          ) : (
            <div className="bg-pure-white py-4 px-4">
              <ReactMarkdown
                className="reactMarkDown"
                remarkPlugins={[remarkGfm]}
              >
                {markdownData}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <div className="my-4 flex justify-center">
          <button className="bg-info px-4 mx-4 py-2" type="submit">
            Create Task
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateTask
