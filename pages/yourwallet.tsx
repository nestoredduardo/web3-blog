import type { NextPage } from 'next'
import Head from 'next/head'

import YourWallet from '@components/YourWallet'

const YourNFTs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your NFTs</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <YourWallet />
    </>
  )
}

export default YourNFTs
