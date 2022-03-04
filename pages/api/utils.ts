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

export { fetchWriters }
