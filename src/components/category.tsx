/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex, Heading } from "@theme-ui/components"
import { Link } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import Listing from "./listing"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import Title from "./title"

type CategoryProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Category = ({ posts, pageContext }: CategoryProps) => {
  const { categoriesPath, basePath } = useSiteMetadata()

  let text = '';
  if (pageContext.name === 'DEVOPS'){
    text = '개발환경 및 서버 인프라';
  } else if (pageContext.name === 'FRONTEND') {
    text = 'Frontend Language와 Framework';
  } else if (pageContext.name === 'BACKEND') {
    text = 'Back-end Language와 Framework';
  } else if (pageContext.name === 'ISSUE') {
    text = '프로젝트 진행 중 발생한 이슈와 해결방안';
  } else if (pageContext.name === 'LEARNING') {
    text = '학습에 도움되는 것들';
  }

  return (
    <Layout>
      <SEO title={`Category: ${pageContext.name}`} />
      {!!text && (
        <Heading variant="h4" as="h4">
          {text}
        </Heading>
      )}
      <Title text={`Category: @${pageContext.name}`}>
      </Title>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Category
