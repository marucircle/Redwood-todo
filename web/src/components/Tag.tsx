import { Tag as TagType } from 'src/types'

export type TagProps = {
  tag: TagType
}

export const Tag = ({ tag }: TagProps): JSX.Element => {
  return (
    <span
      style={{ backgroundColor: tag.bg_color, color: tag.text_color }}
      className="px-2 py-1 rounded-full text-medium-text font-bold shadow-md"
    >
      {tag.name}
    </span>
  )
}

export const CreateTaskViewTag = ({ tag }: TagProps): JSX.Element => {
  return (
    <span
      style={{ backgroundColor: tag.bg_color, color: tag.text_color }}
      className="px-2 py-1 rounded-full text-medium-text font-bold flex flex-row items-center gap-x-2 shadow-md cursor-pointer"
    >
      <span>×</span>
      <span> {tag.name}</span>
    </span>
  )
}

export type NewTagProps = {
  onClick: () => void
}

export const NewTag = ({ onClick }: NewTagProps): JSX.Element => {
  return (
    <span
      style={{ backgroundColor: '#cccccc', color: '#ffffff' }}
      className="px-2 py-1 rounded-full text-medium-text cursor-pointer flex flex-row items-center gap-x-2 shadow-md"
      onClick={onClick}
    >
      <span className="font-bold">+</span>
      <span className="font-bold">Add</span>
    </span>
  )
}
