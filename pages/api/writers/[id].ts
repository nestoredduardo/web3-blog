import type { NextApiRequest, NextApiResponse } from 'next'

import { getWriter, getPost } from '@utils/fetchWriters'

const handleWriterId = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query

    const writer = await getWriter(id as string)
    const postPreviewResponse = await getPost(id as string)

    res.status(200).json({ writer, postPreviewResponse })
  } catch (error) {
    res.status(404).json({ message: 'RIP Server' })
  }
}

export default handleWriterId
