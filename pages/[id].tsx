import type { GetServerSideProps } from 'next'
import Head from 'next/head'

import Header from '@components/Header'

type WritersResponse = {
  writer: Writer
  postPreviewList: PostPreview[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!
  const response = await fetch(`/api/writers/${id}`)
  const data: WritersResponse = await response.json()

  const { writer, postPreviewList } = data

  return {
    props: {
      writer: writer || null,
      postPreviewList,
    },
  }
}

const ProfilePage = ({ writer, postPreviewList }: WritersResponse) => {
  console.log(writer, postPreviewList)
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Web3Blogs</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Header />
    </div>
  )
}

export default ProfilePage
