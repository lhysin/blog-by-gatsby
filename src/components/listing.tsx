/** @jsx jsx */
import { jsx } from "theme-ui"
import PostListItem from "./post-list-item"

type ListingProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  className?: string
  showTags?: boolean
}

const Listing = ({ posts, className, showTags = true, showCategories = true }: ListingProps) => (
  <section sx={{ mb: [5, 6, 7] }} className={className}>
    {posts.map(post => (
      <PostListItem key={post.slug} post={post} showTags={showTags} showCategories={showCategories}/>
    ))}
  </section>
)

export default Listing
