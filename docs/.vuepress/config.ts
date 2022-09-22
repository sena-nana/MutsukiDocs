import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
    lang: "zh-CN",
    title: "MutsukiBot",
    description: "梦月Bot的使用说明书",
    base:"/MutsukiDocs/",
  theme,
  shouldPrefetch: false,
  plugins:[
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },},
      isSearchable: (page) => page.path !== '/',   
    }),
  ],
});
