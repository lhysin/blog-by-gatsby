import { tailwind } from "@theme-ui/presets"

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [4, 5],
    mt: [60, 100],
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [4, 5],
    mt: [60, 100],
    borderBottom: `1px solid`,
    borderBottomColor: `mdHBDBottomColor`,
    paddingBottom: [1, 2]
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [3, 4],
    mt: [60, 100],
    borderBottom: `1px solid`,
    borderBottomColor: `mdHBDBottomColor`,
    paddingBottom: [1, 2]
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [2, 3],
    mt: [50, 80],
    borderBottom: `1px solid`,
    borderBottomColor: `mdHBDBottomColor`,
    paddingBottom: [1, 2]
  },
  h5: {
    ...tailwind.styles.h5,
    color: `heading`,
    fontSize: [1, 2],
    mb: 2,
    mt: [30, 50],
    borderBottom: `1px solid`,
    borderBottomColor: `mdHBDBottomColor`,
    paddingBottom: [1, 2]
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 1,
    mb: 2,
    mt: [30, 50]
  },
}

export default {
  ...tailwind,
  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.gray[6],
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    listText: tailwind.colors.black[2],
    mdCodeBg: tailwind.colors.gray[2],
    mdCodeText: tailwind.colors.gray[9],
    mdAColor: tailwind.colors.blue[7],
    mdHBDBottomColor: tailwind.colors.black,
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        listText: tailwind.colors.gray[2],
        primary: tailwind.colors.gray[6],
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        mdCodeBg: tailwind.colors.gray[8],
        mdCodeText: tailwind.colors.gray[2],
        mdAColor: tailwind.colors.indigo[2],
        mdHBDBottomColor: tailwind.colors.gray[4],
      },
    },
  },
  fonts: {
    ...tailwind.fonts,
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
    },
    p: {
      fontSize: [14.5, 16.5],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    ...headingStyles,
    hr: {
      mt: 2,
      mb: 2
    },
    Container: {
      padding: [3, 4],
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
    },
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
}
