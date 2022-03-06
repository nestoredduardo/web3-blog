import { useEffect, useState } from 'react'

import BlogList from './BlogList'
import ProfileCard from './ProfileCard'
import MoreInfo from './MoreInfo'

type WritersResponse = {
  writer: Writer
  postPreviewResponse: ListResponse
}

const Profile: React.FC<WritersResponse> = ({
  writer,
  postPreviewResponse,
}) => {
  const [fade, setFade] = useState(true)
  useEffect(() => {
    setTimeout(() => setFade(false), 1800)
  }, [])

  return (
    <main
      className={'bg-background-light ' + (fade && 'animate-fade-in-right')}
    >
      <ProfileCard writer={writer} />
      <div className="my-6 grid grid-cols-1 md:mx-6 md:grid-cols-3 md:gap-5 lg:mx-auto lg:w-4/5 xl:w-3/4">
        <MoreInfo
          total={postPreviewResponse.total}
          postPreviewList={postPreviewResponse.data as PostPreview[]}
        />
        <BlogList postPreviewList={postPreviewResponse.data as PostPreview[]} />
      </div>
    </main>
  )
}

export default Profile
