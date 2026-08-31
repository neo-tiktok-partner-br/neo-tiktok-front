<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# CONTEXT.md // NEO-TIKTOK-FRONT

> Contexto arquitetural, rotas da vitrine e camada TikTok Minis no domínio canônico `neotiktok.com`.

---

## ⟠ Propósito do Módulo

O `neo-tiktok-front` é a superfície web pública unificada e a camada de **TikTok Minis (9:16 In-App)** para o ecossistema TikTok Partner da **neøflow**. Ele atende lojistas (Sellers), criadores (Creators), agências/marcas e operadores de tecnologia, além de conter a área autenticada do conector e as experiências 9:16 in-app.

---

## ⨷ Rotas Implementadas & Territórios (20 Rotas Ativas)

### 🌐 Camada Web Institucional
* **`/` (Início / Portal Geral):** Apresentação da marca neøflow, proposta de valor da parceria TikTok One e direcionamento de intenção.
* **`/shop`:** One-Pager oficial com os 4 Pilares de Commerce Fricção-Zero e os infográficos de infraestrutura de vendas e pagamentos 2026.
* **`/sellers/conectar`:** Gateway de intenção e início do fluxo OAuth oficial TikTok Shop.
* **`/creators` & `/creators/paulinha`:** Hub para criadores de conteúdo e afiliados, detalhando briefs e curadoria NΞØ Gatekeeper.
* **`/marketing`:** Proposta de valor para marcas e times de marketing (Brand Orders, criativos em escala).
* **`/tech`:** Arquitetura de APIs, segurança de dados e integrações para times técnicos.
* **`/login` & `/app` (`/app/orders`):** Shell autenticado do conector e interface homologada para o App Review do TikTok Shop.
* **`/legal/privacidade` & `/legal/termos`:** Conformidade legal LGPD com identificação da razão social (`Flowoff Marketing e Assessoria Digital LTDA - CNPJ 43.376.355/0001-92`).

### 📱 Camada TikTok Minis (9:16 In-App)
* **`/minis`:** Hub principal de seleção de Mini Apps nativos.
* **`/minis/seller` & `/minis/seller/dashboard`:** Mini App para Lojistas (conexão em 1 toque, métricas de DM e catálogo em tempo real).
* **`/minis/creator`, `/minis/creator/catalog` & `/minis/creator/wallet`:** Mini Hub de Criadores (produtos qualificados, gerador de link de DM e extrato de split).
* **`/minis/series`:** Experiência in-app de micro-learning e edutainment com checkout nativo 1-clique (FaceID / Pix).

---

## ⟁ Tecnologias, Layouts & Tracking

* **Framework:** Astro 5 (Static Site Generation).
* **Layouts:**
  * `BaseLayout.astro`: Vitrine institucional desktop/mobile responsiva.
  * `MiniLayout.astro`: Canvas 9:16 para TikTok Minis (emulação em desktop e tela cheia com safe-areas em mobile).
* **Design System:** Vanilla CSS com tokens (`tokens.css` e `review.css`) para máxima performance.
* **Tracking Oficial:** TikTok Pixel `D9SJPC3C77U97D5QGU0G` com Events API tipada e hashing SHA-256 para eventos de funil.
