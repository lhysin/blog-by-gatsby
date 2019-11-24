/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"
import ColorModeToggle from "./colormode-toggle"
import useNavigation from "../hooks/use-navigation"
import Navigation from "./navigation"
import replaceSlashes from "../utils/replaceSlashes"

const Header = () => {
  const { siteTitle, githubUrl, basePath } = useSiteMetadata()
  const nav = useNavigation()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={{ color: `heading`, textDecoration: `none` }}
        >
          <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [4, 5] }}>{siteTitle}</h1>
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <Flex
        sx={{
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          <Styled.a href={githubUrl}>
            Github
          </Styled.a>
        </div>
      </Flex>
    </header>
  )
}

export default Header
