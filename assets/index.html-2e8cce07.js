import{_ as r,X as c,Y as d,Z as l,a0 as e,a1 as t,$ as n,a2 as s,a3 as h,E as o}from"./framework-bbb7e813.js";const p={},u=e("p",null,"从零构建博客的操作指南。",-1),_=e("h1",{id:"博客构建引导",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#博客构建引导","aria-hidden":"true"},"#"),t(" 博客构建引导")],-1),m=e("h2",{id:"创建项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建项目","aria-hidden":"true"},"#"),t(" 创建项目")],-1),f={href:"https://vuepress-theme-hope.github.io/v2/zh/",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"vuepress-theme-hope",-1),b=e("code",null,"VuePress 2",-1),x=e("code",null,"pnpm8",-1),g=h(`<p>在当前文件夹创建项目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> create vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>这里的my-docs是你想要设置的文档名称</p></div><p>这里会有一些构建引导，按照自己需求选择即可，建议加入 GitHub 工作流使得 GitHub 能够自动部署博客内容。</p><h2 id="示例和配置" tabindex="-1"><a class="header-anchor" href="#示例和配置" aria-hidden="true">#</a> 示例和配置</h2>`,5),k=e("p",null,[t("此处的配置全部使用 TypeScript，并放在 "),e("code",null,".vuepress/config.ts"),t(" 下面，配置可以参考下面的官方文档或下面的配置指南。")],-1);function V(N,E){const i=o("ExternalLinkIcon"),a=o("RouterLink");return c(),d("div",null,[u,l(" more "),_,m,e("p",null,[t("该博客使用 "),e("a",f,[v,n(i)]),t(" 主题，使用 "),b,t("（beta 版本）＋ "),x,t("。")]),g,e("p",null,[n(a,{to:"/guide/markdown.html"},{default:s(()=>[t("博客编写示例")]),_:1})]),k,e("p",null,[n(a,{to:"/guide/page.html"},{default:s(()=>[t("博客配置指南")]),_:1})])])}const y=r(p,[["render",V],["__file","index.html.vue"]]);export{y as default};
