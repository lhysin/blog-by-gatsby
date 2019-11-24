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

const Posts = ({ posts, pageContext }: PostsProps) => {

  const { tagsPath, basePath, postPath } = useSiteMetadata()
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/${basePath}/${postPath}` : `/${basePath}/${postPath}/${(currentPage - 1).toString()}`
  const nextPage = `/${basePath}/${postPath}/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <SEO title="Posts" />
      <Title text="Posts">
      </Title>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, mt: 5 }}>
        { !isFirst && (
          <Styled.a as={Link} to={replaceSlashes(prevPage)}
            sx={{ float: 'left', alignSelf: 'flex-end', fontSize: [1, 2] }}>
            ← Previous Page
          </Styled.a>
        )}
        { !!isFirst && (
          <div sx={{float : 'left'}}></div>
        )}
        { !isLast && (
          <Styled.a as={Link} to={replaceSlashes(nextPage)}
            sx={{ float: 'right', alignSelf: 'flex-end', fontSize: [1, 2]  }}>
            Next Page →
          </Styled.a>
        )}
      </Flex>
    </Layout>
  )
}

export default Posts
