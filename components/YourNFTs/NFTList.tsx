import { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '@store'

import { getNFTsfromPublicAddress } from '@userActions'

const NFTList: React.FC<PropsFromRedux> = ({ getNFTsfromPublicAddress }) => {
  useEffect(() => {
    getNFTsfromPublicAddress()
  }, [])

  return <section>Hi</section>
}

const mapDispatchToProps = {
  getNFTsfromPublicAddress,
}

const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(NFTList)
