import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '@store'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const YourWallet: React.FC<PropsFromRedux> = ({ publicAddress }) => {
  if (!publicAddress) {
    const router = useRouter()
    router.push('/')
  } else {
    return <h1>Watch your NFTs</h1>
  }

  return null
}

const mapStateToProps = (state: RootState) => {
  return {
    publicAddress: state.user.publicAddress,
  }
}

const connector = connect(mapStateToProps, null)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(YourWallet)
