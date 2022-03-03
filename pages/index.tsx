import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '@components/Header'
import Main from '@components/Main'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Web3Blogs</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Header />
      <Main />
    </div>
  )
}

export default Home
