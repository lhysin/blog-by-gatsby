module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const postPath = themeOptions.postPath || `/posts`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const categoriesPath = themeOptions.categoriesPath || `/categories`
  const postsFilePath = themeOptions.postsFilePath || `content/posts`
  const pagesFilePath = themeOptions.pagesFilePath || `content/pages`

  return {
    basePath,
    postPath,
    tagsPath,
    categoriesPath,
    postsFilePath,
    pagesFilePath,
  }
}
