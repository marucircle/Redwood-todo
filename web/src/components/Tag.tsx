import { Tag as TagType } from 'src/types'

export type TagProps = {
  tag: TagType
}

export const Tag = ({ tag }: TagProps): JSX.Element => {
  return (
    <span
      style={{ backgroundColor: tag.bg_color, color: tag.text_color }}
      className="px-2 py-1 rounded-full text-medium-text"
    >
      {tag.name}
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
      className="px-2 py-1 rounded-full text-medium-text cursor-pointer flex flex-row items-center gap-x-2 shadow-sm"
      onClick={onClick}
    >
      <span className="font-bold">+</span>
      <span className="font-bold">Add</span>
    </span>
  )
}
