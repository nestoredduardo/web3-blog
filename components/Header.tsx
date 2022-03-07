import Image from 'next/image'
import Link from 'next/link'

import Connect2Phantom from '@components/Connect2Phantom'

import logo from '@images/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="flex h-[74px] justify-between border-b-2 border-gray-light px-3 md:px-8 xl:px-40">
      <Link href="/">
        <section className="flex cursor-pointer items-center gap-2">
          <div className="h-10 w-10">
            <Image src={logo} layout="responsive" />
          </div>
          <h1 className="text-lg font-bold lg:text-xl xl:text-2xl">
            Web3Blocks
          </h1>
        </section>
      </Link>
      <Connect2Phantom />
    </header>
  )
}

export default Header
