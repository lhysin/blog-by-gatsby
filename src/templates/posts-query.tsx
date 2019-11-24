import { graphql } from "gatsby"
import React from "react"
import Posts from "../components/posts"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
}

export default ({ data, pageContext }: Props) => {
  const { allPost } = data

  return <Posts posts={allPost.nodes} pageContext={pageContext} />
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allPost(
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        tags {
          name
          slug
        }
        category {
          name
          slug
        }
      }
    }
  }
`
