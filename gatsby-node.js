const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const requiresTemplate = [`blog`, `projects`, `talks`]

const getContentType = node =>
  node.fileAbsolutePath.match(/content(.*)/)[0].split(`/`)[1]

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "Mdx") {
    const contentType = getContentType(node)
    const path = `content/${contentType}/`
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: path })
    createNodeField({ node, name: `slug`, value: `/${contentType}${slug}` })
    if (requiresTemplate.includes(contentType)) {
      createNodeField({
        node,
        name: `templatePath`,
        value: `./src/templates/${contentType}-post.js`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // graphql function call returns a promise
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
              templatePath
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    const contentType = node.fields.slug.split(`/`)[1]
    if (requiresTemplate.includes(contentType)) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(node.fields.templatePath),
        context: {
          //   Data passed to context is available in page queries as graphql variables
          slug: node.fields.slug,
          regex: `/${node.fields.slug}/`,
          templatePath: node.fields.templatePath,
        },
      })
    }
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}