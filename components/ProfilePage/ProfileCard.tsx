import Image from 'next/image'
import { toast } from 'react-toastify'

import Button from '@components/Button'

import { formatName, formatDate } from '@utils'

type ProfileCardProps = {
  writer: Writer
}

const ProfileCard: React.FC<ProfileCardProps> = ({ writer }) => {
  return (
    <section className="flex flex-col items-center rounded-lg border-gray-light bg-white pb-6 lg:mx-auto lg:mt-5 lg:w-4/5 lg:border-2 xl:w-3/4">
      <div className="relative mt-5 h-20 w-20 md:h-28 md:w-28 xl:h-36 xl:w-36">
        <Image src={writer.picture} layout="fill" className="rounded-full" />
      </div>
      <h2 className="text-2xl font-medium xl:text-3xl">
        {formatName(writer.title, writer.firstName, writer.lastName)}
      </h2>
      <ul className="mt-5 mb-6 flex flex-col justify-center md:flex-row md:gap-5">
        <li className="flex items-center">
          <div className="relative mr-2 h-4 w-4 xl:h-6 xl:w-6">
            <Image src="/icon/date.svg" layout="fill" />
          </div>
          <p className="text-sm text-gray-dark xl:text-base">
            Joined on {formatDate(writer.registerDate, 'profile')}
          </p>
        </li>
        <li className="my-2 flex items-center">
          <div className="relative mr-2 h-4 w-4 xl:h-6 xl:w-6">
            <Image src="/icon/email.svg" layout="fill" />
          </div>
          <p className="text-sm text-gray-dark xl:text-base">{writer.email}</p>
        </li>
        <li className="flex items-center">
          <div className="relative mr-2 h-4 w-4 xl:h-6 xl:w-6">
            <Image src="/icon/location.svg" layout="fill" />
          </div>
          <p className="text-sm text-gray-dark xl:text-base">
            {writer.location.country}
          </p>
        </li>
      </ul>
      <Button
        styles="flex items-center px-7 py-3 text-lg"
        onClick={() => toast('Comming Soon...Litle Rockstar 🦄')}
      >
        <div className="relative mr-2 h-5 w-5 xl:h-6 xl:w-6">
          <Image src="/icon/tip.svg" layout="fill" className="rounded-full" />
        </div>
        Send tip to creator
      </Button>
    </section>
  )
}

export default ProfileCard
