import { useState } from 'react'

import { CompactPicker } from 'react-color'

import { FieldError, Form, Label, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { Loading as LoadingView } from 'src/components/Loading'
import { Tag } from 'src/components/Tag'

export const CREATE_TAG = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
      name
      bg_color
      text_color
    }
  }
`
const CreateTag = () => {
  const [color, setColor] = useState({
    bgColor: '#ffffff',
    textColor: '#000000',
  })
  const [tagText, setTagText] = useState('Tag')
  const onSubmit = () => {
    create({
      variables: {
        input: {
          name: tagText,
          bg_color: color.bgColor,
          text_color: color.textColor,
        },
      },
    })
  }

  const [create, { loading, error }] = useMutation(CREATE_TAG, {
    onCompleted: () => {
      alert('タグ登録に成功しました！')
    },
  })

  return (
    <div>
      <div className="my-4">
        <span className="bg-info px-4 mx-4 py-2">
          <Link to={routes.createTag()}>Back</Link>
        </span>
      </div>
      <Form
        onSubmit={onSubmit}
        className="mt-12 grid justify-items-center grid-cols-1"
      >
        <div className="w-3/4 my-4 grid grid-cols-form-input items-baseline gap-x-8">
          <Label name="name" className="mb-2 font-bold">
            Task Name
          </Label>
          <div className="flex flex-col">
            <TextField
              name="name"
              className="py-2 px-4 grow shadow-md rounded-md"
              validation={{ required: true }}
              onChange={(e) => setTagText(e.target.value)}
            />
            <FieldError
              name="name"
              className="error-message"
              style={{ color: '#ff0000' }}
            ></FieldError>
          </div>
        </div>
        <div className="w-3/4 my-4 grid grid-cols-color-input items-center gap-x-8">
          <Label name="name" className="mb-2 font-bold">
            Text Color
          </Label>
          <CompactPicker
            color={color.textColor}
            onChange={(color) =>
              setColor((previous) => {
                return { ...previous, textColor: color.hex }
              })
            }
          />
        </div>
        <div className="w-3/4 my-4 grid grid-cols-color-input items-center gap-x-8">
          <Label name="name" className="mb-2 font-bold">
            Tag Color
          </Label>
          <CompactPicker
            color={color.bgColor}
            onChange={(color) =>
              setColor((previous) => {
                return { ...previous, bgColor: color.hex }
              })
            }
          />
        </div>
        <div className="w-3/4 my-4 grid grid-cols-color-input items-center gap-x-8">
          <div className="mb-2 font-bold">Preview</div>
          <Tag
            tag={{
              name: tagText,
              text_color: color.textColor,
              bg_color: color.bgColor,
            }}
          />
        </div>
        <div className="my-4 flex justify-center">
          <button className="bg-info px-4 mx-4 py-2" type="submit">
            Create Tag
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateTag
