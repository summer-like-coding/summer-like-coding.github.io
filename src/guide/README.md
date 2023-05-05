---
title: 博客构建引导
date: 2023-05-05
icon: guide
category:
  - 博客配置
tag:
  - 博客配置
---

从零构建博客的操作指南。

<!-- more -->

# 博客构建引导

## 创建项目

该博客使用 [`vuepress-theme-hope`](https://vuepress-theme-hope.github.io/v2/zh/) 主题，使用 `VuePress 2`（beta 版本）＋ `pnpm8`。

在当前文件夹创建项目：

```bash
pnpm create vuepress-theme-hope my-docs
```

::: tip
这里的my-docs是你想要设置的文档名称
:::

这里会有一些构建引导，按照自己需求选择即可，建议加入 GitHub 工作流使得 GitHub 能够自动部署博客内容。

## 示例和配置

[博客编写示例](./markdown.md)

此处的配置全部使用 TypeScript，并放在 `.vuepress/config.ts` 下面，配置可以参考下面的官方文档或下面的配置指南。

[博客配置指南](./page.md)
