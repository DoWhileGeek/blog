const slugify = require('slugify')
const moment = require('moment')
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { title, date } = node.frontmatter

      createPage({
        path: `${moment(date).format('YYYY/M/D')}/${slugify(title)}/`,
        component: blogPostTemplate,
        context: {title, date}, // additional data can be passed via context
      })
    })
  })
}
