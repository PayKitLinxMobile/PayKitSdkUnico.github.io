// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SDK Único - Documentação',
  tagline: 'Documentação oficial do SDK Único para integrações de pagamento',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://seu-dominio.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'sua-organizacao',
  projectName: 'sdk-unico-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/sua-organizacao/sdk-unico-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SDK Único',
        logo: {
          alt: 'SDK Único Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'cadastro',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://github.com/sua-organizacao/sdk-unico',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Cadastre-se',
                to: '/cadastro',
              },
              {
                label: 'Primeiros Passos',
                to: '/primeiros-passos',
              },
              {
                label: 'APIs',
                to: '/apis',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Transações',
                to: '/transacoes',
              },
              {
                label: 'DeepLink',
                to: '/deeplink',
              },
              {
                label: 'Terminais Homologados',
                to: '/terminais-homologados',
              },
            ],
          },
          {
            title: 'Suporte',
            items: [
              {
                label: 'Contato',
                href: 'mailto:sdkunico@linx.com.br',
              },
              {
                label: 'O que há de novo',
                to: '/novidades',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SDK Único. Documentação construída com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['kotlin', 'java', 'xml'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
