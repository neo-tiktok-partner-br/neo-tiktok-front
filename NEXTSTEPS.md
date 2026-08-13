<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# NEXTSTEPS // Roteiro de Expansão de Páginas e Rotas

```text
========================================
    neøflow · PLANO DE EXPANSÃO DE PÁGINAS
========================================
Status: ETAPA 1 CONCLUÍDA / ARQUITETURA DE PLATAFORMA APROVADA
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
┃ /legal/privacidade   Legal         CONCLUÍDO   Privacidade & Direitos do Titular    ┃
┃ /legal/termos        Legal         CONCLUÍDO   Termos de Uso & Decreto E-commerce   ┃
┃ /shop                Shop          PLANEJADO   Hub de Sellers, marcas e catálogos   ┃
┃ /shop/conectar       Shop          PLANEJADO   Onboarding e autorização OAuth       ┃
┃ /creators            Creators      PLANEJADO   Hub de Criadores e Live Commerce     ┃
┃ /creators/playbook   Creators      PLANEJADO   Playbooks e manuais de performance   ┃
┃ /marketing           Marketing     PLANEJADO   Inteligência de mídias e Shop Ads    ┃
┃ /tech                Tech          PLANEJADO   Portal Dev, OAuth, Webhooks & Agentes┃
┃ /tech/integracoes    Tech          PLANEJADO   Status de APIs e monitor de eventos  ┃
┃ /partners            Partner Ops   PLANEJADO   Jornada de parceiros e agências      ┃
┃ /sobre               Institucional PLANEJADO   Manifesto descentralizado neøflow    ┃
┃ /app                 Operação      PLANEJADO   Shell autenticado por capacidades    ┃
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
   * Identificação formal da razão social `Flowoff Marketing e Assessoria Digital LTDA`, CNPJ `43.376.355/0001-92` e DPO `neo@neoflowoff.agency`.
   * 2 rotas estáticas ativas consolidando conformidade integral (`/legal/privacidade` e `/legal/termos`).
3. **Infraestrutura PWA & SEO:**
   * Service Worker PWA (`public/sw.js`), `manifest.webmanifest`, `robots.txt`, `llms.txt`, `sitemap.xml` e `favicon.ico`.
   * `make verify` compilando 100% de produção sem erros.

────────────────────────────────────────

## ⨀ Etapa 2 (Próximos Passos Queued)

* **Fase 2A — Hub Shop (`/shop` e `/shop/conectar`):** Formulário de autorização e integração de lojistas com a TikTok Shop Open API.
* **Fase 2B — Hub Creators (`/creators` e `/creators/playbook`):** Central de onboarding de afiliados e tutoriais de Live Commerce.
* **Fase 2C — Hub Tech (`/tech` e `/tech/integracoes`):** Monitoramento de saúde de conectores, webhooks e orquestração de Agentes de IA.

────────────────────────────────────────

## ⌁ Arquitetura de Plataforma Aprovada

O `neo-tiktok-front` é a única entrada pública canônica para os territórios
Shop, Creators, Marketing e Tech.

`Partner Operations` coordena esses territórios internamente e não substitui a
taxonomia pública. A rota `/partners` apresenta a jornada comercial de
parceiros e agências; a operação autenticada converge para `/app`.

```text
entrada pública
→ qualificação de intenção
→ identidade
→ diagnóstico
→ jornada recomendada
→ autorização mínima
→ ativação
→ acompanhamento operacional
```

O OAuth não deve ser o primeiro passo padrão. Seller e Creator usam classes de
autorização separadas. Uma identidade pode acumular memberships, papéis e
capacidades sem duplicar usuários.

### Aplicação autenticada — taxonomia alvo

```text
/app
├── /inicio
├── /onboarding
├── /contas
├── /shops
├── /creators
├── /campanhas
├── /conteudos
├── /integracoes
├── /eventos
└── /configuracoes
```

Essa árvore é um contrato de evolução, não uma declaração de rotas já
implementadas. O menu será derivado das capacidades do usuário.

### Consolidação de superfícies legadas

- `neo-content-dashboard`: superfície interna transitória; capacidades úteis
  migram gradualmente para `/app`.
- `neo-content-landing`: superfície de aquisição transitória; conteúdo e URLs
  úteis devem ser inventariados, migrados e redirecionados.

Nenhum serviço será removido antes de paridade, evidência de tráfego, cutover,
rollback e verificação do runtime.

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
