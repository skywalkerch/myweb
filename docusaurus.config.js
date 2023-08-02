const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
// 数学公式渲染插件
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'skywalkerch',
  tagline: '',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://skywalkerch.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'skywalkerch', // Usually your GitHub org/user name.
  projectName: 'myweb', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true
  },
  plugins: [
    'plugin-image-zoom'
  ],
  themes: [
    '@docusaurus/theme-mermaid',
    '@saucelabs/theme-github-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['zh']
        // ```
      })
    ]
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math,{ strict: false }],
          rehypePlugins: [katex, { strict: false }],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/skywalkerch/myweb/blob/main/'
        },
        blog: {
          remarkPlugins: [math,{ strict: false }],
          rehypePlugins: [katex, { strict: false }],
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/skywalkerch/myweb/blob/main/'
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  stylesheets: [
    {
      href: './src/css/katex.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      
      // Replace with your project's social card
      image: 'img/logo.svg',

      mermaid: {
        theme: { light: 'forest', dark: 'neutral' }
      },

      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
          container: '#zoom-container',
          template: '#zoom-template'
        }
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5
      },

      navbar: {
        title: '🚀Skywalkerch',
        logo: {
          alt: 'skywalkerch Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId :'笔记/计算机/介绍',
            sidebarId: 'computer408',
            position: 'left',
            label: '🪐计算机星球',
            target: '_blank'
          },

          {
            type: 'doc',
            docId :'算法/介绍',
            sidebarId: 'algorithm',
            position: 'left',
            label: '📈算法',
            target: '_blank'
          },

          { to: '/blog',
           label: '✒️随笔', 
           position: 'left',
           target: '_blank'
           },
           { to: '/docs/独立页面/关于',
           label: '🗺️关于', 
           position: 'right',
           target: '_blank'
           }
          /*  {
            href: 'https://github.com/skywalkerch/myweb',
            label: 'GitHub',
            position: 'right',
          }, */

        ]
      },
     /* footer: {
        style: 'dark',
        links: [
          {
            title: '☎️联系',
            items: [
              {
                label: '👾Github',
                href: 'https://github.com/skywalkerch',
                target: '_blank'
              },
              {
                label: '📬邮箱',
                href: 'mailto:skywalkerch@foxmail.com',
                target: '_blank',
              }

            ]
          },
          {
            title: '🧰更多',
            items: [
              {
                label: '✒️随笔',
                to: '/blog',
                target: '_blank'
              }, {
                to :'docs/独立页面/关于',
                label: '🗺️关于',
                target: '_blank'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skywalkerch Site`
      },*/
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,

        additionalLanguages: ['powershell', 'cpp', 'c', 'python']

      }
    })
}

module.exports = config
