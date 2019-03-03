const portFinderSync = require('portfinder-sync');
const host = require('ip').address();
const port = portFinderSync.getPort(8080);

module.exports = {
  title: '前端文档导航',
  base: '/nav/',
  host,
  port,
  dest: '.vuepress/dist',
  head: [

  ],
  markdown: {
    // https://www.npmjs.com/package/markdown-it-linkify-images
    lineNumbers: true,
    config: md => {
      // /Users/huixisheng/.config/yarn/global/node_modules/markdown-it/lib/rules_core/linkify.js
      // Skip content of html tag links
      // md.options.linkify = true;
      md.configure({
        options: {
          linkify: true,
        }
      });
      // md.set({
      //   options: {
      //     linkify: true,
      //   },
      //   linkify: true,
      // });
      // // https://github.com/markdown-it/markdown-it/issues/367
      // md.enable('linkify');
      // md.linkify(md);
      // console.log(md);
    }
  },
  themeConfig: {
    nav: [

    ],
    sidebar: {

    },
    search: true,
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 10,
    repo: 'huixisheng/nav',
    repoLabel: '查看源码',
    docsRepo: 'huixisheng/nav',
    // docsDir: '',
    // docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
}

function genSidebarGitConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [

      ]
    }
  ]
}