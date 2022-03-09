import { PublicKey } from '@solana/web3.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { connect, ConnectedProps } from 'react-redux'

import Button from '@components/Button'
import Connected from './Connected'

import { setPublicAddress, removePublicAddress } from '@userActions'

type PhantomEvent = 'disconnect' | 'connect'

interface ConnectOpts {
  onlyIfTrusted: boolean
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>
  disconnect: () => Promise<void>
  on: (event: PhantomEvent, callback: (args: any) => void) => void
  isPhantom: boolean
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider
}

const Connect2Phantom: React.FC<PropsFromRedux> = ({ setPublicAddress }) => {
  const [walletExist, setWalletExist] = useState(false)
  const [provider, setProvider] = useState<PhantomProvider | null>(null)
  const [connected, setConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null)

  useEffect(() => {
    const solWindow = window as WindowWithSolana
    const { solana } = solWindow
    if (solana && solana.isPhantom) {
      setProvider(solana)
      setWalletExist(true)
    }
  }, [])

  useEffect(() => {
    provider?.on('connect', (publicKey: PublicKey) => {
      setConnected(true)
      setPublicKey(publicKey)
      setPublicAddress(publicKey.toString())
    })
    provider?.on('disconnect', () => {
      setConnected(false)
      setPublicKey(null)
      removePublicAddress()
    })
  }, [provider])

  const handleConnect: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (walletExist) {
      await toast.promise(provider?.connect()!, {
        pending: { render: 'Connecting Wallet', position: 'top-center' },
        success: {
          render: 'Wallet Connected!',
          position: 'top-center',
          autoClose: 1500,
          type: 'default',
          icon: '✅',
        },
        error: {
          render: 'Error connecting Wallet :(',
          position: 'top-center',
          autoClose: 1500,
        },
      })
    } else {
      toast('Get a Phantom Wallet to dive into web3 🦄')
    }
  }

  const handleDisconnect: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      await provider?.disconnect()
      toast('Wallet Disconnected!', {
        icon: '👋',
        position: 'top-center',
        autoClose: 1500,
      })
    } catch (error) {
      toast.error('Error disconnecting Wallet :(. Please retry', {
        autoClose: 1000,
      })
    }
  }

  return (
    <div className="flex">
      {connected && publicKey ? (
        <Connected publicKey={publicKey!} handleDisconnect={handleDisconnect} />
      ) : (
        <Button onClick={handleConnect} styles="my-auto">
          Connect Wallet
        </Button>
      )}
    </div>
  )
}

const mapDispatchToProps = {
  setPublicAddress,
}

const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Connect2Phantom)
