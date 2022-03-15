import Head from 'next/head'

import YourNFTs from '@components/YourNFTs'

const YourNFTsPage = () => {
  return (
    <>
      <Head>
        <title>Your NFTs</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <YourNFTs />
    </>
  )
}

export default YourNFTsPage
