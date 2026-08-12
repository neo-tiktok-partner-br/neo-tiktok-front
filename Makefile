# ═══════════════════════════════════════════
#   NΞØ Protocol — Makefile Canônico
#   neøflow // Official TikTok Partners Front
# ═══════════════════════════════════════════

CYAN    := \033[0;36m
GREEN   := \033[0;32m
YELLOW  := \033[0;33m
RED     := \033[0;31m
MAGENTA := \033[0;35m
DIM     := \033[0;90m
WHITE   := \033[1;37m
RESET   := \033[0m

.DEFAULT_GOAL := help

.PHONY: help check-node install repair update dev build preview clean check-seo audit docs verify commit

help: ## Exibe os comandos disponíveis
	@printf "$(CYAN)╔══════════════════════════════════════════╗$(RESET)\n"
	@printf "$(CYAN)║$(MAGENTA)▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓$(CYAN)║$(RESET)\n"
	@printf "$(CYAN)║                                          ║$(RESET)\n"
	@printf "$(CYAN)║$(RESET)      $(WHITE)neøflow · TIKTOK PARTNER FRONT$(RESET)      $(CYAN)║$(RESET)\n"
	@printf "$(CYAN)║$(RESET)   $(MAGENTA)── Official TikTok Partners v1.0.0 ──$(RESET)   $(CYAN)║$(RESET)\n"
	@printf "$(CYAN)║                                          ║$(RESET)\n"
	@printf "$(CYAN)║$(MAGENTA)▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓$(CYAN)║$(RESET)\n"
	@printf "$(CYAN)╚══════════════════════════════════════════╝$(RESET)\n"
	@printf "$(DIM) ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░$(RESET)\n"
	@printf "\n"
	@printf "  Uso: $(CYAN)make$(RESET) $(WHITE)[comando]$(RESET)\n"
	@printf "\n"
	@printf "$(DIM)  ·─── AMBIENTE ──────────────────────────────$(RESET)\n"
	@grep -E '^(check-node|install|repair|update):.*## ' Makefile \
		| sort \
		| awk 'BEGIN {FS = ":.*## "}; {printf "  \033[0;36m◆ %-16s\033[0m \033[0;90m%s\033[0m\n", $$1, $$2}'
	@printf "\n"
	@printf "$(DIM)  ·─── DESENVOLVIMENTO ───────────────────────$(RESET)\n"
	@grep -E '^(dev|build|preview|clean):.*## ' Makefile \
		| sort \
		| awk 'BEGIN {FS = ":.*## "}; {printf "  \033[0;36m◆ %-16s\033[0m \033[0;90m%s\033[0m\n", $$1, $$2}'
	@printf "\n"
	@printf "$(DIM)  ·─── QUALIDADE & SEGURANÇA ─────────────────$(RESET)\n"
	@grep -E '^(audit|check-seo|docs|verify|commit):.*## ' Makefile \
		| sort \
		| awk 'BEGIN {FS = ":.*## "}; {printf "  \033[0;36m◆ %-16s\033[0m \033[0;90m%s\033[0m\n", $$1, $$2}'
	@printf "\n"
	@printf "$(DIM) ─────────────────────────────────────────────$(RESET)\n"
	@printf "$(DIM) ⬡ NΞØ Protocol · neøflow TikTok Partner Front$(RESET)\n"
	@printf "\n"

check-node: ## Valida versão do ambiente Node.js
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)◉  CHECK-NODE$(RESET)%-29s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@node -e 'const [major, minor] = process.versions.node.split(".").map(Number); process.exit(major > 22 || (major === 22 && minor >= 12) ? 0 : 1)' || (printf "$(RED)  ✗ Versão do Node incompatível (requer v22.12+)$(RESET)\n" && exit 1)
	@printf "$(GREEN)  ✓ Ambiente Node.js v22.12+ verificado com sucesso.$(RESET)\n"

install: check-node ## Instala dependências do projeto Astro
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)▼  INSTALL$(RESET)%-31s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)│$(RESET)  $(DIM)pnpm install --frozen-lockfile$(RESET)%-10s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@pnpm install --frozen-lockfile --ignore-scripts
	@printf "$(GREEN)  ✓ Instalação concluída com sucesso.$(RESET)\n"

repair: ## Limpa node_modules/ e reinstala dependências
	@printf "$(YELLOW)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(YELLOW)│$(RESET)  $(WHITE)⚙  REPAIR$(RESET)%-33s$(YELLOW)│$(RESET)\n" ""
	@printf "$(YELLOW)╰──────────────────────────────────────────╯$(RESET)\n"
	@rm -rf node_modules
	@pnpm install --frozen-lockfile --ignore-scripts
	@printf "$(GREEN)  ✓ Manutenção concluída.$(RESET)\n"

update: ## Atualiza o Astro e as dependências
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)↑  UPDATE$(RESET)%-32s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@pnpm update --ignore-scripts
	@printf "$(GREEN)  ✓ Dependências atualizadas.$(RESET)\n"

dev: ## Inicia o servidor de desenvolvimento local
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)▶  DEV$(RESET)%-36s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)│$(RESET)  $(DIM)pnpm run dev$(RESET)%-28s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@pnpm run dev

build: check-node ## Compila o build de produção do Astro
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)⬡  BUILD$(RESET)%-34s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)│$(RESET)  $(DIM)pnpm run build$(RESET)%-26s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@pnpm run build
	@printf "$(GREEN)  ✓ Build de produção concluído.$(RESET)\n"

preview: ## Inicia a pré-visualização do build de produção
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)◎  PREVIEW$(RESET)%-32s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@pnpm run preview

clean: ## Limpa artefatos temporários e diretório dist/
	@printf "$(YELLOW)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(YELLOW)│$(RESET)  $(WHITE)✦  CLEAN$(RESET)%-34s$(YELLOW)│$(RESET)\n" ""
	@printf "$(YELLOW)╰──────────────────────────────────────────╯$(RESET)\n"
	@rm -rf dist/ .astro/ node_modules/.vite
	@printf "$(GREEN)  ✓ Artefatos limpos com sucesso.$(RESET)\n"

check-seo: ## Valida metadados e tags de SEO básicas no projeto
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)◉  CHECK-SEO$(RESET)%-30s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@grep -rn "og:title" src/layouts/BaseLayout.astro > /dev/null || (printf "$(RED)  ✗ Meta og:title não encontrada$(RESET)\n" && exit 1)
	@grep -rn "description" src/layouts/BaseLayout.astro > /dev/null || (printf "$(RED)  ✗ Meta description não encontrada$(RESET)\n" && exit 1)
	@printf "$(GREEN)  ✓ Validação de SEO concluída.$(RESET)\n"

audit: ## Varredura de vulnerabilidades nas dependências
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)⚑  AUDIT$(RESET)%-34s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@pnpm audit || true
	@printf "$(GREEN)  ✓ Auditoria concluída.$(RESET)\n"

docs: ## Valida estrutura de documentação do repositório
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)✧  DOCS$(RESET)%-35s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@test -d docs/ || (printf "$(RED)  ✗ Pasta docs/ não encontrada$(RESET)\n" && exit 1)
	@test -f README.md || (printf "$(RED)  ✗ README.md não encontrado$(RESET)\n" && exit 1)
	@printf "$(GREEN)  ✓ Estrutura de documentação íntegra.$(RESET)\n"

verify: check-node check-seo docs build audit ## Pipeline completo de verificação antes do commit
	@printf "$(CYAN)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(CYAN)│$(RESET)  $(WHITE)⬡  VERIFY$(RESET)%-33s$(CYAN)│$(RESET)\n" ""
	@printf "$(CYAN)╰──────────────────────────────────────────╯$(RESET)\n"
	@printf "$(GREEN)  ✓ Pipeline de verificação aprovado.$(RESET)\n"

commit: verify ## Fluxo de commit seguro (Conventional Commits)
	@printf "$(MAGENTA)╭──────────────────────────────────────────╮$(RESET)\n"
	@printf "$(MAGENTA)│$(RESET)  $(WHITE)⬡  COMMIT$(RESET)%-33s$(MAGENTA)│$(RESET)\n" ""
	@printf "$(MAGENTA)╰──────────────────────────────────────────╯$(RESET)\n"
	@printf "$(YELLOW)  » Mensagem (Conventional Commits): $(RESET)"; \
	read -r msg; \
	git add -A && \
	git commit -m "$$msg" && \
	printf "$(MAGENTA)  ✓ Commit realizado: $$msg$(RESET)\n"
