module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `yeaxhwbcwkaf`,
				accessToken: `58ee4fdeb04f09ac7934be025c182b950362ea2d002e066352fcb6905578f052`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`
	]
}
