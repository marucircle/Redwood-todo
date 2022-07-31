import { Oval } from 'react-loader-spinner'

import { Overlay } from './Overlay'

export const Loading = () => {
  return (
    <div>
      <Overlay />
      <div className="fixed position-center z-modal">
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          color="blue"
          secondaryColor="white"
        />
      </div>
    </div>
  )
}
