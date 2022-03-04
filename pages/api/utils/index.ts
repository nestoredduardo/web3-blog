const fetchWriters = async (
  page: string,
  limit: string
): Promise<ListResponse> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'app-id': process.env.APP_ID!,
  }

  const requestOptions: RequestInit = {
    method: 'GET',
    headers,
  }

  const response = await fetch(
    `${process.env.API_URI}user?page=${page}&limit=${limit}`,
    requestOptions
  )
  const data = await response.json()
  return data
}

const getAllWriters = async (): Promise<WriterPreview[]> => {
  const firstBatch = await fetchWriters('0', '50')
  let allWriters = firstBatch.data
  let total = firstBatch.total

  if (allWriters.length < total) {
    const nextPage = firstBatch.page + 1
    const batch = await fetchWriters(nextPage.toString(), '50')
    allWriters.concat(batch.data)
    total = batch.total
  }

  return allWriters
}

export { fetchWriters, getAllWriters }
