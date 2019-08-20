const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      careers: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/careers/" } }
      ) {
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
      work: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/work/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              thumbnail
              client
              description
              location
              work
              team
              link
              challenge
              solution
              video
              mainImages
              galleryImages
              galleryVideos
            }
          }
        }
      }
    }
  `).then(result => {
    // JOBS
    createPage({
      path: `/careers/`,
      component: require.resolve("./src/templates/careers.js"),
      context: {
        allJobs: result.data.careers.edges,
      },
    })
    result.data.careers.edges.forEach(({ node }) => {
      createPage({
        path: `/job${node.fields.slug}`,
        component: path.resolve(`./src/templates/job.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
    // PORTFOLIOS
    createPage({
      path: `/work/`,
      component: require.resolve("./src/templates/work.js"),
      context: {
        allPortfolios: result.data.work.edges,
      },
    })
    result.data.work.edges.forEach(({ node }) => {
      createPage({
        path: `/portfolio${node.fields.slug}`,
        component: path.resolve(`./src/templates/portfolio.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
