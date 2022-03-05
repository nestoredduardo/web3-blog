type ListResponse = {
  data: WriterPreview[]
  total: number
  page: number
  limit: number
}

type Writer = {
  id: string
  title: string
  firstName: string
  lastName: string
  gender: string
  email: string
  dateOfBirth: string
  registerDate: string
  phone: string
  picture: string
  location: Location
}

type Location = {
  street: string
  city: string
  state: string
  country: string
  timezone: string
}

type WriterPreview = {
  id: string
  title: string
  firstName: string
  lastName: string
  picture: string
}

type PostPreview = {
  id: string
  text: string
  image: string
  likes: number
  tags: string[]
  publishDate: string
  owner: object
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
