import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Minecraft NeoForge 模组开发入门",
  description: "A guide for Minecraft NeoForge mods developing.",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' }
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Minecraft NeoForge 模组开发入门',
        items: [
          { text: '快速上手', link: '/docs/get_started' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
