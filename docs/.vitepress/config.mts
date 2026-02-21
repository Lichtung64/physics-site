import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

export default defineConfig({
  title: '物理小站',
  description: '大学物理教学资源站',
  lang: 'zh-CN',

  // 基础路径，如果部署到 GitHub Pages 的子路径需要修改
  base: '/physics-site/',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '物理小站',

    nav: [
      { text: '首页', link: '/' },
      { text: '课程', link: '/courses/' },
      { text: '文章', link: '/articles/' },
      { text: '资料下载', link: '/resources' }
    ],

    sidebar: {
      '/courses/': [
        {
          text: '课程',
          items: [
            { text: '课程总览', link: '/courses/' },
            { text: '大学物理', link: '/courses/general-physics' },
            { text: '群论', link: '/courses/group-theory' },
            { text: '物理与AI', link: '/courses/physics-ai' }
          ]
        }
      ],
      '/articles/': [
        {
          text: '文章',
          items: [
            { text: '文章列表', link: '/articles/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ],

    footer: {
      message: '物理小站 - 专注物理教学',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
      }
    ]
  ]
})
