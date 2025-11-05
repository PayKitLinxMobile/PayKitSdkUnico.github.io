/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar
  docsSidebar: [
    {
      type: 'doc',
      id: 'cadastro',
      label: 'Cadastre-se',
    },
    {
      type: 'doc',
      id: 'primeiros-passos',
      label: 'Primeiros Passos',
    },
    {
      type: 'category',
      label: 'Desenvolvimento',
      collapsed: false,
      items: [
        'apis',
        'transacoes',
        'deeplink',
      ],
    },
    {
      type: 'doc',
      id: 'terminais-homologados',
      label: 'Terminais Homologados',
    },
    {
      type: 'doc',
      id: 'novidades',
      label: 'O que há de novo?',
    },
  ],
};

module.exports = sidebars;
