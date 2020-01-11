import { resolve } from `path`

export function createPages({ graphql, actions }) {
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
        component: resolve(`./src/templates/post.js`),
        context: { slug: node.frontmatter.slug },
      })
    })
  })
}
