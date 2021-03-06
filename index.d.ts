type ListResponse = {
  data: WriterPreview[] | PostPreview[]
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
  location: WriterLocation
}

type WriterLocation = {
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
  owner: WriterPreview
}

type NFTAtribute = {
  display_type?: string
  trait_type: string
  value: string
}

type NFTmetadata = {
  description: string
  external_url: string
  image: string
  name: string
  attributes: NFTAtribute[]
}

type WritersState = {
  list: WriterPreview[]
  loading: boolean
  firstLoading: boolean
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

type UserState = {
  publicAddress: string
  loadingNFTs: boolean
  NFTList?: NFTmetadata[]
  errorNFTS: boolean
}
