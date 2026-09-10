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

### 📱 Camada In-App Minis 9:16 (In-Shell Navigation)
* **`/` (Home In-App 9:16):** Shell nativo mobile com navegação por abas (`#shop`, `#creators`, `#partners`, `#tech`) via DOM/hash interno sem reload de página, garantindo compatibilidade total com o TikTok In-App WebView.
* **`/home`:** Versão clássica desktop da vitrine institucional.
* **`/shop`, `/creators`, `/marketing`, `/tech`:** Rotas canônicas públicas de intenção e qualificação.
* **`/sellers/conectar`:** Gateway de intenção que dispara o OAuth Seller oficial (`/oauth/tiktok-shop/authorize`).
* **`/legal/privacidade` & `/legal/termos`:** Conformidade legal LGPD com identificação da razão social (`Flowoff Marketing e Assessoria Digital LTDA - CNPJ 43.376.355/0001-92`).
* **`/login` & `/app` (`/app/orders`):** Shell autenticado do conector e interface homologada para o App Review do TikTok Shop.

> **DIRETIVA DE FREEZE (SOB ANÁLISE):** A camada de apresentação visual pública está sob análise do operador. Não modificar `MobilePublicShell.astro` ou layouts visuais públicos.

---

## ⟁ Tecnologias, Layouts & Tracking

* **Framework:** Astro 5 (Static Site Generation).
* **Navegação:** In-Shell DOM/hash tabs para WebView TikTok. Service Worker (`sw.js`) expurgado permanentemente.
* **Layouts:**
  * `BaseLayout.astro`: Vitrine institucional desktop/mobile responsiva.
  * `MobilePublicShell.astro`: Canvas 9:16 para navegação in-app móvel sem reload.
* **Design System:** Vanilla CSS com tokens (`tokens.css` e `review.css`) para máxima performance.
* **Tracking Oficial:** TikTok Pixel `D9SJPC3C77U97D5QGU0G`; `ViewContent`, `InitiateCheckout`, `Contact` e `ClickButton` suportam envio browser + server com o mesmo `event_id`.

