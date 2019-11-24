/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex, Heading } from "@theme-ui/components"
import { Link } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import Title from "./title"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useSiteMetadata()

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Title text={`@${pageContext.name}`}>
        <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)} sx={{fontSize: [1, 1]}} >Read all tags</Link>
      </Title>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Tag
