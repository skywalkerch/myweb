// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
//数学公式渲染插件
const math = require('remark-math');
const katex = require('rehype-katex');



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skywalkerch',
  tagline: '子以四教：文，行，忠，信。',
  favicon: 'img/favicon.svg',
  
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
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
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      }),
    ],
],
  

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins:  [katex, {strict: false}],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/skywalkerch/myweb/blob/main/',
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins:  [katex, {strict: false}],
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/skywalkerch/myweb/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
   
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  themeConfig:

  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Replace with your project's social card
      image: 'img/logo.svg',
      
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },


      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },

      navbar: {
        title: 'Skywalkerch',
        logo: {
          alt: 'skywalkerch Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '知识星球',
          },
          {to: '/blog', label: '随笔', position: 'left'},
         /*  {
            href: 'https://github.com/skywalkerch/myweb',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '知识星球',
            items: [
              {
                label: '介绍',
                to: '/docs/介绍',
              },
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/skywalkerch',
              },
              {
                label: '邮箱',
                href: 'mailto:skywalkerch@foxmail.com',
              },
              
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '随笔',
                to: '/blog',
              },{
                label:'关于',
                to: '',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skywalkerch Site`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
