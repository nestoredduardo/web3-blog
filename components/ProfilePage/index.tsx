import { useEffect, useState } from 'react'
import BlogList from './BlogList'
import ProfileCard from './ProfileCard'

type WritersResponse = {
  writer: Writer
  postPreviewResponse: ListResponse
}

const Profile: React.FC<WritersResponse> = ({
  writer,
  postPreviewResponse,
}) => {
  const [roll, setRoll] = useState(true)
  useEffect(() => {
    setTimeout(() => setRoll(false), 1800)
  }, [])

  return (
    <main className={'bg-background-light ' + (roll && 'roll-in')}>
      <ProfileCard writer={writer} />
      <BlogList postPreviewList={postPreviewResponse.data as PostPreview[]} />
    </main>
  )
}

export default Profile
