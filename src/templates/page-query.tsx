import { graphql } from "gatsby"
import React from "react"
import Page from "../components/page"

type Props = {
  data: {
    page: any
    [key: string]: any
  }
}

export default ({ data }: Props) => {
  const { page } = data

  return <Page data={{ ...data, page }} />
}

export const query = graphql`
  query($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      slug
      excerpt
      body
    }
  }
`
