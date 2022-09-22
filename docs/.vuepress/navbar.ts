import { navbar } from "vuepress-theme-hope";

export default navbar([
  { 
    text: "插件说明", 
    icon: "creative", 
    link: "/main/", 
  },
  { 
    text: "项目信息", 
    icon: "creative", 
    children: [
      {
        text: "骰娘仓库", 
        icon: "creative", 
        link: "https://github.com/sena-nana/MutsukiBot", 
      },
      {
        text: "魔法崩坏跑团规则", 
        icon: "markdown", 
        link: "https://sena-nana.github.io/", 
      },
      {
        text: "测试用群聊", 
        icon: "creative", 
        link: "https://jq.qq.com/?_wv=1027&k=FvJhIk7h", 
      },
      {
        text: "关于星奈", 
        icon: "creative", 
        link: "https://github.com/sena-nana", 
      },
    ],
  },
]);
