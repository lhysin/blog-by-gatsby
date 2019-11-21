import React from "react"
import Blog from "../../gatsby-theme-minimal-blog/components/blog"

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
