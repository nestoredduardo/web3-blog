const fetchWriters = async (nextPage: number): Promise<ListResponse> => {
  const { API_URI, APP_ID } = process.env

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'app-id': APP_ID!,
  }

  const requestOptions: RequestInit = {
    method: 'GET',
    headers,
  }

  const response = await fetch(
    `${API_URI}/user?page=${nextPage}&limit=10`,
    requestOptions
  )
  const data = await response.json()
  return data
}

export default fetchWriters
