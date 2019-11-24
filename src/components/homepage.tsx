/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, postPath } = useSiteMetadata()

  return (
    <Layout>
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${postPath}`)} sx={{fontSize: [1, 1]}} >Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={true} sx={{ mt: [4, 5] }} />
      <List>
      </List>
    </Layout>
  )
}

export default Homepage
