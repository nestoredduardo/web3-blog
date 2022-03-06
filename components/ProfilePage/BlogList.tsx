import BlogItem from './BlogItem'

type BlogListProps = {
  postPreviewList: PostPreview[]
}

const BlogList: React.FC<BlogListProps> = ({ postPreviewList }) => {
  return (
    <section className="flex flex-col items-center gap-4 bg-background-light pt-6">
      {postPreviewList.map((postPreview) => {
        return <BlogItem key={postPreview.id} postPreview={postPreview} />
      })}
    </section>
  )
}

export default BlogList
