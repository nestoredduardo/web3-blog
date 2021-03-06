import { useState, useEffect } from 'react'
import Link from 'next/link'

import LogoutIcon from './LogoutIcon'

type ConnectedOptionsProps = {
  handleDisconnect: React.MouseEventHandler<HTMLButtonElement>
}

const ConnectedOptions: React.FC<ConnectedOptionsProps> = ({
  handleDisconnect,
}) => {
  const [hoverButton, setHoverButton] = useState(false)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setTimeout(() => setFade(false), 1000)
  }, [])

  return (
    <div
      className={`absolute top-[72.4px] right-0 w-48 rounded-lg border border-gray-light bg-white text-secondary-gray lg:w-56 lg:text-lg ${
        fade && 'animate-fade-in-down'
      }`}
    >
      <Link href="/yourNFTs">
        <p className="cursor-pointer py-2 px-4 hover:animate-bg-animation hover:bg-gradient-to-r hover:from-sea hover:to-purple hover:bg-[length:200%_200%] hover:text-white">
          Your NFTs
        </p>
      </Link>

      <button
        className="flex w-full px-4 py-2 hover:bg-red-100"
        onClick={handleDisconnect}
        onMouseOver={() => setHoverButton(true)}
        onMouseOut={() => setHoverButton(false)}
      >
        <p className={hoverButton ? 'text-red-500' : ''}>Disconnect</p>
        <div className="my-auto ml-auto w-6">
          <LogoutIcon
            styles={`fill-[#0E0D0D] ${hoverButton ? 'fill-red-500' : ''}`}
          />
        </div>
      </button>
    </div>
  )
}

export default ConnectedOptions
