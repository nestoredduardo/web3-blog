import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllWriters } from './utils'

const handleSearch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { input } = req.query
    input = input as string
    const newInput: string = input.toLowerCase()

    const allWriters = await getAllWriters()

    const result = allWriters.filter((writer) => {
      const firstName = writer.firstName.toLowerCase()
      const lastName = writer.lastName.toLowerCase()

      return (
        firstName.includes(newInput) ||
        firstName == newInput ||
        lastName.includes(newInput) ||
        lastName == newInput
      )
    })

    res.status(200).json({ result })
  } catch (error) {
    res.status(404).json({ message: 'RIP Server' })
  }
}

export default handleSearch
