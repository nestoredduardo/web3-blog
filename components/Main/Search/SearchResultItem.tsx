import Link from 'next/link'

import { formatName } from '@utils/formatData'

type WriterItemProps = {
  writer: WriterPreview
}

const WriterItem: React.FC<WriterItemProps> = ({ writer }) => {
  return (
    <Link href={`/${writer.id}`}>
      <li className="flex cursor-pointer items-center py-4 px-6 hover:bg-gray-light">
        <div className="mr-4 h-11 w-11 lg:h-14 lg:w-14 xl:h-16 xl:w-16">
          <img src={writer.picture} className="rounded-full" />
        </div>
        <div>
          <h3 className="text-lg font-medium xl:text-xl">
            {formatName(writer.title, writer.firstName, writer.lastName)}
          </h3>
          <p className="font-medium text-gray-dark">
            {'@' + writer.firstName.toLowerCase()}
          </p>
        </div>
      </li>
    </Link>
  )
}

export default WriterItem
