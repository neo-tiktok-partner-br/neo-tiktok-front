<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# CONTEXT.md // NEO-TIKTOK-FRONT

> Contexto arquitetural e rotas da vitrine e entry point canônico `neotiktok.com`.

---

## ⟠ Propósito do Módulo

O `neo-tiktok-front` é a superfície pública unificada e portal de entrada para o ecossistema TikTok Partner da FlowOff. Ele atende lojistas (Sellers), criadores (Creators), agências/marcas e operadores de tecnologia, além de conter a área autenticada do Reviewer App (`/app`).

---

## ⨷ Rotas Implementadas & Territórios

* **`/` (Início / Institucional):** Apresentação da agência, proposta de valor da parceria TikTok One e direcionamento de intenção.
* **`/shop` & `/sellers/conectar`:** Hub para lojistas do TikTok Shop Brasil, com benefícios de integração e fluxo de onboarding.
* **`/creators` & `/creators/paulinha`:** Hub para criadores de conteúdo e afiliados, detalhando briefs e co-criação.
* **`/marketing`:** Proposta de valor para marcas e times de marketing (Brand Orders, criativos em escala).
* **`/tech`:** Arquitetura de APIs, segurança de dados e integrações para times técnicos.
* **`/login` & `/app` (`/app/orders`):** Shell autenticado do conector e interface homologada para o App Review do TikTok Shop.
* **`/legal/privacidade` & `/legal/termos`:** Conformidade legal LGPD com identificação da razão social (`Flowoff Marketing e Assessoria Digital LTDA - CNPJ 43.376.355/0001-92`).

---

## ⟁ Tecnologias & Tracking

* **Framework:** Astro 5 (Static Site Generation / Islands architecture).
* **Design System:** Vanilla CSS com tokens (`tokens.css` e `review.css`) para máxima performance e fidelidade visual.
* **Tracking Oficial:** TikTok Pixel `D9SJPC3C77U97D5QGU0G` com Events API tipada e hashing SHA-256 para 10 eventos de funil.
