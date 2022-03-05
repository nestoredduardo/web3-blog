import Profile from '@components/ProfilePage'
import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

type WritersResponse = {
  writer: Writer
  postPreviewResponse: ListResponse
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.SERVER_URL}api/writers`)
  const writersList: WriterPreview[] = await response.json()

  const paths = writersList.map((writer) => ({ params: { id: writer.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!
  const response = await fetch(`${process.env.SERVER_URL}api/writers/${id}`)
  const data: WritersResponse = await response.json()

  const { writer, postPreviewResponse } = data

  return {
    props: {
      writer: writer || null,
      postPreviewResponse,
    },
  }
}

const ProfilePage = ({ writer, postPreviewResponse }: WritersResponse) => {
  console.log(writer, postPreviewResponse)
  return (
    <>
      <Head>
        <title>Web3Blogs</title>
        <link rel="icon" href="/img/logo.svg" />
      </Head>

      <Profile writer={writer} postPreviewResponse={postPreviewResponse} />
    </>
  )
}

export default ProfilePage
