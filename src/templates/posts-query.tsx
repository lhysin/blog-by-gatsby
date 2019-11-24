import { graphql } from "gatsby"
import React from "react"
import Blog from "../components/posts"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
}

export default ({ data }: Props) => {
  const { allPost } = data

  return <Blog posts={allPost.nodes} />
}

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        tags {
          name
          slug
        }
        categories {
          name
          slug
        }
      }
    }
  }
`
