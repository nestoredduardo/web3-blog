import BlogHeader from './BlogHeader'
import BlogLikes from './BlogLikes'

type BlogItemProps = {
  postPreview: PostPreview
}

const BlogItem: React.FC<BlogItemProps> = ({ postPreview }) => {
  return (
    <article className="w-80 rounded-xl border-2 border-gray-light bg-white p-5 md:w-full">
      <BlogHeader
        {...postPreview.owner}
        publishDate={postPreview.publishDate}
      />
      <h3 className="mt-3 text-lg font-medium">{postPreview.text}</h3>
      <div className="mt-3 flex items-center">
        <div className="flex w-3/5 flex-wrap gap-1">
          {postPreview.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="rounded-xl bg-secondary-200 py-1 px-2 text-xs text-secondary-500"
              >
                {tag}
              </span>
            )
          })}
        </div>
        <BlogLikes likes={postPreview.likes} />
      </div>
    </article>
  )
}

export default BlogItem
