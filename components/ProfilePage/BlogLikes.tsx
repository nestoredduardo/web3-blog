import { useState } from 'react'

const BlogLikes: React.FC<{ likes: number }> = ({ likes }) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className="relative ml-auto flex cursor-pointer items-center"
      onClick={() => setIsLiked(!isLiked)}
    >
      <div className={'heart ' + (isLiked && 'heart-animation')}></div>
      <p
        className={
          'whitespace-nowrap text-sm text-gray-dark xl:text-lg ' +
          (isLiked && 'text-red-500')
        }
      >
        {isLiked ? likes + 1 : likes} likes
      </p>
    </div>
  )
}

export default BlogLikes
