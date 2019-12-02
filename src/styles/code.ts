import { tint } from "@theme-ui/color"

export default {
  "[data-name='live-editor']": {
    padding: (t: any) => `${t.space[2]} !important`,
    fontSize: 1,
  },
  "[data-name='live-preview']": {
    padding: (t: any) => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: tint(`primary`, 0.7),
  },
  ".prism-code": {
    fontSize: 1,
    padding: 3,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    overflow: `initial`,
    float: `left`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3,
      },
    },
  },
  ".token": {
    display: `inline-block`,
  },

  /* markdown section only */
  'section[id="markdown-post"]' :{

    'a': {
      color: `mdAColor`,
    },

    'p code': {
      bg: `mdCodeBg`,
      color: `mdCodeText`,
      px: 2,
      py: 1,
      pl: `0.2rem`,
      pr: `0.2rem`,
      pt: `0.2rem`,
      pb: `0.2rem`,
    },

    'blockquote': {
      bg: `mdBQBgColor`,
    },

    'blockquote p': {
      mt: 1,
      mb: 1,
    },

    'svg': {
      fill: `mdSVGBgColor`
    },

    '.gatsby-resp-image-image ': {
      maxWidth: `100% !important`,
      width: `100 %`,
      height: `100 %`,
      margin: 0,
      verticalAlign: `middle`,
      position: `absolute`,
      top: 0,
      left: 0,
    },
  },

  ".vscode-highlight": {
    counterReset: `line`,
    mt: `0.5rem`,
    mb: `0.5rem`,
    fontSize: 1,
    position: `relative`,
    borderRadius: `7px`,
    webkitOverflowScrolling: `touch`,
    bg: `rgb(1, 22, 39)`,
    overflow: `auto`,
    ".token-line": {
      mx: -3,
    },
    "pre.language-": {
      mt: 0,
    },
    "pre.language-noLineNumbers": {
      mt: 0,
    },
    /* disable tile 
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      // position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0,
      float: `right`,
    },
    'pre[class~="language-javascript"]:before': {
      content: `"js"`,
      background: `#f7df1e`,
      color: `black`,
    },
    'pre[class~="language-jsx"]:before': {
      content: `"jsx"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-ts"]:before': {
      content: `"ts"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-tsx"]:before': {
      content: `"tsx"`,
      background: `#61dafb`,
      color: `black`,
    },
    'pre[class~="language-html"]:before': {
      content: `"html"`,
      background: `#005a9c`,
    },
    'pre[class~="language-xml"]:before': {
      content: `"xml"`,
      background: `#005a9c`,
    },
    'pre[class~="language-graphql"]:before': {
      content: `"GraphQL"`,
      background: `#E10098`,
    },
    'pre[class~="language-css"]:before': {
      content: `"css"`,
      background: `#ff9800`,
      color: `black`,
    },
    'pre[class~="language-mdx"]:before': {
      content: `"mdx"`,
      background: `#f9ac00`,
      color: `black`,
    },
    /*
    'pre[class~="language-text"]:before': {
      content: `"text"`,
    },*/
    "pre[class='language-shell']:before": {
      content: `'shell'`,
    },
    "pre[class='language-sh']:before": {
      content: `'sh'`,
    },
    "pre[class='language-bash']:before": {
      content: `'bash'`,
    },
    "pre[class='language-yaml']:before": {
      content: `'yaml'`,
      background: `#ffa8df`,
    },
    "pre[class='language-markdown']:before": {
      content: `'md'`,
    },
    "pre[class='language-json']:before, pre[class='language-json5']:before": {
      content: `'json'`,
      background: `linen`,
    },
    "pre[class='language-diff']:before": {
      content: `'diff'`,
      background: `#e6ffed`,
    },
    ".vscode-highlight-line::before": {
      counterIncrement: "line",
      content: "counter(line)",
      marginRight: "16px",
      marginLeft: "-8px",
      WebkitUserSelect: "none",
      userSelect: "none",
      textAlign: `center`,
      width: `20px`,
      display: `inline-block`,
      fontColor: `#405261`
    },
    ".no-line-nubmers.vscode-highlight-line::before": {
      display: `none`
    }
  },
  '.vscode-highlight > code[class*="language-"], .vscode-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`,
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`,
  },
  ".code-title": {
    backgroundColor: tint(`primary`, 0.7),
    color: `black`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `monospace`,
    mx: [0, 0, 0, -3],
  },
  "[data-name='live-preview'], [data-name='live-editor']": {
    mx: [0, 0, 0, -3],
  },
  ".token-line": {
    pr: 3,
  },
  ".vscode-highlight-line-highlighted": {
    backgroundColor: `rgb(2, 55, 81)`,
    /*borderLeft: `4px solid rgb(2, 155, 206)`,*/
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`,
    },
  },
}
