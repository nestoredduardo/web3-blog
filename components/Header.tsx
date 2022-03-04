import Image from 'next/image'

import logo from '@images/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between border-b-2  border-gray-light px-3 py-4">
      <section className="flex items-center gap-2">
        <div className="h-10 w-10">
          <Image src={logo} layout="responsive" />
        </div>
        <h1 className="text-lg font-bold">Web3Block</h1>
      </section>
      <button className="rounded-2xl  bg-gradient-to-r from-primary to-secondary px-7 py-2 font-semibold text-white">
        Connect Wallet
      </button>
    </header>
  )
}

export default Header