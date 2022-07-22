import { useState } from 'react'

import { CirclePicker, CompactPicker } from 'react-color'

import { Form, Label, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

import { Tag } from 'src/components/Tag'

const CreateTag = () => {
  const [color, setColor] = useState({
    bgColor: '#ffffff',
    textColor: '#0000000',
  })
  const onSubmit = () => {}

  return (
    <div>
      <div className="my-4">
        <span className="bg-info px-4 mx-4 py-2">
          <Link to={routes.createTag()}>Back</Link>
        </span>
      </div>
      <div className="w-3/4 my-4 flex flex-row justify-items-center items-baseline gap-x-8">
        <div className="mb-2 font-bold">View:</div>
        <Tag
          tag={{
            name: 'test',
            text_color: color.textColor,
            bg_color: color.bgColor,
          }}
        />
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
            className="py-2 px-4 grow shadow-md rounded-md"
          />
        </div>
        <div className="w-3/4 my-4 grid grid-cols-color-input items-center gap-x-8">
          <Label name="name" className="mb-2 font-bold">
            テキストカラー
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
            タグカラー
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
      </Form>
    </div>
  )
}

export default CreateTag
