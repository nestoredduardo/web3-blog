import Image from 'next/image'

import { formatName } from '@utils'

type BlogItemProps = {
  postPreview: PostPreview
}

const BlogItem: React.FC<BlogItemProps> = ({ postPreview }) => {
  return (
    <article className="bg-red-500">
      <div>
        <div className="relative h-5 w-5">
          <Image src={postPreview.owner.picture} layout="fill" />
        </div>
        <div>
          <p>
            {formatName(
              postPreview.owner.title,
              postPreview.owner.firstName,
              postPreview.owner.lastName
            )}
          </p>
          <p>{postPreview.publishDate}</p>
        </div>
      </div>
      <h3>{postPreview.text}</h3>
      <div></div>
    </article>
  )
}

export default BlogItem
