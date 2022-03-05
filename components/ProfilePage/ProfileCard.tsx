import Image from 'next/image'

import { formatName } from '@utils'

import dateIcon from '@icon/date.svg'
import emailIcon from '@icon/email.svg'
import locationIcon from '@icon/location.svg'
import moneyIcon from '@icon/money.svg'

type ProfileCardProps = {
  writer: Writer
}

const ProfileCard: React.FC<ProfileCardProps> = ({ writer }) => {
  return (
    <section className="flex flex-col justify-center">
      <div className="h-20 w-20">
        <Image src={writer.picture} layout="fill" className="rounded-full" />
      </div>
      <h2 className="text-2xl font-medium">
        {formatName(writer.title, writer.firstName, writer.lastName)}
      </h2>
      <ul className="mt-5 mb-6 flex flex-col justify-center">
        <li className="flex items-center">
          <div className="mr-2 h-4 w-4">
            <Image src={dateIcon} layout="fill" className="rounded-full" />
          </div>
          <p className="text-sm text-gray-dark">
            Joined on {writer.registerDate}
          </p>
        </li>
        <li className="flex items-center">
          <div className="mr-2 h-4 w-4">
            <Image src={emailIcon} layout="fill" className="rounded-full" />
          </div>
          <p className="text-sm text-gray-dark">{writer.email}</p>
        </li>
        <li className="flex items-center">
          <div className="mr-2 h-4 w-4">
            <Image src={locationIcon} layout="fill" className="rounded-full" />
          </div>
          <p className="text-sm text-gray-dark">{writer.location.country}</p>
        </li>
      </ul>
      <button className="rounded-2xl  bg-gradient-to-r from-primary to-secondary px-7 py-2 font-semibold text-white">
        <div className="mr-2 h-5 w-5">
          <Image src={moneyIcon} layout="fill" className="rounded-full" />
        </div>
        Send tip to creator
      </button>
    </section>
  )
}

export default ProfileCard