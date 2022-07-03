import { Tag } from 'src/components/Tag'

const tagExample = {
  id: 1,
  name: 'TestTag',
  text_color: '#ffffff',
  bg_color: '#ff0000',
  created_at: new Date('2022/04/01'),
}

export const tag = () => {
  return <Tag tag={tagExample} />
}

export default { title: 'components/Tag' }
