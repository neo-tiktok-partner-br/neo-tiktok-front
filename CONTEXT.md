<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# CONTEXT.md // NEO-TIKTOK-FRONT

> Contexto arquitetural, rotas da vitrine e H5 Minis Shell no domínio canônico `neotiktok.com`.

---

## ⟠ Propósito do Módulo

O `neo-tiktok-front` é a superfície web pública unificada e a camada **H5 Minis Shell / experiência preparada para WebView** para o ecossistema TikTok Partner da **neøflow**. Ele atende lojistas (Sellers), criadores (Creators), agências/marcas e operadores de tecnologia, além de conter a área autenticada do conector e experiências 9:16. SDK/bridge oficial TikTok Minis, qualification e runtime dentro do TikTok permanecem `NOT_PROVEN`.

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

### 📱 H5 Minis Shell / WebView-ready (9:16)
* **`/minis`:** Hub H5 de seleção das experiências 9:16.
* **`/minis/seller` & `/minis/seller/dashboard`:** Shell H5 para Lojistas, preparado para WebView, sem prova de Mini App nativo.
* **`/minis/creator`, `/minis/creator/catalog` & `/minis/creator/wallet`:** Shell H5 para Criadores, preparado para WebView, sem SDK/bridge oficial comprovado.
* **`/minis/series`:** Experiência H5 de micro-learning e edutainment. Checkout nativo dentro do TikTok permanece `NOT_PROVEN`.

---

## ⟁ Tecnologias, Layouts & Tracking

* **Framework:** Astro 5 (Static Site Generation).
* **Layouts:**
  * `BaseLayout.astro`: Vitrine institucional desktop/mobile responsiva.
  * `MiniLayout.astro`: Canvas 9:16 para H5 Minis Shell / WebView-ready (emulação em desktop e tela cheia com safe-areas em mobile). Não prova SDK/runtime TikTok Minis.
* **Design System:** Vanilla CSS com tokens (`tokens.css` e `review.css`) para máxima performance.
* **Tracking Oficial:** TikTok Pixel `D9SJPC3C77U97D5QGU0G`; `ViewContent`, `InitiateCheckout`, `Contact` e `ClickButton` suportam envio browser + server com o mesmo `event_id`. Na jornada UGC afiliada da Paulinha, a landing emite `ViewContent` com identificador editorial interno e o link externo emite `ClickButton`; ela nao emite `InitiateCheckout`, `AddToCart` ou `Purchase`, pois checkout, SKU de catalogo e pedido pertencem ao seller/TikTok Shop. A confirmacao operacional da Events API depende de deploy, Test Events e evidencia `Server & Browser` no Events Manager.
