# Guia de Instalação - Docusaurus

Este guia explica como configurar e executar a documentação do SDK Único usando Docusaurus.

## Pré-requisitos

- Node.js versão 18.0 ou superior
- npm ou yarn

## Instalação

### 1. Criar um novo projeto Docusaurus

```bash
npx create-docusaurus@latest sdk-unico-docs classic
cd sdk-unico-docs
```

### 2. Copiar os arquivos de documentação

Copie todos os arquivos `.md` da pasta `docs/` deste repositório para a pasta `docs/` do projeto Docusaurus:

```bash
# Copiar arquivos de documentação
cp docs/*.md sdk-unico-docs/docs/

# Substituir arquivos de configuração
cp docs/docusaurus.config.js sdk-unico-docs/
cp docs/sidebars.js sdk-unico-docs/
```

### 3. Instalar dependências

```bash
npm install
# ou
yarn install
```

### 4. Executar em modo desenvolvimento

```bash
npm start
# ou
yarn start
```

O site será aberto automaticamente em `http://localhost:3000`

## Estrutura de Arquivos

```
sdk-unico-docs/
├── docs/                          # Documentação em Markdown
│   ├── cadastro.md
│   ├── primeiros-passos.md
│   ├── apis.md
│   ├── transacoes.md
│   ├── deeplink.md
│   ├── terminais-homologados.md
│   └── novidades.md
├── src/
│   ├── css/
│   │   └── custom.css            # Estilos personalizados
│   └── pages/
│       └── index.js              # Página inicial
├── static/
│   └── img/                      # Imagens e assets
├── docusaurus.config.js          # Configuração principal
├── sidebars.js                   # Configuração da sidebar
└── package.json
```

## Configuração

### docusaurus.config.js

Arquivo principal de configuração. Atualize as seguintes informações:

```javascript
module.exports = {
  title: 'SDK Único - Documentação',
  url: 'https://seu-dominio.com',
  organizationName: 'sua-organizacao',
  projectName: 'sdk-unico-docs',
  // ... outras configurações
};
```

### sidebars.js

Organização da barra lateral:

```javascript
module.exports = {
  docsSidebar: [
    'cadastro',
    'primeiros-passos',
    {
      type: 'category',
      label: 'Desenvolvimento',
      items: ['apis', 'transacoes', 'deeplink'],
    },
    // ... outras páginas
  ],
};
```

## Build para Produção

### 1. Gerar build estático

```bash
npm run build
# ou
yarn build
```

Os arquivos serão gerados na pasta `build/`

### 2. Testar build localmente

```bash
npm run serve
# ou
yarn serve
```

## Deploy

### GitHub Pages

1. Configure o `docusaurus.config.js`:

```javascript
module.exports = {
  url: 'https://sua-organizacao.github.io',
  baseUrl: '/sdk-unico-docs/',
  organizationName: 'sua-organizacao',
  projectName: 'sdk-unico-docs',
  deploymentBranch: 'gh-pages',
};
```

2. Deploy:

```bash
GIT_USER=seu-usuario npm run deploy
```

### Netlify

1. Faça push do código para GitHub/GitLab
2. Conecte o repositório no Netlify
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`

### Vercel

1. Faça push do código para GitHub/GitLab
2. Importe o projeto no Vercel
3. O deploy será automático

## Customização

### Cores e Temas

Edite `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
}
```

### Logo

Substitua o arquivo `static/img/logo.svg` pelo logo do SDK Único.

### Favicon

Substitua o arquivo `static/img/favicon.ico` pelo favicon desejado.

## Recursos Adicionais

### Admonitions (Blocos de Destaque)

Já incluídos na documentação:

```markdown
:::tip Dica
Conteúdo da dica
:::

:::warning Atenção
Conteúdo do aviso
:::

:::info Informação
Conteúdo informativo
:::

:::caution Cuidado
Conteúdo de cuidado
:::
```

### Tabelas

Suporte completo a tabelas Markdown:

```markdown
| Coluna 1 | Coluna 2 |
|----------|----------|
| Valor 1  | Valor 2  |
```

### Syntax Highlighting

Suporte para Kotlin, Java, XML e outras linguagens:

\`\`\`kotlin
val exemplo = "código kotlin"
\`\`\`

### Busca

Para adicionar busca, instale o plugin:

```bash
npm install --save @docusaurus/theme-search-algolia
```

Configure no `docusaurus.config.js`:

```javascript
themeConfig: {
  algolia: {
    appId: 'SEU_APP_ID',
    apiKey: 'SUA_API_KEY',
    indexName: 'sdk-unico',
  },
}
```

## Suporte

Para mais informações sobre Docusaurus:
- [Documentação oficial](https://docusaurus.io)
- [GitHub](https://github.com/facebook/docusaurus)

Para questões sobre o SDK Único:
- Email: sdkunico@linx.com.br
