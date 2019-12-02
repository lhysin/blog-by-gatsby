/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Heading } from "@theme-ui/components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "./layout"
import ItemTags from "./item-tags"
import SEO from "./seo"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      category?: {
        name: string
        slug: string
      }[]
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      body: string
      excerpt: string
      timeToRead: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => {

  const { categoriesPath, basePath } = useSiteMetadata()

  let category = '';
  if (!!post && !!post.category && post.category.length > 0){
    category = post.category[0].name;
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      />
      <Heading variant="h2" as="h2">
        {post.title}
      </Heading>

      <p sx={{ color: `secondary`, mt:0, mb:0, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
        <time>{`[`}{post.date}{`]`}</time>
        { !!category && (
             <Styled.a as={Link} to={replaceSlashes(`/${basePath}/${categoriesPath}/${category}`)} sx={{ml:1}}>
              {`@`}{category}
             </Styled.a>
        )}
      </p>
      {post.tags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      <section id="markdown-post" sx={{ my: 5, ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) } }}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export default Post
