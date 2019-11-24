import { graphql } from "gatsby"
import React from "react"
import Homepage from "../components/homepage"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
}

export default ({ data }: Props) => {
  const { allPost } = data

  return <Homepage posts={allPost.nodes} />
}

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 5) {
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
