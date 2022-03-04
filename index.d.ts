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
