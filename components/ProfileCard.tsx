import Image from 'next/image';

import { formatName } from '@utils';

import dateIcon from '@icon/date.svg';
import emailIcon from '@icon/email.svg';
import locationIcon from '@icon/location.svg';
import moneyIcon from '@icon/money.svg';

type ProfileCardProps = {
  writer: Writer;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ writer }) => {
  return (
    <section className="flex flex-col justify-center">
      <div className="w-20 h-20">
        <Image src={writer.picture} layout="fill" className="rounded-full" />
      </div>
      <h2 className="font-medium text-2xl">
        {formatName(writer.title, writer.firstName, writer.lastName)}
      </h2>
      <ul className="flex flex-col justify-center mt-5 mb-6">
        <li className="flex items-center">
          <div className="w-4 h-4 mr-2">
            <Image src={dateIcon} layout="fill" className="rounded-full" />
          </div>
          <p className="text-gray-dark text-sm">
            Joined on {writer.registerDate}
          </p>
        </li>
        <li className="flex items-center">
          <div className="w-4 h-4 mr-2">
            <Image src={emailIcon} layout="fill" className="rounded-full" />
          </div>
          <p className="text-gray-dark text-sm">{writer.email}</p>
        </li>
        <li className="flex items-center">
          <div className="w-4 h-4 mr-2">
            <Image src={locationIcon} layout="fill" className="rounded-full" />
          </div>
          <p className="text-gray-dark text-sm">{writer.location.country}</p>
        </li>
      </ul>
      <button className="rounded-2xl  bg-gradient-to-r from-primary to-secondary px-7 py-2 font-semibold text-white">
        <div className="w-5 h-5 mr-2">
          <Image src={moneyIcon} layout="fill" className="rounded-full" />
        </div>
        Send tip to creator
      </button>
    </section>
  );
};

export default ProfileCard;
