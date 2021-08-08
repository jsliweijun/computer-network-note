module.exports = {
  title: "计算机网络",
  description: "计算机网络",
  base: "/computer-network-note/",
  themeConfig: {
    logo: "/logo.jpeg",
    // 主页的顶部导航栏
    nav: [
      { text: "首页", link: "/" },
      {
        text: "github",
        link: "/",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: "前言", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          {
            title: "介绍",
            path: "/01_preface/",
          },
        ],
      },
    ],
  },
};
