import Image from 'next/image'

import postIcon from '@icons/post.svg'
import topicIcon from '@icons/topic.svg'

type MoreInfoProps = {
  total: number
  postPreviewList: PostPreview[]
}

const MoreInfo: React.FC<MoreInfoProps> = ({ total, postPreviewList }) => {
  const allTags = postPreviewList.map((post) => post.tags).flat()
  const uniqueTags = Array.from(new Set(allTags))
  const firstTen = uniqueTags.slice(0, 6)

  return (
    <section className="hidden h-fit rounded-2xl border-2 border-gray-light bg-white py-7 px-5 md:flex md:flex-col">
      <div className="flex items-center gap-2">
        <div className="relative h-4 w-4">
          <Image src={postIcon} layout="fill" />
        </div>
        <p>{total} post published</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <div className="relative h-4 w-4">
            <Image src={topicIcon} layout="fill" />
          </div>
          <p>Topics</p>
        </div>
        <ul className="mt-2 flex flex-wrap gap-2">
          {firstTen.map((tag) => (
            <li className="rounded-lg bg-teal-100 p-1 text-xs text-teal-500">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MoreInfo
