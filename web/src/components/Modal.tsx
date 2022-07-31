import { Overlay } from './Overlay'
import { Border } from './utils/Border'

export type ModalProps = {
  onClose: () => void
  label: string
  children: React.ReactNode
}

export const Modal = ({
  onClose,
  label,
  children,
}: ModalProps): JSX.Element => {
  return (
    <div>
      <Overlay onClick={onClose} />
      <div className=" bg-white rounded-sm fixed position-center z-modal w-3/4 h-3/4">
        <div className="py-2 px-4 text-large-title">{label}</div>
        <Border />
        <div className="py-4 px-4">{children}</div>
      </div>
    </div>
  )
}
