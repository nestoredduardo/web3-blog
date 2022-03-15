import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '@store'

import NFTList from './NFTList'

const YourWallet: React.FC<PropsFromRedux> = ({ publicAddress }) => {
  return (
    <main className="mb-4 px-3 md:px-8 xl:px-40">
      <h1 className="mt-6 mb-4 text-center text-3xl font-semibold">
        Watch your NFTs
      </h1>
      <NFTList />
    </main>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    publicAddress: state.user.publicAddress,
  }
}

const connector = connect(mapStateToProps, null)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(YourWallet)
