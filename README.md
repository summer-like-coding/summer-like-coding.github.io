# 基于 VuePress 的个人博客平台

🚀 [立刻查看 Demo 页面](https://summer.alexsun.top/).  
  
❤️特征：
- 🎉 VuePress2 (Vue3 + Vite4 + TS)
- ✨ [VuePress MarkDown Enhance](https://vuepress-theme-hope.github.io/v2/md-enhance/)
    - 📖 支持 LaTeX 数学公式，使用 [KaTeX](https://katex.org/)
    - 📈 [Mermaid](https://mermaid-js.github.io/mermaid/#/) 支持
    - 📊 [Echarts](https://echarts.apache.org/) 支持
- 📋 支持复制代码
- 📜 自动生成目录
- 🔍 静态搜索

## 如何设置 GitHub Pages？

`vuepress-theme-hope` 在安装时会询问你是否需要 `github action`。

+ 需要: 选择 `yes`，那么项目里就会出现 `.github/workflows/` 文件。
+ 不需要: 选择 `no`，或者可以删除 `.github/workflows/` 下的文件。

如果你现在提交，`github actions` 其实并不会生效，需要按照这些步骤：

1. GitHub 打开你的项目主页页面
2. 点击 `Settings`
3. 点击 `Actions`，然后点击 `General`
4. 找到 `Workflow permissions`，然后选中 `Read and write permissions`，保存
5. 如果此时你还没有成功执行过 GitHub Actions，那么你需要手动执行一次，打开刚刚的 Actions，点击 `re-run all jobs`(😊这时候依然是有些问题的，莫慌，go on！)
6. 然后点击侧边栏的 `Pages`，然后到 `Build and deployment` 下面
7. 设置 `Branch: gh-pages /(root)`，可选的 HTTPS `Enforce HTTPS`，保存
8. 这将自动创建 **GitHub Pages**。  
   
体验地址:
总之，基于 VuePress 的个人博客平台具有易用、高度可定制、SEO 友好、高效静态生成等特点，非常适合用来创建个人博客网站。
