module.exports = {
  siteMetadata: {
      siteTitle: `lhysin' blog`,
      siteTitleAlt: `lhysin's blog - TitleAlt Software Developer Information Blog`,
      siteHeadline: `Minimal Blog - Headline Software Developer Information Blog`,
      siteUrl: `https://lhysin.netlyfy.com`,
      siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
      siteLanguage: `ko`,
      siteImage: `/banner.jpg`,
      author: `lhysin`,
      githubUrl: `https://github.com/lhysin`,
      navigation: [
        {
          title: `Home`,
          slug: `/`,
        },
        {
          title: `Posts`,
          slug: `/posts`,
        },
        {
          title: `Tags`,
          slug: `/tags`,
        },
      ],
      basePath: '/',
      postPath: '/posts',
      postsFilePath: 'content/posts',
      pagesFilePath: 'content/pages',
      tagsPath: '/tags',
      showLineNumbers: true
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/posts`,
          name: `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/pages`,
          name: `content/pages`,
        },
      },
/*      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID,
        },
      },*/
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
          short_name: `minimal-blog`,
          description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#6B46C1`,
          display: `standalone`,
          icons: [
            {
              src: `/android-chrome-192x192.png`,
              sizes: `192x192`,
              type: `image/png`,
            },
            {
              src: `/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`,
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 960,
                quality: 90,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-offline`,
      `gatsby-plugin-netlify`,
    ],
  }

