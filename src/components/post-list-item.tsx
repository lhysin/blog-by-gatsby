/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "./item-tags"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"

type PostListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const PostListItem = ({ post, showTags = true, showCategories = true }: PostListItemProps) => {

  const { categoriesPath, basePath } = useSiteMetadata()

  let category = '';
  if(!!post.categories && post.categories.length > 0){
    category = post.categories[0];
  }

  return (
    <Box mb={4}>
      <Styled.a as={Link} to={post.slug} sx={{ fontSize: [2, 3, 4], color: `listText` }}>
        {post.title}
      </Styled.a>
      <p sx={{ color: `secondary`, mt:0, mb:0, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
        <time>{`[`}{post.date}{`]`}</time>
        { !!category && (
              <Styled.a as={Link} to={replaceSlashes(`/${basePath}/${categoriesPath}/${category.slug}`)} sx={{ml:1}}>
                {`@`}{category.name}
               </Styled.a>
        )}
      </p>
      {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </Box>
  )
}

export default PostListItem
