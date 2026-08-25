# AGENTS.md

> **Project:** neøflow // Official TikTok Partners
> **Scope:** Shop · Creators · Marketing · Tech
> **Primary runtime:** Astro
> **Audience:** Development agents operating inside VS Code / repository workspaces
> **Status:** Canonical agent policy
> **Priority:** This file is operational instruction, not documentation-only.

---

## 0. PURPOSE

This file defines how any development agent must behave when working on the neøflow TikTok ecosystem.

The agent is expected to act as a senior product engineer working inside an existing branded system — not as a generic code generator.

The primary goals are:

1. preserve architecture and project coherence;
2. respect the neøflow visual system;
3. avoid accidental imitation of TikTok-owned interfaces;
4. ship production-quality Astro code;
5. protect credentials, partner data and commerce data;
6. prefer reusable primitives over one-off UI;
7. preserve explicit product decisions already made;
8. make small, traceable and reversible changes;
9. never invent business rules, API behavior or partner capabilities;
10. leave the repository better structured than it was found.

---

# 1. PROJECT IDENTITY

## 1.1 Canonical name

Use:

**neøflow // Official TikTok Partners**

Supporting descriptor:

**Shop. Creators. Marketing. Tech**

Preferred short forms in internal technical contexts:

- `neøflow`
- `neoflow`
- `TikTok Partner Ecosystem`
- `neøflow TikTok Shop Connector` when referring specifically to the connector/integration layer

Do not casually rename the product.

---

## 1.2 Brand proposition

Core statements may include:

- **Seu perfil. Seus interesses. Nosso negócio.**
- **não é programa de afiliados.**
- **não é prestação de serviços.**
- **não é marketing digital.**
- **É apenas o que gostamos de fazer.**
- **agência descentralizada**

These phrases are intentional positioning language.

Do not rewrite them unless the task explicitly requests copy changes.

---

# 2. SOURCE-OF-TRUTH ORDER

When instructions conflict, follow this order:

1. explicit user instruction in the current task;
2. this `AGENTS.md`;
3. `branding.md`;
4. project architecture / ADRs / technical documentation;
5. existing implementation patterns;
6. framework defaults;
7. agent preference.

Never replace an explicit project decision with a generic “best practice” without documenting why.

## 2.1 Approved platform baseline — 2026-08-13

The following decisions are current and must be preserved:

- `neo-tiktok-front` is the single canonical public entry for the ecosystem.
- Shop, Creators, Marketing and Tech are the four public territories.
- Partner Operations is the private coordination layer, not a fifth equivalent
  public territory.
- `/app` is the target authenticated shell driven by memberships, roles and
  capabilities.
- Public journeys start with intent qualification. TikTok OAuth is requested
  only when the selected journey requires a minimum authorization.
- Seller and Creator grants are isolated credential classes.
- `neo-content-dashboard` is transitional; useful capabilities move into
  `/app` only after contracts and parity exist.
- `neo-content-landing` is transitional; migration requires URL inventory,
  redirects, traffic evidence and rollback before retirement.
- The backend, asynchronous worker and creative engine remain sovereign nodes.

Canonical cross-repository references:

- `../flowoff-tiktok-control-plane/docs/PLATFORM_ARCHITECTURE_2026.md`
- `../flowoff-tiktok-control-plane/manifests/ecosystem-tiktok.json`
- `../flowoff-tiktok-control-plane/manifests/platform-journeys.json`

Current implementation increment:

- `/`, `/shop`, `/creators`, `/marketing`, `/tech`, `/legal/privacidade` and
  `/legal/termos` are implemented in the active branch/PR baseline.
- The four territory pages are intent entry surfaces, not authenticated
  dashboards and not claims that every TikTok capability is approved.
- Existing operator edits in `docs/perfil-neflow.md` and
  `docs/questionario-qualificacao.md` must remain untouched unless explicitly
  placed in scope.
- Production reviewer routes are `/login`, `/app` and `/app/orders` on
  `https://neotiktok.com`. Privacy and Terms live here as canonical public
  routes. Do not create a competing landing.
- The reviewer UI is limited to Global Shop Information
  (`seller.shop.info`), Shop Authorized Information
  (`seller.authorization.info`) and Order Information (`seller.order.info`).
  Do not add catalog, Finance, Fulfillment, Creator or LIVE screens.
- The reviewer account exists, but its password, session cookies, tokens and
  `shop_cipher` must never be written to Git or documentation.
- The canonical backend API configuration is exported in `src/config/api.ts` via
  `PUBLIC_API_BASE_URL` (default: `https://api.neoflowoff.agency`).
- The Seller OAuth connection point is `/sellers/conectar`, which routes exclusively
  to `${PUBLIC_API_BASE_URL}/oauth/tiktok-shop/authorize`. Never point UI buttons directly to external TikTok URLs.
- Any future frontend AI assistant must consume `POST /ai/chat` via backend proxy
  (Cloudflare AI Gateway) without embedding API keys, tokens or secrets in the client bundle.

---

# 3. BRANDING IS A TECHNICAL CONSTRAINT

The visual identity is not decorative.

It is part of the implementation contract.

Before creating or heavily modifying any UI, read:

```text
branding.md
```

If `branding.md` is missing, stop before a major visual implementation and report the missing source of truth.

For small maintenance changes, preserve the existing token system.

---

# 4. VISUAL DOCTRINE

Canonical principle:

> **TikTok-native. neøflow-owned.**

The application may feel native to the commerce / creator ecosystem, but it must remain unmistakably neøflow.

The goal is familiarity without imitation.

---

## 4.1 Core visual behavior

Default visual foundation:

- black / near-black backgrounds;
- crisp white typography;
- restrained neutral surfaces;
- coral/red accent for commerce/action;
- cyan accent for creators/connections;
- white for marketing clarity;
- Acid Green for proprietary neøflow technology/infrastructure.

Canonical proprietary green:

```css
#D7FE09
```

Never replace this with a visually similar green.

---

## 4.2 Semantic accent mapping

Prefer semantic color use:

```css
--color-shop: var(--neo-coral);
--color-creators: var(--neo-cyan);
--color-marketing: var(--neo-white);
--color-tech: var(--neo-acid);
```

The agent must not distribute all accents uniformly “for visual balance.”

Color communicates function.

---

## 4.3 Similarity boundary

Never build a screen that could plausibly be mistaken for an official TikTok product.

Do not clone:

- TikTok Seller Center page layouts;
- TikTok Shop dashboards;
- TikTok navigation structures;
- TikTok cards;
- TikTok icon sets;
- TikTok-specific graph layouts;
- TikTok buttons;
- official TikTok onboarding flows;
- official TikTok login or registration screens;
- official branded illustrations.

Do not perform screenshot-to-code reproduction of TikTok-owned interfaces unless explicitly requested for a private analytical prototype, and even then isolate it from production code.

---

## 4.4 Originality test

Before completing a major visual screen, mentally apply:

### Logo removal test

If every logo vanished, would the interface still look like NEØFLOW?

Expected answer:

**yes**

### Screenshot confusion test

Could a third party reasonably interpret the screen as an official TikTok product?

Expected answer:

**no**

### Color removal test

If coral and cyan disappear, does the layout retain its own structure and hierarchy?

Expected answer:

**yes**

If any answer fails, redesign before finalizing.

---

# 5. ASTRO IMPLEMENTATION POLICY

Astro is the default frontend framework.

Prefer Astro-native solutions before adding abstractions.

---

## 5.1 Preferred structure

Use a structure similar to:

```text
src/
├── components/
│   ├── brand/
│   ├── common/
│   ├── commerce/
│   ├── creators/
│   ├── marketing/
│   ├── tech/
│   └── ui/
├── layouts/
├── pages/
├── styles/
│   ├── global.css
│   ├── tokens.css
│   ├── motion.css
│   └── utilities.css
├── lib/
├── services/
├── data/
├── types/
└── config/
```

Do not create folders merely to imitate this example.

Preserve an existing repository structure when it is already coherent.

---

## 5.2 Astro-first rule

Prefer:

- `.astro` components;
- static rendering;
- server rendering where required;
- scoped styles for isolated component concerns;
- global tokens for shared identity;
- minimal client-side JavaScript.

Do not introduce React/Vue/Svelte only because a component has interaction.

Use an island only when actual client runtime behavior is needed.

---

## 5.3 Hydration policy

Before adding:

```astro
client:load
client:idle
client:visible
client:media
client:only
```

ask:

> Does this feature truly require browser-side state or runtime behavior?

If not, keep it server-rendered/static.

Preferred order when hydration is needed:

1. `client:visible`
2. `client:idle`
3. `client:media`
4. `client:load`
5. `client:only`

Use the least aggressive hydration strategy that satisfies the interaction.

---

# 6. CSS POLICY

Prefer native CSS and design tokens.

Do not add Tailwind merely for convenience.

If Tailwind already exists, do not remove it without explicit approval, but continue to preserve canonical brand tokens.

---

## 6.1 Token-first styling

Do not scatter literal brand colors.

Bad:

```css
color: #d7fe09;
```

Preferred:

```css
color: var(--neo-acid);
```

Bad:

```css
background: #fe2c55;
```

Preferred:

```css
background: var(--color-shop);
```

Exceptions:

- token definitions themselves;
- one-off debugging;
- external SVG artwork that cannot consume CSS variables.

---

## 6.2 Avoid style drift

Before adding a new:

- color;
- radius;
- shadow;
- font size;
- spacing value;
- animation timing;
- border;
- breakpoint;

check whether an existing token already expresses it.

Do not create near-duplicates such as:

```css
--radius-card: 15px;
--radius-medium: 16px;
--radius-panel: 17px;
```

Use one semantic system.

---

# 7. TYPOGRAPHY

Primary display family:

```text
Space Grotesk
```

Primary body family:

```text
Inter
```

Technical / machine / data labels may use:

```text
IBM Plex Mono
```

When unavailable, use the fallback chain defined by the design system.

Do not add another font family without explicit justification.

---

## 8. COMPONENT DESIGN

Every reusable component should have:

1. a clear responsibility;
2. a predictable API;
3. semantic markup;
4. keyboard-safe interaction;
5. responsive behavior;
6. no unnecessary global state;
7. no embedded business secrets;
8. no duplicated brand tokens.

---

## 8.1 Component boundaries

Create a component when at least one is true:

- it is used more than once;
- it has meaningful internal behavior;
- it owns a recognizable visual pattern;
- it represents a domain concept;
- separating it materially improves readability.

Do not componentize every wrapper `<div>`.

---

## 8.2 Preferred component names

Good:

```text
CreatorCard.astro
ShopMetric.astro
PartnerBadge.astro
CapabilityCard.astro
CommerceChart.astro
IntegrationStatus.astro
TechStackCard.astro
```

Avoid vague names:

```text
Box.astro
Thing.astro
Content2.astro
SectionNew.astro
CardFinal.astro
```

---

## 9. DOMAIN BOUNDARIES

The product has four visible capability domains:

```text
Shop
Creators
Marketing
Tech
```

Do not collapse these into one generic “services” namespace.

The UI may combine them visually, but business logic should remain explicit.

---

## 9.1 Shop

Possible concerns:

- sellers;
- shops;
- products;
- catalog;
- inventory;
- orders;
- logistics;
- fulfillment;
- pricing;
- promotions;
- finance-related seller views;
- commerce events.

---

## 9.2 Creators

Possible concerns:

- creator discovery;
- creator profiles;
- creator-shop relationships;
- campaign participation;
- content;
- attribution;
- commissions;
- performance;
- creator events.

---

## 9.3 Marketing

Possible concerns:

- campaign orchestration;
- content;
- UGC;
- reporting;
- analytics;
- media;
- creative intelligence;
- audience signals.

---

## 9.4 Tech

Possible concerns:

- API integrations;
- OAuth;
- webhooks;
- SDK;
- internal services;
- queues;
- event processing;
- data infrastructure;
- automations;
- Agents;
- partner tooling.

---

# 10. TIKTOK INTEGRATION POLICY

Treat TikTok APIs as external infrastructure.

Never infer an endpoint, field, scope or API capability from UI screenshots or memory.

When changing integration code:

1. inspect current repository implementation;
2. inspect current project documentation;
3. verify version assumptions;
4. preserve signing requirements;
5. preserve OAuth semantics;
6. preserve refresh-token behavior;
7. preserve webhook verification;
8. preserve idempotency.

Do not silently change API versions.

---

# 11. KNOWN PROJECT CONTEXT

Where still applicable in the repository, preserve these architectural realities:

- TikTok Shop Open API integration;
- OAuth;
- webhooks;
- inventory;
- events;
- shops / sellers;
- multi-shop token refresh;
- partner-oriented platform behavior;
- NEØ-owned middleware / connector logic.

Do not expose internal integration complexity directly to end users unless it helps the task.

---

# 12. API CLIENT RULES

External API access must live behind a service or client boundary.

Preferred:

```text
src/services/tiktok/
src/lib/tiktok/
```

Avoid direct API calls scattered through UI components.

Bad:

```astro
---
const result = await fetch("https://...");
---
```

inside multiple pages.

Preferred:

```ts
import { getSellerProducts } from "@/services/tiktok/products";
```

---

## 12.1 API client responsibilities

A TikTok client/service should centrally handle as appropriate:

- base URL;
- authentication;
- signatures;
- headers;
- API version;
- retries;
- timeout;
- typed responses;
- errors;
- rate limits;
- observability.

---

# 13. SECRETS POLICY

Never commit:

- access tokens;
- refresh tokens;
- client secrets;
- app secrets;
- signing secrets;
- API keys;
- webhook secrets;
- cookies;
- session tokens;
- database credentials.

Use environment variables.

Example:

```env
TIKTOK_APP_KEY=
TIKTOK_APP_SECRET=
TIKTOK_REDIRECT_URI=
```

Never place real secrets in:

```text
README
AGENTS.md
branding.md
fixtures
screenshots
example code
client-side JavaScript
```

---

# 14. PUBLIC VS PRIVATE ENV

In Astro, anything intended for browser use must be consciously public.

Treat public environment variables as non-secret.

Never expose a server secret via a client-side import.

Before using any environment variable in hydrated code, verify that exposure is intentional.

---

# 15. SECURITY BASELINE

For all server-side features:

- validate input;
- normalize input;
- escape output when context requires it;
- authorize before data access;
- avoid trusting client identifiers;
- avoid leaking upstream API errors;
- set timeouts;
- handle replay/idempotency where relevant;
- never trust webhook payloads before verification.

Security is not optional because the project handles partner, creator, seller and commerce data.

---

# 16. WEBHOOK POLICY

Webhook handlers must be:

- authenticated/verified according to provider rules;
- idempotent;
- fast;
- observable;
- replay-safe;
- tolerant of duplicate delivery.

A webhook endpoint should not perform long, synchronous business workflows when a durable asynchronous path exists.

Prefer:

```text
receive
→ verify
→ normalize
→ persist/dedupe
→ enqueue/publish
→ acknowledge
```

---

# 17. OAUTH POLICY

Do not improvise OAuth.

Preserve:

- `state`;
- redirect URI constraints;
- authorization-code handling;
- token exchange;
- refresh token;
- expiry tracking;
- shop/account binding;
- revocation handling.

Sensitive tokens must remain server-side.

---

# 18. DATA MODEL POLICY

Prefer explicit domain models over generic untyped blobs.

Bad:

```ts
type Data = any;
```

Preferred:

```ts
interface Shop {
  id: string;
  name: string;
  region: string;
}
```

Avoid adding fields merely because they appeared in one external response.

Normalize external API payloads at the boundary.

---

# 19. TYPESCRIPT

Use TypeScript for application logic.

Avoid `any`.

When external API shape is uncertain, use:

```ts
unknown
```

then validate/narrow.

Do not suppress type failures just to make a build pass.

Avoid:

```ts
// @ts-ignore
```

unless the reason is documented and no safe alternative exists.

---

# 20. VALIDATION

Validate any data crossing a trust boundary.

Trust boundaries include:

- forms;
- URL params;
- query params;
- webhooks;
- external APIs;
- database JSON;
- browser storage;
- third-party SDK payloads.

Use the validation library already present in the repository.

Do not add a second schema library without reason.

---

# 21. ACCESSIBILITY

Minimum standard:

- semantic HTML;
- labeled controls;
- keyboard navigation;
- visible focus;
- meaningful alt text;
- sufficient contrast;
- no critical information encoded only by color;
- respect `prefers-reduced-motion`.

Avoid clickable `<div>` elements.

Use actual:

```html
<button>
<a>
<input>
```

where semantically correct.

---

# 22. RESPONSIVE BEHAVIOR

Do not treat mobile as a shrunk desktop.

For every major screen verify:

- 320px;
- 375px;
- 768px;
- 1024px;
- 1440px+.

Prioritize content hierarchy.

On small screens:

- reduce decorative density;
- simplify multi-column layouts;
- preserve primary actions;
- preserve essential data;
- avoid horizontal scrolling unless the component is intentionally scrollable.

---

# 23. MOTION

Motion should indicate:

- hierarchy;
- cause/effect;
- state change;
- focus;
- progression.

Avoid motion purely because “TikTok feels dynamic.”

No excessive:

- neon pulsing;
- parallax;
- infinite gradients;
- bouncing UI;
- 3D spinning cards;
- scroll-jacking.

neøflow should feel alive, not noisy.

---

# 24. ICONOGRAPHY

Use one coherent icon family or a project-owned icon system.

Do not mix:

- Lucide;
- Heroicons;
- Material;
- Font Awesome;
- random SVG packs;

on the same screen without a deliberate system.

Do not recreate TikTok proprietary icons.

---

# 25. IMAGES AND CREATOR CONTENT

Use imagery that reinforces:

- creators;
- sellers;
- products;
- live commerce;
- dashboards;
- content creation;
- community;
- technology.

Avoid generic corporate stock photography.

Any demo creator, store, order, GMV or performance data must clearly be mock/demo unless it is real authorized data.

---

# 26. METRICS AND CLAIMS

Never invent production statistics.

Do not publish claims such as:

```text
+2.500 partners
R$ 1.2B GMV
850M views
```

unless they are explicitly confirmed as real.

For prototypes use clearly artificial demo values and keep them out of public production content unless approved.

---

# 27. OFFICIAL-PARTNER LANGUAGE

The codebase may contain approved partner terminology.

Do not escalate wording from:

```text
partner
integration
official partner
technology partner
```

to claims such as:

```text
owned by TikTok
TikTok official platform
exclusive TikTok technology
TikTok-certified software
```

unless that exact claim has been validated for use.

Visual proximity does not imply legal ownership or endorsement.

---

# 28. LOGO POLICY

TikTok and other third-party marks are third-party assets.

Never:

- distort them;
- recolor arbitrarily;
- merge them into the neøflow logo;
- create a hybrid neøflow/TikTok trademark;
- imply co-ownership.

neøflow identity must remain independently recognizable.

---

# 29. COPY POLICY

Prefer concise, direct language.

UI copy should avoid:

- generic agency jargon;
- exaggerated AI claims;
- empty innovation language;
- fake urgency;
- “revolutionary” filler.

Prefer:

```text
Conectar loja
Autorizar shop
Adicionar creator
Sincronizar catálogo
Ver eventos
Gerenciar integração
```

over:

```text
Desbloqueie o poder ilimitado da nova economia digital
```

---

# 30. AGENT BEHAVIOR BEFORE EDITING

Before modifying code, the agent should:

1. inspect relevant files;
2. understand the local architecture;
3. identify existing reusable primitives;
4. inspect current types;
5. inspect related tests;
6. inspect config and environment assumptions;
7. identify whether the change affects API, UI, data, auth or infrastructure;
8. make the smallest coherent plan.

Do not begin a broad rewrite after reading one file.

---

# 31. CHANGE SCOPE

Prefer surgical changes.

Do not opportunistically refactor unrelated modules while implementing a focused request.

A refactor is allowed when it is necessary to:

- prevent duplication;
- remove a blocking architectural defect;
- safely implement the requested feature.

If the refactor expands scope materially, report it.

---

# 32. FILE CREATION POLICY

Before creating a new file, ask internally:

> Does an appropriate file/module already exist?

Avoid repository clutter.

Do not generate:

```text
utils2.ts
helpers-new.ts
final.css
final-final.css
new-home.astro
component-v2.astro
```

Use durable names.

---

# 33. COMMENTS

Comments should explain **why**, not narrate obvious syntax.

Bad:

```ts
// Increment count
count++;
```

Good:

```ts
// TikTok may retry webhook delivery; persist before acknowledging
// so the idempotency key survives process restarts.
```

---

# 34. ERROR HANDLING

User-facing errors must be understandable.

Internal errors should retain enough context for debugging.

Do not expose:

- stack traces;
- tokens;
- secrets;
- raw partner API responses;
- internal IDs unnecessarily.

Preferred server pattern:

```text
log detailed internal context
+
return sanitized external response
```

---

# 35. LOGGING

Logs should answer:

- what happened;
- where;
- for which safe entity identifier;
- how long it took;
- whether retry is possible.

Never log secrets.

Avoid logging complete third-party payloads in production unless explicitly scrubbed.

---

# 36. OBSERVABILITY

For integration workflows, prefer structured events.

Examples:

```text
tiktok.oauth.started
tiktok.oauth.completed
tiktok.token.refreshed
tiktok.webhook.received
tiktok.webhook.duplicate
tiktok.shop.synced
tiktok.product.sync.failed
```

Use naming already established in the repository when present.

---

# 37. PERFORMANCE

Prioritize:

- minimal JS;
- Astro SSR/static output;
- optimized images;
- deferred non-critical media;
- stable layout;
- low hydration cost;
- cacheable reads where safe.

Do not optimize by guessing.

Measure when performance is the reason for a change.

---

# 38. IMAGE HANDLING

Use Astro image tooling when appropriate.

Always provide width/height or otherwise prevent layout shift.

Do not ship huge source images to render tiny cards.

Prefer modern formats where the deployment stack supports them.

---

# 39. SEO / METADATA

Public pages should include intentionally set:

- `<title>`;
- meta description;
- canonical URL where applicable;
- Open Graph metadata;
- social preview metadata;
- semantic heading hierarchy.

Do not keyword-stuff TikTok terminology.

---

# 40. NO DARK PATTERNS

Do not build:

- misleading CTAs;
- disguised ads;
- fake notifications;
- forced continuity;
- deceptive countdowns;
- hidden opt-ins;
- fake creator metrics;
- fake transaction events.

Commerce trust matters more than short-term conversion tricks.

---

# 41. TESTING POLICY

Before marking work complete, run the relevant available checks.

Possible examples:

```bash
pnpm check
pnpm lint
pnpm test
pnpm build
```

Use the repository's actual scripts.

Do not invent commands.

If a test cannot run, state why.

---

# 42. ASTRO VALIDATION

For significant Astro UI changes, check:

- Astro compilation;
- TypeScript;
- route rendering;
- responsive layout;
- hydration behavior;
- broken imports;
- missing assets;
- accessibility basics.

A page rendering visually is not enough.

---

# 43. DEFINITION OF DONE

A task is done only when applicable items below are true:

1. requested behavior exists;
2. build passes;
3. relevant tests pass;
4. no TypeScript workaround was introduced without reason;
5. responsive states are acceptable;
6. accessibility basics are satisfied;
7. brand tokens are respected;
8. no TikTok interface was directly copied;
9. no secrets were introduced;
10. API boundaries remain coherent;
11. errors are handled;
12. dead code is removed;
13. docs/config are updated if behavior changed;
14. the agent can summarize exactly what changed.

---

# 44. QUALITY GATE FOR VISUAL WORK

Before completing a new major visual surface, verify:

### Identity

- [ ] looks like neøflow;
- [ ] uses approved tokens;
- [ ] Acid Green remains a signature, not wallpaper;
- [ ] coral/cyan have semantic purpose;
- [ ] typography follows the system.

### Originality

- [ ] no cloned TikTok layout;
- [ ] no cloned TikTok component;
- [ ] no cloned TikTok illustration;
- [ ] no misleading official-product appearance;
- [ ] interface remains identifiable without logos.

### Product

- [ ] hierarchy is obvious;
- [ ] primary action is obvious;
- [ ] mobile behavior is deliberate;
- [ ] interaction is understandable.

---

# 45. QUALITY GATE FOR INTEGRATION WORK

Before completing TikTok-related backend/integration code:

- [ ] endpoint/version verified;
- [ ] auth preserved;
- [ ] token expiry handled;
- [ ] refresh behavior preserved;
- [ ] webhook signature/verification preserved;
- [ ] idempotency considered;
- [ ] retries bounded;
- [ ] errors sanitized;
- [ ] secrets server-side only;
- [ ] external payload normalized;
- [ ] logs scrubbed;
- [ ] tests or reproducible validation performed.

---

# 46. PROHIBITED SHORTCUTS

Do not:

- disable lint rules to ship faster;
- weaken TypeScript globally;
- disable certificate validation;
- hardcode credentials;
- bypass auth temporarily in production code;
- trust client-side role values;
- store secrets in localStorage;
- clone official TikTok screens;
- fabricate partner data;
- add libraries without checking existing dependencies;
- rewrite architecture without necessity;
- replace working code solely to match agent preference.

---

# 47. DEPENDENCY POLICY

Before adding a dependency:

1. check whether the platform or existing code already solves it;
2. check current dependencies;
3. evaluate bundle/runtime impact;
4. confirm maintenance quality;
5. avoid overlapping libraries.

Do not add a package for trivial functionality.

---

# 48. GIT HYGIENE

Keep changes reviewable.

Prefer coherent commits.

Never commit:

- `.env`;
- tokens;
- build artifacts unless project requires them;
- local IDE state;
- debug dumps;
- private API captures;
- sensitive screenshots.

Do not force-push or rewrite shared history unless explicitly instructed.

---

# 49. VS CODE AGENT WORKFLOW

For each task, use this working loop:

```text
READ
↓
MAP
↓
PLAN
↓
IMPLEMENT
↓
VALIDATE
↓
REPORT
```

### READ

Inspect the relevant source and project rules.

### MAP

Identify:

- affected modules;
- data flow;
- component dependencies;
- external integration boundaries.

### PLAN

Choose the smallest coherent implementation.

### IMPLEMENT

Change code without unrelated churn.

### VALIDATE

Run real repository checks.

### REPORT

State:

- files changed;
- behavior changed;
- validation performed;
- remaining risk/blocker.

---

# 50. WHEN TO STOP AND ASK

Stop instead of guessing when the task requires:

- a missing secret;
- an unknown production endpoint;
- an irreversible migration;
- destructive data modification;
- legal/partner wording not already approved;
- unclear account/shop ownership;
- uncertain permission scope;
- a major product decision with multiple valid directions.

Ask one precise question.

Do not ask for clarification when repository inspection can answer it.

---

# 51. WHEN NOT TO ASK

Do not block on trivial choices.

The agent should independently choose reasonable implementation details such as:

- local variable names;
- internal component split;
- safe semantic HTML;
- using an existing token;
- extracting repeated code;
- selecting the least aggressive Astro hydration directive.

---

# 52. MIGRATIONS

Database migrations must be:

- explicit;
- reversible when practical;
- safe for existing data;
- reviewed for nullability/defaults;
- separate from unrelated UI changes.

Never delete or rename production columns casually.

For destructive changes, stop and surface the risk.

---

# 53. MOCKS / FIXTURES

Mocks must be clearly synthetic.

Never use production:

- tokens;
- creator personal data;
- customer emails;
- order details;
- seller financial data.

Fixtures should be deterministic where possible.

---

# 54. DEVELOPMENT DATA

Demo data should use fictional entities.

Good:

```text
Studio Glow
Creator Demo
Loja Horizonte
Produto Exemplo
```

Do not fabricate an endorsement from a real creator or seller.

---

# 55. FEATURE FLAGS

Use feature flags when a feature:

- has partial rollout;
- depends on partner approval;
- changes external API behavior;
- carries operational risk.

Do not use flags for permanent architectural indecision.

---

# 56. EMPTY / LOADING / ERROR STATES

Every data-driven screen must consider:

```text
loading
empty
success
partial
error
unauthorized
```

Do not design only the ideal populated state.

---

# 57. COMMERCE DATA PRESENTATION

Currency:

- format using locale-aware utilities;
- never concatenate currency strings manually when avoidable.

For Brazil prefer:

```text
pt-BR
BRL
```

when the domain context requires it.

Dates should also use explicit locale/timezone semantics.

---

# 58. INTERNATIONALIZATION

Do not bake user-visible copy deep inside logic if localization is expected.

Current primary language may be Portuguese, but domain naming and architecture should not make future locale support impossible.

Never translate API field names.

---

# 59. PRIVACY

Minimize exposure of:

- personal creator information;
- seller contact details;
- commerce history;
- financial data;
- internal IDs.

Only display data necessary for the feature.

Do not use production personal information in visual demos.

---

# 60. AGENTIC / AI FEATURES

AI and agent features must have explicit boundaries.

An agent must never silently gain permissions beyond the user action.

Separate:

```text
observe
recommend
prepare
execute
```

Execution should be intentional and auditable.

For commerce-affecting actions, preserve confirmation/authorization requirements.

---

# 61. AUTOMATION POLICY

Automations should be idempotent and observable.

Every meaningful automated workflow should have:

- input;
- trigger;
- current state;
- output;
- error state;
- retry semantics;
- ownership.

Avoid “magic” background behavior nobody can inspect.

---

# 62. DESIGN SYSTEM EVOLUTION

If implementation reveals a missing design primitive:

1. determine whether it is reusable;
2. add a token/component intentionally;
3. update `branding.md` if it changes the canonical system;
4. avoid creating a local visual exception unless necessary.

The codebase and `branding.md` must not drift apart.

---

# 63. REFACTORING BRAND TOKENS

When updating a canonical token:

1. change the token source;
2. search usages;
3. verify semantic aliases;
4. inspect visual regressions;
5. avoid replacing literals blindly if a literal has unrelated semantic meaning.

---

# 64. COMMENTS ON TIKTOK REFERENCES

References from TikTok-owned products may be used to understand:

- ecosystem expectations;
- information density;
- commerce conventions;
- interaction familiarity;
- creator behavior.

They must not be used as pixel templates.

The correct thought process is:

```text
understand the convention
→ abstract the principle
→ redesign in neøflow language
```

Never:

```text
screenshot
→ copy
→ recolor
→ ship
```

---

# 65. PRODUCT CHARACTER

neøflow should feel:

- precise;
- fast;
- infrastructure-aware;
- creator-native;
- commerce-native;
- technically credible;
- understated rather than theatrical.

Avoid generic:

- cyberpunk dashboards;
- neon overload;
- glass everywhere;
- blockchain clichés;
- floating 3D cubes without meaning;
- sci-fi terminal aesthetics.

---

# 66. ACID GREEN RULE

`#D7FE09` is proprietary visual punctuation.

Use it for:

- technology;
- active system status;
- infrastructure;
- verified internal capability;
- selected high-value emphasis;
- NEØ-owned differentiation.

Do not use it as the default CTA color for every action.

Its scarcity creates ownership.

---

# 67. PRIMARY ACTION RULE

Commerce/action flows may use coral/red.

Creator/discovery interactions may use cyan.

Technology/system actions may use Acid Green where semantically justified.

Neutral actions should remain white/gray.

Do not color every button.

---

# 68. CONTENT HIERARCHY

Prefer:

```text
message
→ evidence
→ action
```

Avoid:

```text
decorative header
→ four taglines
→ six badges
→ animation
→ unclear CTA
```

A screen should communicate its purpose within seconds.

---

# 69. DASHBOARD RULE

Dashboards exist to answer questions, not display as many charts as possible.

Every metric must have a reason.

Ask:

> What decision does this help the operator make?

If none, remove or demote it.

---

# 70. CHARTS

Charts should:

- have labels;
- have meaningful units;
- distinguish series without relying only on hue;
- avoid unnecessary 3D;
- avoid decorative chart junk;
- show empty states.

Use the existing chart library if one exists.

Do not add a chart library for one tiny visualization if CSS/SVG is sufficient.

---

# 71. TABLES

Tables should support their operational purpose.

Consider:

- sticky headers;
- sorting;
- filtering;
- pagination;
- responsive fallbacks;
- row actions;
- bulk actions only when justified.

Do not turn every mobile table into unreadable horizontal scrolling.

---

# 72. FORMS

Forms should:

- validate close to the field;
- preserve input after recoverable errors;
- clearly distinguish optional/required;
- avoid asking for data already known;
- disable submission only when necessary;
- prevent duplicate destructive actions.

---

# 73. NETWORK FAILURE

External integrations fail.

Handle:

- timeout;
- 429;
- 401/403;
- malformed upstream response;
- temporary 5xx;
- expired token;
- disconnected shop.

Do not display all of these as generic:

```text
Algo deu errado
```

Provide useful next actions without leaking internals.

---

# 74. RATE LIMITS

Respect provider limits.

Never implement infinite immediate retry loops.

Use bounded retry/backoff where appropriate.

For bulk operations, prefer controlled concurrency.

---

# 75. CACHE

Cache only when semantics permit it.

Do not cache:

- sensitive session-specific information;
- rapidly changing authorization state;
- token refresh results incorrectly;
- mutable commerce operations as if static.

Explicitly document important cache assumptions.

---

# 76. IDE AGENT SAFETY

When operating autonomously inside VS Code:

- do not run destructive shell commands without need;
- do not delete broad directories casually;
- do not rewrite `.env`;
- do not change deployment settings unless required;
- do not install global packages;
- do not modify unrelated repositories;
- do not expose secrets in terminal output.

Avoid:

```bash
rm -rf
git reset --hard
git clean -fdx
```

unless explicitly authorized and necessary.

---

# 77. OUTPUT EXPECTATION

After completing work, report concisely:

```text
Changed
- ...

Validated
- ...

Notes
- ...
```

Do not produce a long essay after routine code changes.

If there is a blocker, state it clearly.

---

# 78. CANONICAL DEVELOPMENT PRINCIPLE

When choosing between:

```text
fast but disposable
```

and:

```text
small, clean and reusable
```

choose the second.

When choosing between:

```text
visually similar to TikTok
```

and:

```text
familiar to TikTok users but unmistakably neøflow
```

choose the second.

When choosing between:

```text
more code
```

and:

```text
clearer architecture
```

choose clearer architecture.

---

# 79. FINAL AGENT CHECK

Before ending any non-trivial task, ask:

```text
Did I preserve the architecture?
Did I preserve the brand?
Did I avoid copying TikTok?
Did I protect secrets and partner data?
Did I validate what I changed?
Did I introduce unnecessary dependencies?
Did I leave unexplained technical debt?
```

If any answer is **no**, the task is not finished.

---

# 80. ONE-SENTENCE OPERATING RULE

> **Build as if neøflow belongs naturally inside the TikTok commerce ecosystem, while ensuring every line of code, every interaction and every visual decision remains technically and unmistakably ours.**
