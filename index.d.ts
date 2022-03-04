type ListResponse = {
  data: WriterPreview[]
  total: number
  page: number
  limit: number
}

type WriterPreview = {
  id: string
  title: string
  firstName: string
  lastName: string
  picture: string
}

type WritersState = {
  list: WriterPreview[]
  loading: boolean
  error: boolean
  total: number | null
  nextPage: number
  limit: number
}

type SearchState = {
  results: WriterPreview[]
  loading: boolean
  error: boolean
}
