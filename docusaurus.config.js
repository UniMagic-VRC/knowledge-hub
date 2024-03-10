// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UniMagic Knowledge Hub',
  tagline: '主にVRChat関連の技術に関する知見をためる場所',
  favicon: 'unimagic/favicon.ico',

  // Set the production url of your site here
  url: 'https://unimagic-vrc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/knowledge-hub/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UniMagic-VRC', // Usually your GitHub org/user name.
  projectName: 'unimagic-vrc.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UniMagic-VRC/knowledge-hub/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'unimagic/Unimagic-Logotype1BK-2048x1024.png',
      navbar: {
        title: 'UniMagic Knowledge Hub',
        logo: {
          alt: 'UniMagic Logo',
          src: 'unimagic/Unimagic-LogoCircleBK-1k.png',
          srcDark: 'unimagic/Unimagic-LogoCircleWH-1k.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'world',
            position: 'left',
            label: 'World',
          },
          {
            type: 'docSidebar',
            sidebarId: 'avatar',
            position: 'left',
            label: 'Avatar',
          },
          {
            type: 'docSidebar',
            sidebarId: 'misc',
            position: 'left',
            label: 'Misc',
          },
          {
            href: 'https://github.com/UniMagic-VRC/knowledge-hub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'World',
                to: '/world/',
              },
              {
                label: 'Avatar',
                to: '/avatar/',
              },
              {
                label: 'Misc',
                to: '/misc/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/UniMagicVRC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UniMagic, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
};

export default config;
