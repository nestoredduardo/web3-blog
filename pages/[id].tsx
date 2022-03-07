import Profile from '@components/ProfilePage'
import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { getAllWriters, getWriter, getPost } from './api/utils'

type WritersResponse = {
  writer: Writer
  postPreviewResponse: ListResponse
}

export const getStaticPaths: GetStaticPaths = async () => {
  const writersList: WriterPreview[] = await getAllWriters()

  const paths = writersList.map((writer) => ({ params: { id: writer.id } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!

  const writer = await getWriter(id as string)
  const postPreviewResponse = await getPost(id as string)

  return {
    props: {
      writer: writer || null,
      postPreviewResponse,
    },
  }
}

const ProfilePage = ({ writer, postPreviewResponse }: WritersResponse) => {
  return (
    <>
      <Head>
        <title>@{writer.firstName.toLowerCase()} | Web3Blocks </title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Profile writer={writer} postPreviewResponse={postPreviewResponse} />
    </>
  )
}

export default ProfilePage
