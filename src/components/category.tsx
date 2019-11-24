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

type CategoryProps = {
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

const Category = ({ posts, pageContext }: CategoryProps) => {
  const { categoriesPath, basePath } = useSiteMetadata()

  return (
    <Layout>
      <SEO title={`Category: ${pageContext.name}`} />
      <Title text={`@${pageContext.name}`}>
        <Link to={replaceSlashes(`/${basePath}/${categoriesPath}`)} sx={{fontSize: [1, 1]}} >Read all category</Link>
      </Title>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Category
