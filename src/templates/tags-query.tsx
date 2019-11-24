import { graphql } from "gatsby"
import React from "react"
import Tags from "../components/tags"

type Props = {
  data: {
    allPost: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
}

export default ({ data }: Props) => {
  const { allPost } = data

  return <Tags list={allPost.group} />
}


export const query = graphql`
  query {
    allPost(sort: { fields: tags___name, order: DESC }) {
      group(field: tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`
