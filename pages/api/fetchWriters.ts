import type { NextApiRequest, NextApiResponse } from 'next'

const fetchWriters = async (page: string): Promise<ListResponse> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'app-id': process.env.APP_ID!,
  }

  const requestOptions: RequestInit = {
    method: 'GET',
    headers,
  }

  const response = await fetch(
    `${process.env.API_URI}user?page=${page}&limit=10`,
    requestOptions
  )
  const data = await response.json()
  return data
}

const handleFetchWriters = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { page } = req.query

    const data = await fetchWriters(page as string)

    res.status(200).json({ ...data })
  } catch (error) {
    res.status(404).json({ message: 'RIP Server' })
  }
}

export default handleFetchWriters
