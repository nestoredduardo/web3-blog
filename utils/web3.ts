import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz'

const getNFTsfromAddress = async (publicKey: string) => {
  const publicAddress = await resolveToWalletAddress({
    text: publicKey!,
  })
  const nftArray = await getParsedNftAccountsByOwner({
    publicAddress,
  })
  return nftArray
}

export { getNFTsfromAddress }
