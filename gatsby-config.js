module.exports = {
  siteMetadata: {
    title: 'Aaron Maynard\'s site',
    author: 'Aaron Maynard',
    description: 'A simple Gatsby site based on Dimension by HTML5 UP',
    url:'https://quasaray.github.io/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AM-portfolio',
        short_name: 'AM',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ]
}
