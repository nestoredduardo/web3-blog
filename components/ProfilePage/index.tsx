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
  return (
    <main>
      <ProfileCard writer={writer} />
      <BlogList postPreviewList={postPreviewResponse.data as PostPreview[]} />
    </main>
  )
}

export default Profile
