const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `/job${slug}`,
    })
  }
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              responsibilities
              requirements
              positions
              note
            }
          }
        }
      }
    }
  `).then(result => {
    createPage({
      path: `/careers/`,
      component: require.resolve("./src/templates/careers.js"),
      context: {
        allJobs: result.data.allMarkdownRemark.edges,
      },
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/templates/job.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}

// exports.createPages = async ({ actions: { createPage } }) => {
//   const allJobs = all_jobs
//   createPage({
//     path: `/careers`,
//     component: require.resolve("./src/templates/careers.js"),
//     context: { allJobs },
//   })
//   allJobs.forEach(job_object => {
//     if (job_object.id < 100) {
//       createPage({
//         path: `/job/${job_object.id}/`,
//         component: require.resolve("./src/templates/job.js"),
//         context: { job_object },
//       })
//     }
//   })
// }
// `getPokemonData` is a function that fetches our data
// const allPortfolios = all_portfolios
// // Create a page that lists all Pokemon.
// createPage({
//   path: `/work`,
//   component: require.resolve("./src/templates/work.js"),
//   context: { allPortfolios },
// })
// // Create a page for each Pokemon.
// allPortfolios.forEach(portfolio_object => {
//   createPage({
//     path: `/portfolio/${portfolio_object.id}/`,
//     component: require.resolve("./src/templates/portfolio.js"),
//     context: { portfolio_object },
//   })
// })
// }
