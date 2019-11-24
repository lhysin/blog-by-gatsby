/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle, author, githubUrl } = useSiteMetadata()

  let copyRight = ` ${author}.`;

  if(!!githubUrl){
    copyRight =
                <Styled.a
                  aria-label="Link to the copywriter's external site"
                  href={githubUrl}
                  target="_blank"
                >
                  {author}.
                </Styled.a>
  }


  return (
    <Flex
      as="footer"
      sx={{
        variant: `dividers.top`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
      }}
    >
      <div>
        &copy; { new Date().getFullYear() } by 
        {` `}{ copyRight }
        {` All rights reserved.`}
      </div>
      <div>
        {`Powered By `}
        <Styled.a
          aria-label="Link to the Gatsby"
          href="https://www.gatsbyjs.org/"
          target="_blank"
        >
          Gatsby
        </Styled.a>
        {` And `}
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
          target="_blank"
        >
          Theme
        </Styled.a>
      </div>
    </Flex>
  )
}

export default Footer
