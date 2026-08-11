<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# SETUP // Guia de Instalação e Desenvolvimento Local

```text
========================================
     neøflow · TIKTOK PARTNER SETUP
========================================
Status: ACTIVE
Version: v1.0.0
========================================
```

## ⟠ Requisitos do Ambiente

Antes de iniciar a execução local do repositório `neo-tiktok-front`, certifique-se de ter os seguintes runtimes instalados:

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
Utilize a URL SSH gerenciada via teaBASE:

```bash
git clone git@github.com:neomello/neomello-control-plane.git
cd flowoff_tik_tok_partner/neo-tiktok-front
```

### 2. Verificar o Ambiente
Execute o comando de checagem do ambiente:

```bash
make check-node
```

### 3. Instalar Dependências
Instale as dependências do Astro usando a interface de comandos padronizada:

```bash
make install
```

### 4. Configurar Variáveis de Ambiente
Copie o arquivo de exemplo `.env.example` para `.env` (se necessário para a camada de conectores):

```bash
cp .env.example .env
```

────────────────────────────────────────

## ⧉ Fluxo de Desenvolvimento Local

Para iniciar o servidor local de desenvolvimento do Astro com hot-reload:

```bash
make dev
```

O servidor estará disponível por padrão em: `http://localhost:4321`

────────────────────────────────────────

## ⍟ Compilação e Produção

Para testar e compilar o build estático e SSR de produção:

```bash
make build
```

Para rodar a pré-visualização local do build gerado em `dist/`:

```bash
make preview
```

────────────────────────────────────────

## ◬ Pipeline de Qualidade e Verification

Antes de realizar qualquer commit, execute o pipeline completo de validação:

```bash
make verify
```

Para efetuar o commit assinado utilizando Conventional Commits:

```bash
make commit
```

────────────────────────────────────────

## ⨀ Resolução de Problemas (Troubleshooting)

Se houver problemas com `node_modules/` ou artefatos corrompidos, execute o comando de manutenção:

```bash
make repair
```

────────────────────────────────────────

## ⍟ Fechamento

```text
▓▓▓ NΞØ MELLØ
++++++───────────
Core Architect · NΞØ Protocol
neo@neoprotocol.space

"Code is law. Expand until
chaos becomes protocol."
++++++───────────
```
