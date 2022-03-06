import Image from 'next/image'
import Link from 'next/link'

import Button from '@components/Button'

import logo from '@images/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between border-b-2  border-gray-light px-3 py-4 md:px-8 xl:px-16">
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
      <Button styles="px-7 py-2">Connect Wallet</Button>
    </header>
  )
}

export default Header
