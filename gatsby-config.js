module.exports = {
  siteMetadata: {
      siteTitle: `lhysin' blog`,
      siteTitleAlt: `lhysin's blog`,
      siteHeadline: `lhysin's blog`,
      siteUrl: `https://lhysin.netlify.com`,
      siteDescription: `lhysin's blog`,
      siteLanguage: `ko`,
      siteImage: `/banner.jpg`,
      author: `lhysin`,
      githubUrl: `https://github.com/lhysin`,
      navigation: [
/*        {
          title: `Home`,
          slug: `/`,
        },*/
        {
          title: `Posts`,
          slug: `/posts`,
        },
        {
          title: `Categories`,
          slug: `/categories`,
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
      categoriesPath: '/categories',
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
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: 'UA-153392433-1',
        },
      },
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `lhysin' blog`,
          short_name: `lhysin' blog`,
          description: `lhysin' blog`,
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#1a202c`,
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

      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  siteTitle
                  siteDescription
                  siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allPost } }) => {
                return allPost.nodes.map(node => {
                   return Object.assign({}, node, {
                     description: node.excerpt
                    ,date: node.date
                    ,url: site.siteMetadata.siteUrl + '/posts' + node.slug
                    ,guid: site.siteMetadata.siteUrl + '/posts' + node.slug
                    ,custom_elements : [{"content:encoded":node.title}]
                  })
                })
              },
              query: `
                {
                  allPost(sort: {fields: date, order: DESC}) {
                    nodes {
                      slug
                      title
                      date(formatString: "YYYY-MM-DD")
                      excerpt
                    }
                  }
                }
              `,
              output: "/rss.xml",
              title: "lhysin'blog RSS Feed",
            },
          ],
        },
      }
    ],
  }

