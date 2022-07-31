import { useMemo } from 'react'

import { Tag } from 'src/types'

import { Modal } from '../Modal'
import { CreateTaskViewTag, Tag as TagComponent } from '../Tag'

export type SelectTagModalProps = {
  onClose: () => void
  setTag: (tag: Tag) => void
  currentSelectTags: Tag[]
  registeredTags: Tag[]
}

export const SelectTagModal = ({
  onClose,
  setTag,
  currentSelectTags,
  registeredTags,
}: SelectTagModalProps) => {
  const selectableTags = useMemo(
    () =>
      registeredTags.filter(
        (tag) => !currentSelectTags.some((checker) => checker.id === tag.id)
      ),
    [currentSelectTags, registeredTags]
  )

  return (
    <Modal label="Select Tag" onClose={onClose}>
      <div className="mb-8">
        <div className="mb-2 font-bold">選択済みのタグ</div>
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {currentSelectTags.map((tag) => {
            return (
              <span
                key={tag.id}
                onClick={() => setTag(tag)}
                className="cursor-pointer"
              >
                <CreateTaskViewTag tag={tag} />
              </span>
            )
          })}
        </div>
      </div>
      <div>
        <div className="mb-2 font-bold">未選択のタグ</div>
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {selectableTags.map((tag) => {
            return (
              <span
                key={tag.id}
                onClick={() => setTag(tag)}
                className="cursor-pointer"
              >
                <TagComponent tag={tag} />
              </span>
            )
          })}
        </div>
      </div>
    </Modal>
  )
}
