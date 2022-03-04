import { formatName } from '@utils'

type WriterItemProps = {
  writer: WriterPreview
}

const WriterItem: React.FC<WriterItemProps> = ({ writer }) => {
  return (
    <li className="my-2 flex w-80 items-center rounded-xl border-2 border-gray-light py-4 px-6">
      <div className="mr-4 h-11 w-11">
        <img src={writer.picture} className="rounded-full" />
      </div>
      <div>
        <h3 className="text-lg font-medium">
          {formatName(writer.title, writer.firstName, writer.lastName)}
        </h3>
        <p className="font-medium text-gray-dark">
          {'@' + writer.firstName.toLowerCase()}
        </p>
      </div>
    </li>
  )
}

export default WriterItem
