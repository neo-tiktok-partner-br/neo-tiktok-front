<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# NEXTSTEPS // Roteiro de Expansão de Páginas e Rotas

```text
========================================
    neøflow · PLANO DE EXPANSÃO DE PÁGINAS
========================================
Status: ETAPA 1 CONCLUÍDA / ETAPA 2 QUEUED
Framework Target: Astro (.astro)
========================================
```

## ⟠ Arquitetura de Páginas & Status de Execução

Abaixo está a matriz completa de rotas concluídas e o roadmap aprovado para desenvolvimento no ecossistema **neøflow // Official TikTok Partners**.

────────────────────────────────────────

## ⧉ Matriz de Rotas & Status de Implementação

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ROTA                 DOMÍNIO       STATUS      PROPÓSITO & RECURSOS CHAVE           ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ /                    Home          CONCLUÍDO   Landing page iOS-like com logo LCP   ┃
┃ /legal/privacidade   Legal         CONCLUÍDO   Política de Privacidade (LGPD)       ┃
┃ /legal/termos        Legal         CONCLUÍDO   Termos de Uso & Serviços             ┃
┃ /legal/direitos-...  Legal         CONCLUÍDO   Direitos do Titular de Dados (Art.18)┃
┃ /legal/decreto-...   Legal         CONCLUÍDO   Decreto do E-commerce (Nº 7.962/13)  ┃
┃ /shop                Shop          PLANEJADO   Hub de Sellers, marcas e catálogos   ┃
┃ /shop/conectar       Shop          PLANEJADO   Onboarding e autorização OAuth       ┃
┃ /creators            Creators      PLANEJADO   Hub de Criadores e Live Commerce     ┃
┃ /creators/playbook   Creators      PLANEJADO   Playbooks e manuais de performance   ┃
┃ /marketing           Marketing     PLANEJADO   Inteligência de mídias e Shop Ads    ┃
┃ /tech                Tech          PLANEJADO   Portal Dev, OAuth, Webhooks & Agentes┃
┃ /tech/integracoes    Tech          PLANEJADO   Status de APIs e monitor de eventos  ┃
┃ /sobre               Institucional PLANEJADO   Manifesto descentralizado neøflow    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

────────────────────────────────────────

## ⨷ Resumo da Etapa 1 (Concluída)

1. **Home & Portal Principal (`/`):**
   * Preloader animado (`Preloader.astro`) com barra de progresso.
   * Ativo de LCP otimizado com `fetchpriority="high"`, `decoding="async"`, `width="720"` e `height="180"`.
   * Design System Mobile-First iOS-Like com cantos rounded `--radius-ios: 22px`, física de toque e cores semânticas (Acid Green, Coral, Cyan, White).
2. **Hub de Conformidade Legal Brasileira (`/legal/*`):**
   * Layout mestre unificado (`LegalLayout.astro`) com suporte a arraste tátil (Drag-to-Scroll).
   * Identificação formal da razão social `NEOFLOW TECNOLOGIA E PERFORMANCE LTDA`, CNPJ `00.000.000/0001-00` e DPO `neo@neoflowoff.agency`.
   * 4 rotas estáticas ativas (`/legal/privacidade`, `/legal/termos`, `/legal/direitos-titular`, `/legal/decreto-ecommerce`).
3. **Infraestrutura PWA & SEO:**
   * Service Worker PWA (`public/sw.js`), `manifest.webmanifest`, `robots.txt`, `llms.txt`, `sitemap.xml` e `favicon.ico`.
   * `make verify` compilando 100% de produção sem erros.

────────────────────────────────────────

## ⨀ Etapa 2 (Próximos Passos Queued)

* **Fase 2A — Hub Shop (`/shop` e `/shop/conectar`):** Formulário de autorização e integração de lojistas com a TikTok Shop Open API.
* **Fase 2B — Hub Creators (`/creators` e `/creators/playbook`):** Central de onboarding de afiliados e tutoriais de Live Commerce.
* **Fase 2C — Hub Tech (`/tech` e `/tech/integracoes`):** Monitoramento de saúde de conectores, webhooks e orquestração de Agentes de IA.

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
