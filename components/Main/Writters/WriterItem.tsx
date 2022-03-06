import Link from 'next/link'

import { formatName } from '@utils'

type WriterItemProps = {
  writer: WriterPreview
}

const WriterItem: React.FC<WriterItemProps> = ({ writer }) => {
  return (
    <Link href={`/${writer.id}`}>
      <article className="my-2 mx-6 flex w-80 cursor-pointer items-center rounded-xl border-2 border-gray-light py-4 px-6 hover:animate-writer-bounce hover:bg-gray-light md:mx-12 md:w-96 lg:w-[450px]">
        <div className="mr-4 h-11 w-11 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
          <img src={writer.picture} className="rounded-full" />
        </div>
        <div>
          <h3 className="text-lg font-medium lg:text-xl xl:text-2xl">
            {formatName(writer.title, writer.firstName, writer.lastName)}
          </h3>
          <p className="font-medium text-gray-dark">
            {'@' + writer.firstName.toLowerCase()}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default WriterItem
