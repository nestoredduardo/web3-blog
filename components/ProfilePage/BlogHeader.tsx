import Image from 'next/image'

import { formatName, formatDate } from '@utils'

type BlogHeaderProps = {
  title: string
  firstName: string
  lastName: string
  picture: string
  publishDate: string
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  firstName,
  lastName,
  picture,
  publishDate,
}) => {
  return (
    <div className="flex items-center gap-3 text-gray-dark">
      <div className="relative h-8 w-8 xl:h-11 xl:w-11">
        <Image src={picture} layout="fill" className="rounded-full" />
      </div>
      <div className="leading-5">
        <p className="font-medium xl:text-lg">
          {formatName(title, firstName, lastName)}
        </p>
        <p className="text-sm xl:text-base">
          {formatDate(publishDate, 'blog')}
        </p>
      </div>
    </div>
  )
}

export default BlogHeader
