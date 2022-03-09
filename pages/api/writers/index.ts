import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllWriters } from '@utils/fetchWriters'

const handleSearch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allWriters = await getAllWriters()

    res.status(200).json(allWriters)
  } catch (error) {
    res.status(404).json({ message: 'RIP Server' })
  }
}

export default handleSearch
