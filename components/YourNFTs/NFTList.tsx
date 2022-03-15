import { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '@store'

import { getNFTsfromPublicAddress } from '@userActions'

const NFTList: React.FC<PropsFromRedux> = ({
  getNFTsfromPublicAddress,
  NFTList,
  loadingNFTs,
}) => {
  useEffect(() => {
    getNFTsfromPublicAddress()
  }, [])

  if (loadingNFTs) {
    return <h1>Loading NFTs...</h1>
  }

  return (
    <section className="flex flex-wrap justify-center gap-3">
      {NFTList &&
        NFTList.map((NFT, id) => {
          return (
            <article
              key={id}
              className="w-80 animate-bg-animation rounded-lg bg-gradient-to-r from-purple via-sea to-secondary bg-[length:200%_200%] p-2"
            >
              <div className="rounded-lg bg-black">
                <img src={NFT.image} alt={NFT.name} className="rounded-t-lg" />
                <div className="p-3">
                  <p className="text-xl font-semibold text-white">{NFT.name}</p>
                  <p className="text-gray-200">{NFT.description}</p>
                </div>
              </div>
            </article>
          )
        })}
    </section>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    NFTList: state.user.NFTList,
    loadingNFTs: state.user.loadingNFTs,
  }
}

const mapDispatchToProps = {
  getNFTsfromPublicAddress,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(NFTList)
