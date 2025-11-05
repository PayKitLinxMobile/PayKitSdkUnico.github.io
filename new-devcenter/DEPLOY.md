# 🚀 Deploy para GitHub Pages

Este documento explica como fazer o deploy do new-devcenter para o GitHub Pages.

## 📦 Configuração Atual

- **Base URL**: `/` (raiz do domínio)
- **Branch de origem**: `new-devcenter`
- **Branch de deploy**: `gh-pages`
- **URL final**: https://paykitsdkunico.github.io/

## 🔧 Mudanças Implementadas

### 1. `package.json`
- ✅ Adicionado `homepage` com a URL do GitHub Pages
- ✅ Adicionado scripts `predeploy` e `deploy`
- ✅ Instalado `gh-pages` como devDependency

### 2. `vite.config.ts`
- ✅ Configurado `base: "/"` para servir da raiz

### 3. `public/.nojekyll`
- ✅ Criado arquivo vazio para evitar processamento Jekyll

### 4. `.github/workflows/deploy.yml`
- ✅ Workflow automático do GitHub Actions para deploy

## 🚀 Como Fazer Deploy

### Opção A: Via npm (Manual)
```bash
cd new-devcenter
npm run deploy
```

### Opção B: Via GitHub Actions (Automático - Recomendado)
1. Faça commit das mudanças na branch `new-devcenter`
2. Faça push para o GitHub
3. O workflow `.github/workflows/main.yml` será executado automaticamente
4. Aguarde a conclusão do workflow (2-3 minutos)

**Nota:** O workflow na raiz detecta automaticamente a branch:
- `master/main` → Deploy do MkDocs
- `new-devcenter` → Deploy do React App

## 📝 Checklist Antes do Deploy

- [ ] Testar o build local: `npm run build`
- [ ] Testar preview: `npm run preview`
- [ ] Fazer commit de todas as mudanças
- [ ] Push para branch `new-devcenter`
- [ ] Configurar GitHub Pages nas Settings do repositório:
  - Settings → Pages → Source: `Deploy from a branch`
  - Branch: `gh-pages` / `root`

## 🔄 Para Reverter ao MkDocs Original

Quando quiser voltar ao site MkDocs original:

1. Nas Settings do GitHub:
   - Pages → Source: mude de volta para a branch original (master/main)
   
2. Ou simplesmente delete a branch `gh-pages`:
   ```bash
   git push origin --delete gh-pages
   ```

## 🧪 Testar Localmente Antes do Deploy

```bash
cd new-devcenter

# Instalar dependências (se ainda não fez)
npm install

# Build de produção
npm run build

# Visualizar o build localmente
npm run preview
```

Acesse http://localhost:4173 para testar

## 🐛 Troubleshooting

### Erro: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### Página em branco após deploy
- Verifique se o `base` no `vite.config.ts` está como `"/"`
- Verifique se o arquivo `.nojekyll` existe em `public/`

### Workflow falhou
- Verifique os logs no GitHub Actions
- Certifique-se que as permissões de Pages estão corretas nas Settings
