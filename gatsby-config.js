/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    `gatsby-plugin-ipfs`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}
