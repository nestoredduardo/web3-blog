import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchWriters } from './utils'

const handleFetchWriters = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { page, limit } = req.query

    const data = await fetchWriters(page as string, limit as string)

    res.status(200).json({ ...data })
  } catch (error) {
    res.status(404).json({ message: 'RIP Server' })
  }
}

export default handleFetchWriters
