import { graphql } from "gatsby"
import React from "react"
import Tag from "../components/tag"

type Props = {
  data: {
    allPost: any
    [key: string]: any
  }
  pageContext: any
}

export default ({ data, pageContext }: Props) => {
  const { allPost } = data

  return <Tag posts={allPost.nodes} pageContext={pageContext} />
}


export const query = graphql`
  query($slug: String!) {
    allPost(sort: { fields: date, order: DESC }, filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        tags {
          name
          slug
        }
      }
    }
  }
`
