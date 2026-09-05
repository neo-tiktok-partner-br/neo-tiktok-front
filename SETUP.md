<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# SETUP // Guia de Instalação e Desenvolvimento Local

```text
========================================
     neøflow · TIKTOK PARTNER SETUP
========================================
Status: ACTIVE
Version: v1.0.0
Framework: Astro 7 (Node.js >= v22.12)
========================================
```

## ⟠ Requisitos do Ambiente

Antes de iniciar a execução local do repositório [neo-tiktok-front](file:///Users/nettomello/neomello/flowoff_tik_tok_partner/neo-tiktok-front/SETUP.md), certifique-se de ter os seguintes runtimes instalados:

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ FERRAMENTA    VERSÃO MÍNIMA        GERENCIADOR RECOMENDADO           ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ Node.js       >= v22.12.0           mise                              ┃
┃ pnpm          >= 10.x               Corepack                          ┃
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

> **Nota Técnica para Agentes:** O repositório possui um `pnpm-workspace.yaml` local com `packages: []`, que preserva sua soberania em relação ao workspace superior. O comando `make install` usa `pnpm install --frozen-lockfile --ignore-scripts`.

────────────────────────────────────────

## ⧉ Fluxo de Desenvolvimento Local & Rotas Canônicas

Para iniciar o servidor local de desenvolvimento do Astro com Hot Module Replacement (HMR WebSocket):

```bash
make dev
```

O servidor estará disponível em: `http://localhost:4321`

### 📱 Camada 9:16 Minis (In-App TikTok / Mobile Native):
* **`/` (Home Oficial):** Hub principal 9:16 para escolha de porta (Sellers, Creators, Séries, Tech)
* **`/minis/creator`:** Hub do Criador e automações de DM
* **`/minis/creator/dashboard`:** Painel de métricas, produtos e conversão
* **`/minis/creator/catalog`:** Catálogo qualificado de produtos para amostra / link DM
* **`/minis/creator/wallet`:** Carteira e extrato de split financeiro
* **`/minis/seller`:** Splash de integração de lojista
* **`/minis/seller/dashboard`:** Painel de vendas do lojista
* **`/minis/series`:** Player de microlearning 9:16 com checkout 1-clique

### 🖥️ Camada Desktop & Documentação Técnica:
* **`/home`:** Portal institucional clássico widescreen
* **`/shop`:** Apresentação da infraestrutura comercial para Sellers
* **`/docs` (`docs.neotiktok.com`):** Portal de desenvolvedores, `@neomello/tiktok-sdk`, OAuth e specs
* **`/legal/termos`:** Termos de Uso (Dec. 7.962/2013 e CDC Art. 49)
* **`/legal/privacidade`:** Política de Privacidade (LGPD Lei 13.709/2018 e DPO)

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
