# SVG Banner Canonical Specification // flowoff-tiktok-control-plane

> Especificação canônica para geração do banner SVG do projeto **flowoff-tiktok-control-plane**.

---

## Especifiçacão Técnica do Banner

* **Caminho do arquivo**: `docs/assets/flowoff-tiktok-control-plane-banner.svg`
* **Referência no README**: `![flowoff-tiktok-control-plane banner](./docs/assets/flowoff-tiktok-control-plane-banner.svg)`
* **Dimensões**: `viewBox="0 0 1200 420"` (`width="1200"`, `height="420"`)
* **Paleta de Cores (Terminal Escuro)**:
  * Fundo externo: `#09131A`
  * Cartão interno (gradiente diagonal): `#10222D` -> `#0B151C` (borda com `rx="24"`)
  * Linhas e conectores (Ciano): `#6EE7F9`
  * Destaques e títulos (Lima/Accent): `#D7FF64`
  * Texto claro principal: `#E8F4F8`
  * Texto secundário/suave: `#9BB7C3`
* **Tipografia**: Font-family monoespaçada (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`).

## Estrutura de Blocos e Dados

1. **Símbolo Circular (Esquerda)**: 3 círculos concêntricos em ciano e lima representando a soberania do nó no ecossistema `neo-tiktok-partner-br`.
2. **Cartão 1 (Funções do Nó)**:
   * Linha 1 (Accent): `orchestrate()`
   * Linha 2 (Claro): `bridge_legacy()`
   * Linha 3 (Claro): `sync_manifest()`
3. **Cartão 2 (Domínio e Conceitos)**:
   * Título do Cartão (Accent): `CONTROL PLANE · TIKTOK BR`
   * Conceito 1: `GOVERNANÇA MULTI-REPO SOBERANA`
   * Conceito 2: `PONTES DE COMPATIBILIDADE BR`
   * Conceito 3: `ORQUESTRAÇÃO E MANIFESTOS`
4. **Rodapé**:
   * Superior Esquerdo: `NEO-TIKTOK-PARTNER-BR // SOBERANIA MODULAR`
   * Inferior Esquerdo (Título Bold ~44px): `flowoff-tiktok-control-plane`
   * Inferior Esquerdo (Subtítulo): `Orquestração local, manifesto do workspace e pontes operacionais do TikTok Shop BR.`

---
> [!IMPORTANT]
> O arquivo SVG gerado deve ser 100% vetorial, sem dependências externas ou tags `<image>`, com textos puros em `<text>`.
