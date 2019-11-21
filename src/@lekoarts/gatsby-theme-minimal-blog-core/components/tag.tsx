import React from "react"
import Tag from "../../gatsby-theme-minimal-blog/components/tag"

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
