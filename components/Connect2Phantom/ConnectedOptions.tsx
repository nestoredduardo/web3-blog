import { PublicKey } from '@solana/web3.js'
import Image from 'next/image'

import { formatPublicKey } from '@utils'

import walletIcon from '@icons/wallet.svg'
import downArrowIcon from '@icons/down-arrow.svg'
import logoutIcon from '@icons/logout.svg'

import LogoutIcon from './LogoutIcon'

type ConnectedOptionsProps = {
  publicKey: PublicKey
  handleDisconnect: React.MouseEventHandler<HTMLButtonElement>
}

const ConnectedOptions: React.FC<ConnectedOptionsProps> = ({
  publicKey,
  handleDisconnect,
}) => {
  return (
    <div className="relative flex h-full items-center">
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
      <div className="absolute top-[72.4px] right-0 w-48 rounded-lg border border-gray-light bg-white">
        <p className="py-2 px-4">Yout NFTs</p>
        <button className="flex w-full px-4 py-2">
          <p>Disconnect</p>
          <div className="ml-auto w-6">
            <LogoutIcon styles="fill-[#0E0D0D]" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default ConnectedOptions
