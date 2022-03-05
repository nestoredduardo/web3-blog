import Image from 'next/image'

import { formatName, formatDate } from '@utils'

type ProfileCardProps = {
  writer: Writer
}

const ProfileCard: React.FC<ProfileCardProps> = ({ writer }) => {
  return (
    <section className="flex flex-col items-center pb-6">
      <div className="relative mt-5 h-20 w-20">
        <Image src={writer.picture} layout="fill" className="rounded-full" />
      </div>
      <h2 className="text-2xl font-medium">
        {formatName(writer.title, writer.firstName, writer.lastName)}
      </h2>
      <ul className="mt-5 mb-6 flex flex-col justify-center">
        <li className="flex items-center">
          <div className="relative mr-2 h-4 w-4">
            <Image src="/icon/date.svg" layout="fill" />
          </div>
          <p className="text-sm text-gray-dark">
            Joined on {formatDate(writer.registerDate, 'profile')}
          </p>
        </li>
        <li className="my-2 flex items-center">
          <div className="relative mr-2 h-4 w-4">
            <Image src="/icon/email.svg" layout="fill" />
          </div>
          <p className="text-sm text-gray-dark">{writer.email}</p>
        </li>
        <li className="flex items-center">
          <div className="relative mr-2 h-4 w-4">
            <Image src="/icon/location.svg" layout="fill" />
          </div>
          <p className="text-sm text-gray-dark">{writer.location.country}</p>
        </li>
      </ul>
      <button className="flex items-center rounded-2xl  bg-gradient-to-r from-primary to-secondary px-7 py-3 font-semibold text-white">
        <div className="relative mr-2 h-5 w-5">
          <Image src="/icon/tip.svg" layout="fill" className="rounded-full" />
        </div>
        Send tip to creator
      </button>
    </section>
  )
}

export default ProfileCard
