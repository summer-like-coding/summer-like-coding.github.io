import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://summer.alexsun.top/",

  author: {
    name: "summer",
  },
  // 图标库
  iconAssets: "iconfont",
  // 全屏
  // fullscreen:true,

  logo: "/logo.svg",
  // GitHub链接
  repo: "summer-like-coding/summer-like-coding.github.io.git",

  docsDir: "demo/theme-docs/src",
  // navbar
  navbar: Navbar,

  // sidebar
  sidebar: Sidebar,

  // meta配置
  metaLocales: {
    editLink: "Edit this page on GitHub",
  },
  // footer配置
  // footer: "Default footer",

  displayFooter: true,
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },
  // 幻灯片
  blogLocales: {
    slide: "幻灯片",
    original: "原创",
  },
  plugins: {
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    // blog: true,
    blog: {
      type: [
        {
          key: "slide",
          filter: (page) => page.frontmatter.layout === "Slide",
        },
      ],
    },
    autoCatalog: {
      shouldIndex: ({ path }) => path.startsWith('/posts/'),
    },
  },
  // 博客配置
  blog: {
    name: "summer",
    description: "summer的笔记合集",
    medias: {
      Email: "mailto:3244742300@qq.com",
      Github:'https://github.com/summer-like-coding',
    },
    intro: 'slides',
    
  },
});
