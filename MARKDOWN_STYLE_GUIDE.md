# Markdown Style Guide // flowoff-tiktok-control-plane

> Diretrizes canônicas de formatação Markdown para a documentação do nó **flowoff-tiktok-control-plane**.

---

## 1. Princípios Básicos

* **Clareza e Concisão**: Escreva de forma direta e técnica, no estilo de engenharia sênior (Doutrina NEØ).
* **Hierarquia de Cabeçalhos**: Use apenas `#` (título principal do arquivo), `##` (seções) e `###` (subseções). Nunca pule níveis hierárquicos.
* **Comprimento de Linha**: Mantenha listas e parágrafos enxutos para evitar quebras visuais desconfortáveis.

## 2. Blocos de Código e Diferenças (Diffs)

Todo bloco de código deve obrigatoriamente especificar a linguagem de programação (`bash`, `ts`, `json`, `python`, `yaml`, `text`, etc.):

```bash
# Correto
pnpm install
```

Para exibir modificações no código, utilize blocos `diff`:

```diff
- old_function()
+ new_sovereign_function()
```

## 3. Alertas e Callouts (GitHub Flavored Markdown)

Utilize estrategicamente os alertas nativos do GitHub para destacar informações críticas:

> [!NOTE]
> Contexto de background, notas operacionais ou esclarecimentos técnicos.

> [!TIP]
> Sugestões de performance, atalhos úteis e melhores práticas de desenvolvimento.

> [!IMPORTANT]
> Requisitos obrigatórios, dependências críticas ou regras inegociáveis do domínio.

> [!WARNING]
> Mudanças que quebram compatibilidade, avisos de depreciação ou riscos moderados.

> [!CAUTION]
> Ações destrutivas com alto risco de perda de dados, vazamento de segredos ou queda de produção.
