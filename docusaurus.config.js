/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Akbarsaurus',
  tagline: 'Theme toggle at top right corner.',
  url: 'https://akbarsaurus.yakbar.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yhakbar',
  projectName: 'akbarsaurus',
  customFields: {
    githubFileUrl: 'https://github.com/yhakbar/akbarsaurus/blob/main',
    githubFolderUrl: 'https://github.com/yhakbar/akbarsaurus/tree/main',
  },
  themeConfig: {
    navbar: {
      title: 'Akbarsaurus',
      logo: {
        alt: 'Akbarsaurus',
        src: 'img/akbarsaurus.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/yhakbar/akbarsaurus',
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
              label: 'Home',
              to: '/docs/',
            },
            {
              label: 'Theming',
              to: '/docs/theming',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Home',
              to: '/blog/',
            },
            {
              label: 'Trying Out Docusaurus',
              to: '/blog/2021/06/12/trying-out-docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yhakbar/akbarsaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yousif Akbar. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/yhakbar/akbarsaurus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/yhakbar/akbarsaurus/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
