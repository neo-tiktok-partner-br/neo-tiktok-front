<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# SETUP // Guia de Instalação e Desenvolvimento Local

```text
========================================
     neøflow · TIKTOK PARTNER SETUP
========================================
Status: ACTIVE
Version: v1.0.0
Framework: Astro 7 (Node.js >= v20)
========================================
```

## ⟠ Requisitos do Ambiente

Antes de iniciar a execução local do repositório [neo-tiktok-front](file:///Users/nettomello/neomello/flowoff_tik_tok_partner/neo-tiktok-front/SETUP.md), certifique-se de ter os seguintes runtimes instalados:

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FERRAMENTA    VERSÃO MÍNIMA        GERENCIADOR RECOMENDADO           ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ Node.js       >= v20.0.0 (v24.x)   fnm / mise                        ┃
┃ pnpm          >= 9.x (v11.x)       corepack / pnpm self-update       ┃
┃ Makefile      GNU Make >= 3.81     nativo macOS / Linux              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

────────────────────────────────────────

## ⨷ Passo a Passo de Inicialização

### 1. Clonar o Repositório
Utilize a URL SSH remota oficial do ecossistema:

```bash
git clone git@github.com:neo-tiktok-partner-br/neo-tiktok-front.git
cd neo-tiktok-front
```

### 2. Verificar o Ambiente
Execute o comando de checagem do ambiente Node.js:

```bash
make check-node
```

### 3. Instalar Dependências (`pnpm --ignore-scripts`)
Instale as dependências do Astro utilizando a interface de automação do `Makefile`:

```bash
make install
```

> **Nota Técnica para Agentes:** O comando `make install` executa `pnpm install --ignore-workspace --ignore-scripts`. Essa estratégia desativa a execução de scripts pós-instalação redundantes do `esbuild` (que já fornece binários nativos pré-compilados), permitindo uma instalação limpa e instantânea em **30ms** sem exigir aprovação manual (`pnpm approve-builds`).

────────────────────────────────────────

## ⧉ Fluxo de Desenvolvimento Local

Para iniciar o servidor local de desenvolvimento do Astro com Hot Module Replacement (HMR WebSocket):

```bash
make dev
```

O servidor estará disponível em: `http://localhost:4321`

────────────────────────────────────────

## ⍟ Compilação e Produção

Para compilar os arquivos estáticos de produção:

```bash
make build
```

Para rodar a pré-visualização local dos ativos compilados em `dist/`:

```bash
make preview
```

────────────────────────────────────────

## ◬ Pipeline de Qualidade & Verification

Antes de realizar qualquer commit, execute o pipeline completo de validação:

```bash
make verify
```

Para efetuar o commit assinado utilizando Conventional Commits:

```bash
make commit
```

────────────────────────────────────────

```text
▓▓▓ NΞØ MELLØ
++++++───────────
Core Architect · NΞØ Protocol
neo@neoprotocol.space

"Code is law. Expand until
chaos becomes protocol."
++++++───────────
```
