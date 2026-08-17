<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# NEXTSTEPS // Roteiro de Expansão de Páginas e Rotas

## NOW — App Review 2026-08-17

- [x] `/login` publicado para a conta dedicada de reviewer
- [x] `/app` publicado com status e shop autorizada exata
- [x] `/app/orders` publicado com loading, success, empty e error sanitizados
- [x] Privacy e Terms públicas no domínio canônico
- [ ] Executar gate final em janela anônima e submeter no Partner Center
- [ ] Registrar status, protocolo e data após a submissão

Pacotes demonstrados: `seller.shop.info`, `seller.authorization.info` e
`seller.order.info`. Não ampliar a reviewer UI antes do review inicial.

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
┃ /shop                Shop          CONCLUÍDO   Entrada de Sellers, marcas e operação┃
┃ /shop/conectar       Shop          PLANEJADO   Onboarding e autorização OAuth       ┃
┃ /creators            Creators      CONCLUÍDO   Entrada de Creators e Live Commerce  ┃
┃ /creators/playbook   Creators      PLANEJADO   Playbooks e manuais de performance   ┃
┃ /marketing           Marketing     CONCLUÍDO   Entrada de conteúdo e performance    ┃
┃ /tech                Tech          CONCLUÍDO   Entrada de integrações e automações  ┃
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

* **Fase 2A — Entradas por intenção:** concluída para `/shop`, `/creators`, `/marketing` e `/tech`, sem antecipar login ou OAuth.
* **Fase 2B — Qualificação:** definir o contrato de intenção e implementar onboarding progressivo antes das autorizações externas.
* **Fase 2C — Operação autenticada:** introduzir identidade, memberships e capacidades para sustentar `/app`.

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
