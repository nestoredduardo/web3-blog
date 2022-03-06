import type { NextPage } from 'next'
import Head from 'next/head'

import Main from '@components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Web3Blocks</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Main />
    </>
  )
}

export default Home
