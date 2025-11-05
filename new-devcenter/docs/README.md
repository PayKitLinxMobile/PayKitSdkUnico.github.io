# Documentação SDK Único - Formato Docusaurus

Esta pasta contém a documentação completa do SDK Único no formato compatível com [Docusaurus](https://docusaurus.io).

## 📚 Conteúdo

### Arquivos de Documentação

- **cadastro.md** - Informações sobre cadastro e obtenção de tokens
- **primeiros-passos.md** - Guia de configuração inicial do projeto
- **apis.md** - Documentação completa das APIs disponíveis
- **transacoes.md** - Guia de transações e consultas
- **deeplink.md** - Integração via DeepLink
- **terminais-homologados.md** - Lista completa de terminais homologados
- **novidades.md** - Histórico de versões e novidades

### Arquivos de Configuração

- **docusaurus.config.js** - Configuração principal do Docusaurus
- **sidebars.js** - Estrutura da navegação lateral
- **package.json** - Dependências do projeto
- **INSTALACAO-DOCUSAURUS.md** - Guia completo de instalação

## 🚀 Quick Start

### 1. Criar projeto Docusaurus

```bash
npx create-docusaurus@latest sdk-unico-docs classic
cd sdk-unico-docs
```

### 2. Copiar arquivos de documentação

```bash
# Copiar todos os arquivos .md
cp docs/*.md sdk-unico-docs/docs/

# Copiar configurações
cp docs/docusaurus.config.js sdk-unico-docs/
cp docs/sidebars.js sdk-unico-docs/
cp docs/package.json sdk-unico-docs/
```

### 3. Instalar e executar

```bash
npm install
npm start
```

A documentação estará disponível em `http://localhost:3000`

## 📖 Estrutura da Documentação

```
docs/
├── cadastro.md                    # Cadastro e tokens
├── primeiros-passos.md           # Setup inicial
├── apis.md                       # Referência de APIs
├── transacoes.md                 # Transações
├── deeplink.md                   # Integração DeepLink
├── terminais-homologados.md      # Terminais suportados
├── novidades.md                  # Changelog
├── docusaurus.config.js          # Configuração
├── sidebars.js                   # Navegação
├── package.json                  # Dependências
└── INSTALACAO-DOCUSAURUS.md      # Guia de instalação
```

## ✨ Recursos Utilizados

### Formatação Markdown

- ✅ Blocos de código com syntax highlighting (Kotlin, Java, XML)
- ✅ Tabelas responsivas
- ✅ Links externos e internos
- ✅ Listas ordenadas e não-ordenadas
- ✅ Imagens e assets

### Admonitions (Blocos de Destaque)

```markdown
:::tip Dica
Informações úteis para o desenvolvedor
:::

:::warning Atenção
Avisos importantes
:::

:::info Informação
Conteúdo informativo adicional
:::

:::caution Cuidado
Alertas sobre possíveis problemas
:::
```

### Componentes Docusaurus

- Navegação lateral automática
- Busca integrada (configurável)
- Versionamento de documentação
- Dark mode / Light mode
- Responsivo e mobile-friendly

## 🎨 Personalização

### Alterar Cores

Edite `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  /* ... outras cores */
}
```

### Logo e Favicon

- Logo: Substitua `static/img/logo.svg`
- Favicon: Substitua `static/img/favicon.ico`

### Configurações Gerais

Edite `docusaurus.config.js`:

```javascript
module.exports = {
  title: 'SDK Único - Documentação',
  url: 'https://seu-dominio.com',
  // ... outras configurações
};
```

## 🌐 Deploy

### GitHub Pages

```bash
GIT_USER=seu-usuario npm run deploy
```

### Netlify

1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel

1. Importe o projeto
2. Deploy automático a cada push

## 📝 Build para Produção

```bash
# Gerar build estático
npm run build

# Testar build localmente
npm run serve
```

## 🔧 Manutenção

### Adicionar Nova Página

1. Crie um arquivo `.md` em `docs/`
2. Adicione referência em `sidebars.js`:

```javascript
docsSidebar: [
  // ... outras páginas
  'nova-pagina',
]
```

### Atualizar Conteúdo

Edite os arquivos `.md` correspondentes. O Docusaurus faz hot-reload automático durante o desenvolvimento.

## 📚 Documentação Docusaurus

Para mais informações sobre recursos e configurações:

- [Documentação oficial](https://docusaurus.io/docs)
- [Guia de Markdown](https://docusaurus.io/docs/markdown-features)
- [Configuração](https://docusaurus.io/docs/configuration)
- [Deploy](https://docusaurus.io/docs/deployment)

## 💬 Suporte

**SDK Único:**
- Email: sdkunico@linx.com.br

**Docusaurus:**
- [Discord](https://discord.gg/docusaurus)
- [GitHub Issues](https://github.com/facebook/docusaurus/issues)

## 📄 Licença

Documentação do SDK Único - Todos os direitos reservados.
