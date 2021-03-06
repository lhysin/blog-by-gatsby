import { graphql } from "gatsby"
import React from "react"
import Category from "../components/category"

type Props = {
  data: {
    allPost: any
    [key: string]: any
  }
  pageContext: any
}

export default ({ data, pageContext }: Props) => {
  const { allPost } = data

  return <Category posts={allPost.nodes} pageContext={pageContext} />
}


export const query = graphql`
  query($slug: String!) {
    allPost(sort: { fields: date, order: DESC }, filter: { category: { elemMatch: { slug: { eq: $slug } } } }) {
      nodes {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        category {
          name
          slug
        }
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
