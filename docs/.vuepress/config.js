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
        link: "https://github.com/lwj201606/computer-network-note",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: "目录", // 必要的
        path: "/01_contents/"
      },
      {
        title: "体系结构", // 必要的
        path: "/02_layered_structure/"
      },
      {
        title: "应用层", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          {
            title: "介绍",
            path: "/03_application_layer/",
          },
          {
            title: "DNS协议",
            path: "/03_application_layer/dns.md",
          },
          {
            title: "HTTP协议",
            children: [
              {
                title: "HTTP介绍",
                path: "/03_application_layer/http/http.md",
              }
            ],
          },
        ],
      },
      {
        title: "传输层", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          {
            title: "传输层介绍",
            path: "/04_transport_layer/",
          },
        ],
      },
    ],
  },
};
