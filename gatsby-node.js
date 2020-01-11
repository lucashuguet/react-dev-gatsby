const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(JSON.stringify(result, null, 2))

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: { slug: node.frontmatter.slug },
      })
    })
  })
}
