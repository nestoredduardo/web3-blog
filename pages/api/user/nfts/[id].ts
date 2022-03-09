import type { NextApiRequest, NextApiResponse } from 'next'

import { getNFTsfromAddress } from '@utils/web3'

const handleGetUserNFTs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const response = await getNFTsfromAddress(id as string)

    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ message: 'RIP Server' })
  }
}

export default handleGetUserNFTs
