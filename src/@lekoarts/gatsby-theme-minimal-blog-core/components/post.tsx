import React from "react"
import Post from "../../gatsby-theme-minimal-blog/components/post"

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
