import { graphql } from "gatsby"
import React from "react"
import Post from "../components/post"

type Props = {
  data: {
    post: any
    [key: string]: any
  }
}

export default ({ data }: Props) => {
  const { post } = data

  return <Post data={{ ...data, post }} />
}

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "YYYY-MM-DD")
      modifiedDate(formatString: "YYYY-MM-DD")
      tags {
        name
        slug
      }
      category {
        name
        slug
      }
      description
      body
      excerpt
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
