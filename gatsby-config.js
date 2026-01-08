module.exports = {
  siteMetadata: {
    title: `nevercry's blog`,
    name: `nevercry`,
    siteUrl: `https://blog.nevercry.top`,
    description: `nevercry's blog`,
    hero: {
      heading: `My blog powered by Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/nevercry`,
      },
      {
        name: `github`,
        url: `https://github.com/nevercry`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        disableMdxRenderer: true,  // 禁用客户端渲染
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
      },
    },
  ],
};
