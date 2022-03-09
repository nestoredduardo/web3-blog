import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz'

const fetchNFTURI = async (uri: string): Promise<NFTmetadata> => {
  const response = await fetch(uri)
  const data: NFTmetadata = await response.json()

  return data
}

const getNFTsfromAddress = async (publicKey: string) => {
  const publicAddress = await resolveToWalletAddress({
    text: publicKey!,
  })
  const nftArray = await getParsedNftAccountsByOwner({
    publicAddress,
  })

  const NFTmetadata = await Promise.all(
    nftArray.map(async (nft) => {
      const metadata = await fetchNFTURI(nft.data.uri)
      return metadata
    })
  )

  return NFTmetadata
}

export { getNFTsfromAddress }
