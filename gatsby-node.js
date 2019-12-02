const fs = require(`fs`)
const kebabCase = require(`lodash.kebabcase`)
const toUpper = require(`lodash/toUpper`)
const toLower = require(`lodash/toLower`)
const mkdirp = require(`mkdirp`)
const path = require(`path`)
const withDefaults = require(`./src/utils/default-options`)

// Ensure that content directories exist at site-level
// If non-existent they'll be created here (as empty folders)
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  const { postsFilePath, pagesFilePath } = withDefaults(themeOptions)

  const dirs = [path.join(program.directory, postsFilePath), path.join(program.directory, pagesFilePath)]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Initializing "${dir}" directory`)
      mkdirp.sync(dir)
    }
  })
}

const mdxResolverPassthrough = fieldName => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions

  const { basePath } = withDefaults(themeOptions)

  const slugify = source => {
    const slug = kebabCase(source.title)
    return slug;
  }

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      }
    },
  })

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      }
    },
  })

  createTypes(`
    interface Post @nodeInterface {
      id: ID!
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 160): String!
      body: String!
      html: String
      timeToRead: Int!
      tags: [PostTag]
      category: [PostCategory]
      banner: File @fileByRelativePath
      description: String
    }
    
    type PostTag {
      name: String
      slug: String
    }
        
    type PostCategory {
      name: String
      slug: String
    }

    interface Page @nodeInterface {
      id: ID!
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 160): String!
      body: String!
    }
    
    type MdxPost implements Node & Post {
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
      html: String! @mdxpassthrough(fieldName: "html")
      timeToRead: Int! @mdxpassthrough(fieldName: "timeToRead")
      tags: [PostTag]
      category: [PostCategory]
      banner: File @fileByRelativePath
      description: String
    }
    
    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { postsFilePath, pagesFilePath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsFilePath" and "pagesFilePath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  // Check for "projects" and create the "Project" type
  if (node.internal.type === `Mdx` && source === postsFilePath) {
    let modifiedTags = []
    let modifiedCategories = []

    if (!!node.frontmatter.tags) {
      if(Array.isArray(node.frontmatter.tags)){
        modifiedTags = modifiedCategories.concat(node.frontmatter.tags.map(tag => ({
          name: toLower(tag),
          slug: kebabCase(tag),
        })))
      } else {
        modifiedTags.push({
          name: toLower(node.frontmatter.tags),
          slug: kebabCase(node.frontmatter.tags),
        })
      }
    }

    if (!!node.frontmatter.category) {
      if(Array.isArray(node.frontmatter.category)){
        modifiedCategories = modifiedCategories.concat(node.frontmatter.category.map(category => ({
          name: toUpper(category),
          slug: kebabCase(category),
        })))
      } else {
        modifiedCategories.push({
          name: toUpper(node.frontmatter.category),
          slug: kebabCase(node.frontmatter.category),
        })
      }
    }

    const fieldData = {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: modifiedTags,
      category: modifiedCategories,
      banner: node.frontmatter.banner,
      description: node.frontmatter.description,
    }

    if(!fieldData.title || !fieldData.date){
      console.error(`${fieldData.slug} >>> fieldData.title or fieldData.date invalid.`);
      return
    }

    const mdxPostId = createNodeId(`${node.id} >>> MdxPost`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Post interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxPostId) })
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesFilePath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
    }

    const mdxPageId = createNodeId(`${node.id} >>> MdxPage`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Page interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxPageId) })
  }
}

// These template are only data-fetching wrappers that import components
const homepageTemplate = require.resolve(`./src/templates/homepage-query.tsx`)
const postsTemplate = require.resolve(`./src/templates/posts-query.tsx`)
const postTemplate = require.resolve(`./src/templates/post-query.tsx`)
const pageTemplate = require.resolve(`./src/templates/page-query.tsx`)
const tagTemplate = require.resolve(`./src/templates/tag-query.tsx`)
const tagsTemplate = require.resolve(`./src/templates/tags-query.tsx`)
const categoriesTemplate = require.resolve(`./src/templates/categories-query.tsx`)
const categoryTemplate = require.resolve(`./src/templates/category-query.tsx`)


exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions

  const { basePath, postPath, tagsPath, categoriesPath } = withDefaults(themeOptions)

  createPage({
    path: basePath,
    component: homepageTemplate,
  })

  createPage({
    path: `/${basePath}/${tagsPath}`.replace(/\/\/+/g, `/`),
    component: tagsTemplate,
  })

  createPage({
    path: `/${basePath}/${categoriesPath}`.replace(/\/\/+/g, `/`),
    component: categoriesTemplate,
  })

  const result = await graphql(`
    query {
      allPost(sort: { fields: date, order: DESC }) {
        nodes {
          title
          slug
        }
      }
      allPage {
        nodes {
          title
          slug
        }
      }
      tags: allPost(sort: { fields: tags___name, order: DESC }) {
        group(field: tags___name) {
          fieldValue
        }
      }
      category: allPost(sort: { fields: category___name, order: DESC }) {
        group(field: category___name) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error loading your posts or pages`, result.errors)
    return
  }

  const posts = result.data.allPost.nodes

  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {

    createPage({
      path: i === 0 ? `/${basePath}/${postPath}`.replace(/\/\/+/g, `/`) : `/${basePath}/${postPath}/${i + 1}`.replace(/\/\/+/g, `/`),
      component: postsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  });


  if(posts.length > 0){
      posts.forEach(post => {
        const slug = kebabCase(post.slug)
        createPage({
          path: `/${basePath}/${postPath}/${slug}`.replace(/\/\/+/g, `/`),
          component: postTemplate,
          context: {
            slug: slug,
          },
        })
    })
  }


  const pages = result.data.allPage.nodes

  if (pages.length > 0) {
    pages.forEach(page => {
        const slug = kebabCase(page.slug)
        createPage({
          path: `/${basePath}/${slug}`.replace(/\/\/+/g, `/`),
          component: pageTemplate,
          context: {
            slug: slug,
          },
        })
    })
  }

  const category = result.data.category.group

  if (category.length > 0) {
    category.forEach(category => {
        const slug = kebabCase(category.fieldValue)
        createPage({
          path: `/${basePath}/${categoriesPath}/${category.fieldValue}`.replace(/\/\/+/g, `/`),
          component: categoryTemplate,
          context: {
            slug: slug,
            name: category.fieldValue,
          },
        })
    })
  }

  const tags = result.data.tags.group

  if (tags.length > 0) {
    tags.forEach(tag => {
        const slug = kebabCase(tag.fieldValue)
        createPage({
          path: `/${basePath}/${tagsPath}/${tag.fieldValue}`.replace(/\/\/+/g, `/`),
          component: tagTemplate,
          context: {
            slug: slug,
            name: tag.fieldValue,
          },
        })
    })
  }
}
