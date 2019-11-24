import { graphql } from "gatsby"
import React from "react"
import Categories from "../components/categories"

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

  return <Categories list={allPost.group} />
}


export const query = graphql`
  query {
    allPost(sort: { fields: category___name, order: DESC }) {
      group(field: category___name) {
        fieldValue
        totalCount
      }
    }
  }
`
