module.exports = {
  title: 'Professor Gabriel Ramos',
  tagline: 'Tecnicas de estudo e ferramentas',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gabrielramos',
  projectName: 'blog',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    codeBlock: { showCopyButton: true },
    mermaid: { theme: { light: 'default', dark: 'dark' } },
  },
  themes: ['@docusaurus/theme-mermaid'],
};
