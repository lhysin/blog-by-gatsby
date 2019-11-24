/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Heading, Flex } from "@theme-ui/components"
import Title from "./title"
import Layout from "./layout"
import Listing from "./listing"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"

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

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Posts" />
      <Title text="Posts">
        <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)} sx={{fontSize: [1, 1]}}>View all tags</Link>
      </Title>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Blog
