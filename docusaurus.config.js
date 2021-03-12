/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ConfCube Docs',
  tagline: "Tech Event's Social Network",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yogeshdecodes', // Usually your GitHub org/user name.
  projectName: 'confcube-docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      // title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        // { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ConfCube. Built with Docusaurus.`,
    },
    announcementBar: {
      id: 'website_under_construction',
      content:
        '<div style="font-weight: bold">Welcome to the official documentation of ConfCube. <a target="_blank" href="https://confcube.vercel.app/">Click to see live website.</a></div>',
      backgroundColor: '#000',
      textColor: '#f5f6f7',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yogeshdecodes/confcube-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yogeshdecodes/confcube-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
