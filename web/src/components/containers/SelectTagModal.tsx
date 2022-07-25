import { useGetTagAll } from 'src/hooks/tags/useGetTagAll'
import { Tag } from 'src/types'

import { Modal } from '../Modal'
import { Tag as TagComponent } from '../Tag'

export type SelectTagModalProps = {
  onClose: () => void
  setTag: (tag: Tag) => void
  currentSelectTags: Tag[]
}

export const SelectTagModal = ({
  onClose,
  setTag,
  currentSelectTags,
}: SelectTagModalProps) => {
  const { tags, getTagsLoading } = useGetTagAll()

  return (
    <Modal label="Select Tag" onClose={onClose}>
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {!getTagsLoading &&
          tags.map((tag) => {
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
    </Modal>
  )
}
