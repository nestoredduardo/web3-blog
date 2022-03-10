import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '@store'
import { useRouter } from 'next/router'

import NFTList from './NFTList'

const YourWallet: React.FC<PropsFromRedux> = ({ publicAddress }) => {
  if (!publicAddress) {
    const router = useRouter()
    router.push('/')
  } else {
    return (
      <main className="px-3 md:px-8 xl:px-40">
        <h1 className="mt-6 mb-4 text-center text-3xl font-semibold">
          Watch your NFTs
        </h1>
        <NFTList />
      </main>
    )
  }

  return <h1>Returning to HomePage...</h1>
}

const mapStateToProps = (state: RootState) => {
  return {
    publicAddress: state.user.publicAddress,
  }
}

const connector = connect(mapStateToProps, null)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(YourWallet)
