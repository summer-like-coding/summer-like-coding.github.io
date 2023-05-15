import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  theme,

  locales: {
    "/": {
      lang: "zh-CN",
      title: "summer",
      description: "summer 的笔记合集",
    },
  },
});
