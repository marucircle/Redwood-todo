export type OverlayType = {
  onClick: () => void
}

export const Overlay = ({ onClick }: OverlayType): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="bg-black bg-blend-overlay w-full h-full z-overlay fixed top-0 left-0 opacity-50"
    ></div>
  )
}
