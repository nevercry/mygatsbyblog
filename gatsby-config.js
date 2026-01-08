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
    `gatsby-plugin-mdx`,  // MDX 配置
    `gatsby-source-filesystem`,  // 文件源数据
    {
      resolve: `gatsby-plugin-image`,  // 图片处理
      options: {
        // 相关配置
      },
    },
    `gatsby-plugin-sharp`,  // 图片优化
    `gatsby-transformer-sharp`,  // 图像转换
    `gatsby-plugin-netlify-cms`,  // CMS 集成
    `gatsby-plugin-netlify`,  // Netlify 部署优化
  ],
};
