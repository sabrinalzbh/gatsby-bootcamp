module.exports = {
  siteMetadata: {
    title: 'Portfolio!',
    author: 'Hope & Future',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/blog-post`
      }
    },
    'gatsby-transformer-remark',
    
  ],
}
