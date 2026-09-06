# Design QA — Mobile/PWA public experience

## Comparison target

- Source visual truth:
  - `/Users/nettomello/Downloads/preview/ChatGPT Image 5 de set. de 2026, 19_47_09 (1).png` — Início
  - `/Users/nettomello/Downloads/preview/ChatGPT Image 5 de set. de 2026, 19_47_09 (2).png` — Shop
  - `/Users/nettomello/Downloads/preview/ChatGPT Image 5 de set. de 2026, 19_47_10 (3).png` — Creators
  - `/Users/nettomello/Downloads/preview/ChatGPT Image 5 de set. de 2026, 19_47_10 (4).png` — Agências
  - `/Users/nettomello/Downloads/preview/ChatGPT Image 5 de set. de 2026, 19_47_10 (5).png` — Tech
- Browser-rendered implementation: `http://localhost:4322/` and the public routes `/shop`, `/creators`, `/marketing`, `/tech`.
- Primary viewport: 390 × 844 CSS px, device scale factor 1.
- Responsive viewports: 320 × 568, 360 × 800, 430 × 932, 768 × 1024 and 1440 × 900 CSS px.
- Source pixels: 941 × 1672 for each reference, 9:16 ratio.
- Implementation pixels: equal to the CSS viewport because screenshots use CSS-pixel scale.
- Density normalization: paired comparisons preserve each full image and normalize both sides to 836 px high. The source is 470 × 836 and the 390 × 844 implementation becomes 386 × 836; the width difference is expected because the supplied reference is 9:16 while the requested device viewports are taller.
- State: dark theme, unauthenticated public surface, each bottom tab active in turn.

## Full-view comparison evidence

- Início: `/Users/nettomello/.codex/visualizations/2026/09/05/01a073d4-d8a6-7440-8eea-367c0f4504f3/neo-tiktok-front-mobile/compare-home.png`
- Shop: `/Users/nettomello/.codex/visualizations/2026/09/05/01a073d4-d8a6-7440-8eea-367c0f4504f3/neo-tiktok-front-mobile/compare-shop.png`
- Creators: `/Users/nettomello/.codex/visualizations/2026/09/05/01a073d4-d8a6-7440-8eea-367c0f4504f3/neo-tiktok-front-mobile/compare-creators.png`
- Agências: `/Users/nettomello/.codex/visualizations/2026/09/05/01a073d4-d8a6-7440-8eea-367c0f4504f3/neo-tiktok-front-mobile/compare-agencias.png`
- Tech: `/Users/nettomello/.codex/visualizations/2026/09/05/01a073d4-d8a6-7440-8eea-367c0f4504f3/neo-tiktok-front-mobile/compare-tech.png`
- Combined contact sheet: `/Users/nettomello/.codex/visualizations/2026/09/05/01a073d4-d8a6-7440-8eea-367c0f4504f3/neo-tiktok-front-mobile/design-qa-contact-sheet.png`

The paired images were opened together and reviewed for hierarchy, typography, spacing, palette, card treatment, persistent navigation and above-the-fold decision density.

## Focused evidence

- `neo-tiktok-front-mobile/route-shop-320x568-final.png` verifies the smallest viewport and the CTA/tab-bar boundary.
- `neo-tiktok-front-mobile/home-390x844-pass2.png` verifies the home cards and footer boundary.
- `neo-tiktok-front-mobile/route-shop-desktop-1440x900.png` and `neo-tiktok-front-mobile/route-creators-desktop-1440x900.png` verify that the institutional desktop surfaces remain active.
- Separate crops were not required after the full-size pairs because the typography, nav icons, borders and CTA labels remain readable at original scale in each paired image.

## Required fidelity surfaces

- Fonts and typography: Space Grotesk, Inter and IBM Plex Mono follow the existing token system. Display hierarchy, optical weight and wrapping match the visual direction. Long unsupported source claims were intentionally replaced with shorter factual copy.
- Spacing and layout rhythm: compact top bar, short hero, operational cards, one primary CTA and persistent five-tab navigation preserve the source hierarchy. At 320 × 568, secondary descriptions collapse so the decision and CTA remain in one viewport.
- Colors and tokens: Shop uses Pulse/coral, Creators uses Relay/cyan, Agências uses white and Tech uses Acid. Acid remains selective; graphite surfaces and restrained borders provide depth without dominant glow.
- Image quality and asset fidelity: the supplied neøflow logo asset is used directly. The 3D decorative objects in the inspiration were intentionally not reproduced because the brief requested the spirit rather than a literal clone and explicitly rejected gratuitous 3D; structured signal cards carry the same semantic focal role without fake or placeholder imagery.
- Copy and content: the five labels and route meanings match the brief. Copy avoids unproven checkout, payout, catalog-sync, SDK approval and monetization guarantees.
- Icons: the existing project bottom-nav icon set is preserved and remains consistent at all five states.
- Accessibility and interaction: links are semantic, the current tab uses `aria-current`, tap targets are at least 44 px, reduced-motion preferences are respected, and navigation works both as in-page tabs on `/` and real route links elsewhere.

## Comparison history

### Pass 1 — blocked

- [P1] The institutional header/footer remained visible around the mobile shell on public territory routes.
  - Fix: hide institutional chrome only at `max-width: 768px` when the mobile shell is present; desktop remains unchanged.
- [P2] The home micro-footer and the 320 × 568 detail CTA collided with the absolute bottom navigation.
  - Fix: return the tab bar to flex flow, isolate body overflow, and compact supporting detail text below 600 px height.

### Pass 2 — passed

- Post-fix evidence: `neo-tiktok-front-mobile/home-390x844-pass2.png` and `neo-tiktok-front-mobile/route-shop-320x568-final.png` in the visualization directory above.
- At 320 × 568, body size is 320 × 568, detail content height equals its 456 px viewport, and the CTA ends 16 px above the tab bar.
- At 390 × 844, all five states fit without horizontal overflow and retain the active tab, hero, semantic card and CTA.
- At 768 × 1024 the mobile shell is active; at 1440 × 900 the original institutional page and header are active.

## Findings

No actionable P0, P1 or P2 differences remain. The absent decorative 3D art, public-service badge wording and factual copy changes are intentional product constraints, not unresolved fidelity defects.

## Follow-up polish

- [P3] If a future approved asset pack provides original neøflow illustrations, the signal-card region can accept one asset per territory without changing the information architecture.

## Validation

- Primary tab navigation and deep-link hash state tested.
- `/shop` → `/creators` → `/marketing` → `/tech` → `/` navigation tested.
- Public routes expose `meta[name="robots"] = index, follow`.
- Mobile/PWA flow produced zero browser console errors. The unchanged `/home` desktop TikTok embed still emits third-party CORS and permissions-policy errors in local development.
- `pnpm check`: 0 errors, 0 warnings, 5 pre-existing hints.
- `pnpm build`: 24 pages generated successfully.

final result: passed
