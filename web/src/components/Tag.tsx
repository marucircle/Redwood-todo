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
