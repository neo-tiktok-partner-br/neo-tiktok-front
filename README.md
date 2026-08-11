<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# neøflow // Official TikTok Partners

![neo-tiktok-front banner](./docs/assets/neo-tiktok-front-banner.svg)

```text
========================================
     neøflow · TIKTOK PARTNER FRONT
========================================
Status: ACTIVE
Version: v1.0.0
========================================
```

![Official TikTok Partners Logo](./public/assets/logo_partners.svg)

> **Seu perfil. Seus interesses. Nosso negócio.**
>
> não é programa de afiliados.
> não é prestação de serviços.
> não é marketing digital.
> *É apenas o que gostamos de fazer.*

────────────────────────────────────────

## ⟠ Objetivo

O repositório `neo-tiktok-front` é o ponto focal de interface frontend e ecossistema de aplicação para a **neøflow // Official TikTok Partners**.

A neøflow opera como uma infraestrutura descentralizada de comércio digital e agência de performance, integrando parceiros, criadores de conteúdo e lojistas diretamente às capacidades avançadas do TikTok Shop.

────────────────────────────────────────

## ⨷ Identidade & Marca

A doutrina visual é definida pela regra: **TikTok-native. neøflow-owned.**

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ DOMÍNIO       PALETA CANÔNICA       CÓDIGO HEX       RESPONSABILIDADE┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ Tech / Infra  Acid Green            #D7FE09        Agentes & APIs  ┃
┃ Shop          Coral / Red           #FE2C55        Sellers & Vendas┃
┃ Creators      Cyan                  #00F2FE        Rede & Afiliados┃
┃ Marketing     White                 #FFFFFF        Campanhas & UGC ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

* **Fundo padrão:** Dark Canvas (`#09131A` / `#0B151C`).
* **Tipografia:** `Space Grotesk` (Títulos), `Inter` (Corpo), `IBM Plex Mono` (Dados/Labels).
* **Fronteira com TikTok:** Proibida qualquer reprodução ou clonagem de telas oficiais do Seller Center ou dashboards proprietários do TikTok. A marca neøflow deve passar no *Logo Removal Test* e *Screenshot Confusion Test*.

────────────────────────────────────────

## ⧉ Estrutura de Domínios

O ecossistema divide-se em 4 territórios fundamentais:

1. **01 — Shop (Sellers):** Gestão de catálogos, sincronização de inventário, pedidos, comissões e logística.
2. **02 — Creators:** Captação, treinamento, direcionamento de afiliados e automação de Live Commerce.
3. **03 — Marketing:** Criação de conteúdo, inteligência criativa, campanhas de tráfego e mídia de conversão (Shop Ads).
4. **04 — Tech:** Camada de integração com TikTok Shop Open API, fluxos OAuth 2.0, recepção resiliente de Webhooks e orquestração de Agentes de IA.

────────────────────────────────────────

## ⍟ Arquitetura & Diretrizes Tech

* **Framework Primário:** Astro (`.astro`).
* **Renderização:** Server-Side Rendering (SSR) e saída estática orientada a alta performance.
* **Hidratação (Islands):** Uso minimalista de JavaScript no cliente. Hydration via `client:visible` quando estritamente necessário.
* **Tokens CSS:** Estilização baseada em variáveis CSS em `src/styles/tokens.css` derivada das especificações em `docs/branding.md`.
* **Segurança:** Nenhuma secret (chaves privadas, tokens OAuth, chaves de webhook HMAC) deve ser exposta no frontend.

────────────────────────────────────────

## ◬ Documentação Relacionada

```text
docs/
├── branding.md              # Diretrizes de design system, tokens e identidade visual
├── sitemap-operacional.md   # Mapeamento completo do ecossistema TikTok (Partner, Seller, Creator, Tech)
├── playbook-operacional.md  # Manual operacional de escala descentralizada
├── about-neoflow.md         # Posicionamento e mensagens institucionais
└── perfil-neflow.md         # Embeds e referências de perfis oficiais
```

* Veja também: [AGENTS.md](./AGENTS.md) para o contrato operacional completo de desenvolvimento.

────────────────────────────────────────

## ⨀ Governança & Execução

* **Organização GitHub:** [NEO-PROTOCOL](https://github.com/NEO-PROTOCOL) / [neomello](https://github.com/neomello)
* **Commits:** Assinados via SSH / teaBASE.
* **Execução:** Surgical edits, commits rastreáveis, sem alteração de arquivos de secrets ou dependências não auditadas.

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

