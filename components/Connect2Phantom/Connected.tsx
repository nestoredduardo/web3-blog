import { PublicKey } from '@solana/web3.js'
import Image from 'next/image'
import { useState } from 'react'

import { formatPublicKey } from '@utils'

import walletIcon from '@icons/wallet.svg'
import downArrowIcon from '@icons/down-arrow.svg'
import ConnectedOptions from './ConnectedOptions'

type ConnectedProps = {
  publicKey: PublicKey
  handleDisconnect: React.MouseEventHandler<HTMLButtonElement>
}

const Connected: React.FC<ConnectedProps> = ({
  publicKey,
  handleDisconnect,
}) => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      <div className="relative flex h-6 cursor-pointer items-center rounded-md bg-gray-light pl-12 pr-2 hover:opacity-60">
        <div className="absolute left-0">
          <div className="rounded-full border-2 border-sea bg-white p-2">
            <div className="w-6">
              <Image src={walletIcon} layout="responsive" />
            </div>
          </div>
        </div>
        <p className="mr-2 font-semibold text-gray-dark">
          {formatPublicKey(publicKey.toString())}
        </p>
        <div className="w-4">
          <Image src={downArrowIcon} layout="responsive" />
        </div>
      </div>
      {showOptions && <ConnectedOptions handleDisconnect={handleDisconnect} />}
    </div>
  )
}

export default Connected
