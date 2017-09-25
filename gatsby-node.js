const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
// exports.onCreateNode = ({ node, getNode }) => {
// 	if (node.internal.type === `ContentfulPractices`) {
// 		const slug = `pages/${node.slug}`
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
// 	}
// }

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators
	return new Promise((resolve, reject) => {
		graphql(`
      {
        allContentfulPractices {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
			result.data.allContentfulPractices.edges.map(({ node }) => {
				createPage({
					path: `listing/${node.slug}`,
					component: path.resolve(`./src/templates/listing.js`),
					context: {
						// Data passed to context is available in page queries as GraphQL variables.
						test: 'this is my test variable',
						slug: node.slug
					}
				})
			})
			resolve()
		})
	})
}
