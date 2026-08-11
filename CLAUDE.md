<!-- markdownlint-disable MD003 MD007 MD013 MD022 MD023 MD025 MD029 MD032 MD033 MD034 -->

# CLAUDE // AI Dev Agent Operational Manual

```text
========================================
     neøflow · AGENT INSTRUCTION FILE
========================================
Status: ACTIVE
Source of Truth: AGENTS.md
Runtime: Astro 4 / 7 (Node.js >= v20)
========================================
```

## ⟠ Contexto Operacional para Agentes Dev

Este repositório (`neo-tiktok-front`) é o ponto focal de interface frontend e ecossistema de aplicação para a **neøflow // Official TikTok Partners**.

Antes de realizar qualquer edição, proposta de arquitetura ou alteração no código, o agente dev DEVE seguir rigorosamente este manual e as diretrizes em [AGENTS.md](./AGENTS.md).

────────────────────────────────────────

## ⨷ Regras Primárias de Execução

1. **Abstração do Terminal (`Makefile` Exclusivo):**
   * **NUNCA** execute comandos raw de terminal (como `pnpm run build` ou `astro dev` direto) quando houver abstração no `Makefile`.
   * Sempre utilize a interface do `Makefile`: `make dev`, `make build`, `make preview`, `make verify`, `make commit`.

2. **Regra de Nomenclatura da Marca:**
   * **SEMPRE** escreva o nome da marca em minúsculas: `neøflow` (nunca `NEØFLOW`).
   * Exceção: Razão Social formal corporativa em contratos e cabeçalhos jurídicos (`NEOFLOW TECNOLOGIA E PERFORMANCE LTDA`).

3. **Doutrina Visual & Fronteiras do TikTok:**
   * Padrão visual: *TikTok-native. neøflow-owned.*
   * Paleta canônica: Fundo escuro (`#09131A`), Acid Green (`#D7FE09`) para Tech/Infra, Coral (`#FE2C55`) para Shop, Cyan (`#00F2FE`) para Creators, White (`#FFFFFF`) para Marketing.
   * **PROIBIDO:** Clonar ou reproduzir telas oficiais do TikTok Seller Center ou dashboards do TikTok Shop. O projeto deve passar no *Logo Removal Test* e *Screenshot Confusion Test*.

4. **Preservação de Secrets & Imutabilidade:**
   * Nunca expor API Keys, tokens OAuth ou segredos de webhook em arquivos client-side ou documentação.
   * Nenhuma alteração em `.env` deve ser commitada.

────────────────────────────────────────

## ⧉ Inventário do Projeto & Estrutura de Rotas

```text
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ CAMINHO                    DESCRIÇÃO & RECURSOS                      ┃
