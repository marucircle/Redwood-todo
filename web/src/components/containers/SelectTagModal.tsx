import { Modal } from '../Modal'

export type SelectTagModalProps = {
  onClose: () => void
}

export const SelectTagModal = ({ onClose }: SelectTagModalProps) => {
  return (
    <Modal label="タグ選択" onClose={onClose}>
      test
    </Modal>
  )
}
