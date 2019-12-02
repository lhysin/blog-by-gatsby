/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Heading, Box, Flex } from "@theme-ui/components"
import Title from "./title"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "./layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import SEO from "./seo"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Categories = ({ list }: PostsProps) => {
  const { categoriesPath } = useSiteMetadata()

  list.sort(function (a, b) {
    return a.totalCount > b.totalCount ? -1 : a.totalCount < b.totalCount ? 1 : 0;
  });

  return (
    <Layout>
      <SEO title="Categories" />
      <Title text="Categories">
      </Title>
      <Box mt={[4, 5]}>
        {list.map(listItem => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <Styled.a
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={`/${categoriesPath}/${listItem.fieldValue}`.replace(/\/\/+/g, `/`)}
            >
              {`@`}{listItem.fieldValue} <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </Styled.a>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Categories
