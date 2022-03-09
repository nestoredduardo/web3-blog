const headers: HeadersInit = {
  'Content-Type': 'application/json',
  'app-id': process.env.APP_ID!,
}

const requestOptions: RequestInit = {
  method: 'GET',
  headers,
}

const fetchWriters = async (
  page: string,
  limit: string
): Promise<ListResponse> => {
  const response = await fetch(
    `${process.env.API_URI}user?page=${page}&limit=${limit}`,
    requestOptions
  )
  const data = await response.json()
  return data
}

const getAllWriters = async (): Promise<WriterPreview[]> => {
  const firstBatch = await fetchWriters('0', '50')
  let allWriters = firstBatch.data as WriterPreview[]
  let total = firstBatch.total

  if (allWriters.length < total) {
    const nextPage = firstBatch.page + 1
    const batch = await fetchWriters(nextPage.toString(), '50')
    allWriters.concat(batch.data as WriterPreview[])
    total = batch.total
  }

  return allWriters
}

const getWriter = async (id: string): Promise<Writer> => {
  const response = await fetch(
    `${process.env.API_URI}user/${id}`,
    requestOptions
  )
  const data = await response.json()
  return data
}

const getPost = async (id: string): Promise<PostPreview[]> => {
  const response = await fetch(
    `${process.env.API_URI}user/${id}/post`,
    requestOptions
  )
  const data = await response.json()
  return data
}

export { fetchWriters, getAllWriters, getWriter, getPost }
