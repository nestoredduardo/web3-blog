import BlogItem from './BlogItem'

type BlogListProps = {
  postPreviewList: PostPreview[]
}

const BlogList: React.FC<BlogListProps> = ({ postPreviewList }) => {
  return (
    <section>
      {postPreviewList.map((postPreview) => {
        return <BlogItem key={postPreview.id} postPreview={postPreview} />
      })}
    </section>
  )
}

export default BlogList
