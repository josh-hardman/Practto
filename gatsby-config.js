module.exports = {
	siteMetadata: {
		title: `Practto is awesome`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
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
