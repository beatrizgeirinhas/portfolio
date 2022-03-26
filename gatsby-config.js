module.exports = {
  siteMetadata: {
    title: `Beatriz Geirinhas`,
    siteUrl: `https://www.yourdomain.tld`,
    name: `theme-color`,
    content: `hsl(0 0% 93.7%)`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
