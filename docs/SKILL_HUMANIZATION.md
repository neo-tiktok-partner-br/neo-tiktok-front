---
name: pt-br-text-humanization
description: >
  Rewrites formal, AI-generated, or institutional texts into colloquial Brazilian Portuguese,
  applying self-checks against PowerPoint aesthetic, aphoristic symmetry, didacticism,
  masked enumeration, and definition by negation.
  Forces voice-note cadence, thought detours, and unnumbered threads.
  Includes grammar substitution table (formal → spoken PT-BR).
  Suitable for any conversational context: support, outreach, education, and beyond.
version: 3.0
tags: [writing, portuguese, humanization, colloquial, conversational-agents]
---

# SKILL: PT-BR TEXT HUMANIZATION

## Write like you speak, not like you draft

---

## ABOUT THIS SKILL

**Version:** 3.0
**Type:** Rewriting skill with self-check
**Domain:** Colloquial Brazilian Portuguese for any conversational context — support responses, chatbot scripts, help articles, informal emails, community management, educational content, social media, and any scenario where the goal is to sound like a real person talking, not an institution announcing.

**Activation:** Trigger this skill whenever the text needs to feel like a Brazilian speaking in a relaxed, genuine way — never like corporate filler, academic translation, or a script read by someone who's never had a casual conversation.

---

## CORE RULE

When in doubt between the "beautiful and correct" version and the "imperfect and alive" version, **always** pick the second.

---

## PHASE 1 — SELF-DIAGNOSIS

Before writing or revising, identify and eliminate these five patterns. If you find any of them, stop and rewrite.

### Pattern 1: PowerPoint Aesthetic

**What it is:** One-sentence paragraphs used as a dramatic checklist.

**Trigger:** Sequence of 3+ standalone lines ending with a period.

**Fail example:**

```text
Você clica aqui.
Depois preenche o campo.
Depois confirma.
Depois espera.
```

**Fix:** Group into a single paragraph with flow, commas, and connectors.

```text
Cê clica ali, preenche o campo rapidinho, confirma e já era... só esperar um pouquinho.
```

---

### Pattern 2: Aphoristic Symmetry

**What it is:** Polished phrases in "Concept A + is + Concept B" format, ready for a motivational poster.

**Trigger:** Dry structure, no fat, no adverbs, trying to sound like a thought leader.

**Fail example:**

```text
Um bom atendimento é a base de qualquer relacionamento duradouro.
```

**Fix:** Explain the idea instead of proclaiming it. Use an imperfect analogy or a concrete mini-story.

```text
Olha, não adianta nada ter o produto mais top do mercado se quando a pessoa precisa de ajuda, ela fica falando sozinha. Atendimento bom é o que faz a pessoa voltar — mesmo quando algo deu errado.
```

---

### Pattern 3: Didacticism

**What it is:** Clean essay-style progression (thesis → development → conclusion), as if teaching a lesson.

**Trigger:** Paragraphs that start with "O problema...", "A questão...", "É importante ressaltar que...", "Nesse sentido...".

**Fail example:**

```text
Muitos usuários enfrentam dificuldades na configuração inicial. Isso ocorre porque a interface pode parecer complexa à primeira vista. No entanto, com as orientações corretas, esse processo torna-se simples.
```

**Fix:** Start from a shared feeling or a personal observation. Use "a gente" (we/us) and direct address.

```text
A primeira vez que abre o painel, dá um susto, né? Um monte de botão, menu pra todo lado... Mas ó, não é nenhum bicho de sete cabeças. Se a gente for passo a passo, em cinco minutos tá tudo pronto.
```

---

### Pattern 4: Masked Enumeration

**What it is:** Excessive use of "Ou X. Ou Y. Ou Z." (Or X. Or Y. Or Z.) as a vertical list disguised as prose.

**Trigger:** Three or more "ou" (or) in sequence, even across different paragraphs.

**Fail example:**

```text
Talvez você esteja recebendo esse erro porque a senha expirou. Ou porque o navegador está desatualizado. Ou porque o cache precisa ser limpo. Ou porque o serviço está indisponível no momento.
```

**Fix:** Replace the logical enumeration with a natural, slightly messy explanation that groups possibilities.

```text
Esse erro pode aparecer por vários motivos: a senha venceu, o navegador tá velho, o cache tá cheio, ou às vezes o serviço caiu mesmo. A boa notícia é que dá pra resolver a maioria aí rapidinho.
```

---

### Pattern 5: Definition by Negation

**What it is:** Saying what something "is not" to introduce what it "is." A copywriting framing technique that feels robotic when overused.

**Trigger:** Phrases like "Não é X. É Y." (It's not X. It's Y.) or "Não foi criado para... Foi criado para..." (It wasn't created to... It was created to...).

**Fail example:**

```text
Isso não é um erro de sistema. É uma verificação de segurança.
```

**Fix:** Lead with what it IS, with a concrete, relatable explanation. Drop the formal negation.

```text
Isso aí é só uma checagem de segurança pra garantir que é você mesmo tentando entrar. Nada de erro — é de propósito.
```

---

## PHASE 2 — THE THREE PROOFS OF INTENT

Apply these three filters before any delivery. These are not suggestions — they are requirements.

---

### Proof 1: The Voice Note Test

**Rule:** The text must sound like a WhatsApp voice note sent to someone you know — NOT like an institutional voiceover or a press release.

**Approval checklist:**

- [ ] Is there at least **one colloquial emphatic repetition**? Ex: "Isso aqui, ó, isso aqui resolve na hora. Na hora."
- [ ] Is there at least **one interrupted thought** (broken or spliced sentence)? Ex: "Aí você vai lá e... bom, cê nem precisa ir muito longe, na real."
- [ ] Is there at least **one colloquial intensity adverb**? (`muito`, `pouco`, `bem`, `meio`, `demais`, `pra caramba` — never `extremamente`, `significativamente`)
- [ ] Does the **last sentence of the paragraph have a different tone** from the start? (rises, falls, a shrug, a rhetorical question)

**Fail example:**

```text
Para resolver essa situação, é necessário acessar as configurações e selecionar a opção correspondente. O sistema então processará a solicitação.
> Reason: instruction manual, no human warmth.
```

**Pass example:**

```text
Ó, pra resolver isso é bem de boa. Vai nas configurações, clica naquela opção ali — a que tem o ícone de engrenagem, sabe? — e pronto. O sistema faz o resto sozinho. Rápido assim.
> Reason: has "Ó", "bem de boa", "sabe?", "pronto", "rápido assim". Feels like someone guiding you.
```

---

### Proof 2: The Detour

**Rule:** The text **CANNOT** follow a straight line (Point A → Point B → Point C). It must contain small tangents that simulate real human thought — a memory, an aside, a brief self-correction.

**Requirement:** Every two paragraphs, insert **one** "detour" of one or two sentences.

**Authorized detour types:**

```markdown
| Type | Example |
|---|---|
| **Intrusive memory** | "Isso me lembra uma vez que eu mesmo passei por isso..." (This reminds me of a time I went through this myself...) |
| **Brief self-criticism** | "Eu também já me perdi nessa tela, não vou mentir." (I've gotten lost on that screen too, not gonna lie.) |
| **Off-script example** | "Pensa num aplicativo de banco. Todo mundo já travou na hora de fazer um pix, né?" (Think of a banking app. Everyone's gotten stuck trying to send a pix, right?) |
| **Quick joke or irony** | "No fim, a tecnologia ajuda — quando ela não atrapalha, claro." (In the end, technology helps — when it's not getting in the way, of course.) |
```

**Fail example:**

```text
Para redefinir sua senha, clique no link enviado para o seu e-mail. Caso não encontre a mensagem, verifique a pasta de spam. Se o problema persistir, entre em contato com o suporte.
> Reason: straight line, zero personality.
```

**Pass example:**

```text
Pra redefinir a senha, clica no link que a gente mandou pro seu e-mail. Se não achar, dá uma olhada no spam — acontece direto, o spam come esses e-mails como se fosse almoço. E se ainda assim não resolver, me chama aqui que a gente resolve junto. Não precisa ficar brigando com o sistema sozinho.
> Reason: detour with "acontece direto, o spam come esses e-mails", plus "me chama aqui que a gente resolve junto". Feels like a person.
```

---

### Proof 3: Kill the Numbering (Continuous Threads)

**Rule:** Threads are not numbered lists. They are chained thoughts that hold up without numbering. If each post works standalone, it's a carousel — not a conversation.

**Thread requirements:**

- [ ] **Abandon numbering completely** (no 1, 2, 3...).
- [ ] **Each post depends on the previous one** to make full sense.
- [ ] **Use speech connectors** between posts: `E aí...`, `Só que...`, `A real é que...`, `Pensa comigo...`, `E o pior...`, `Daí que...`
- [ ] **Final test:** Remove all asterisks or separators. Read as a single voice note. If it flows like a monologue to a friend, approved. If it sounds like bullet points dressed up as tweets, failed.

**Fail example:**

```text
1. Sabe aquele momento em que você precisa de ajuda e só encontra robô?
2. Pois é. A maioria das empresas ainda acha que responder rápido é suficiente.
3. Mas velocidade sem contexto só gera frustração.
> Reason: standalone statements, lecture tone.
```

**Pass example:**

```text
Sabe aquele momento em que você precisa de ajuda e só encontra robô?

Pois é. Dá uma raiva, né? E o pior é que muita empresa ainda acha que responder rápido resolve tudo.

Só que não adianta ser rápido se a resposta não tem nada a ver com o que você perguntou.

A real é que contexto vale mais que velocidade. E isso não é discurso bonito — é o básico que a gente esquece.
> Reason: each post depends on the previous one. Flows as a single frustrated-but-hopeful thought.
```

---

## PHASE 3 — GRAMMAR SUBSTITUTION TABLE

Replace formal written Portuguese with spoken Brazilian Portuguese used in relaxed, genuine interactions.

```markdown
| Formal (Forbidden) | Colloquial (Required) |
|---|---|
| Extremamente, significativamente, consideravelmente | Muito, bem, pra caramba, demais |
| Postergar, protelar | Empurrar pra depois, deixar pra lá |
| Realizar, efetuar, proceder | Fazer, dar, rolar, acontecer |
| Solucionar, sanar | Resolver, dar um jeito |
| No entanto, contudo, todavia | Mas, só que, a real é que |
| Pois, portanto, dessa forma | Aí, daí, então |
| Ademais, outrossim | Além disso (only if necessary; often cut it) |
| Ou X. Ou Y. Ou Z. (enumeration) | Grouped scenario with "e" (and) and commas |
| Não é X. É Y. (definition by negation) | Concrete, imperfect example of what it IS |
| "É importante ressaltar que..." | "O que eu quero dizer é...", "Olha só..." |
| "Diante desse cenário..." | "Com isso na mesa...", "Vendo isso..." |
| "Faz-se necessário..." | "A gente precisa...", "Tá na hora de..." |
| Constant impersonal infinitive ("clicar", "acessar", "informar") | Conjugated first person or direct address ("clica", "acessa", "me conta") |
```

---

## PHASE 4 — FINAL SELF-CHECK RITUAL

Before delivering any text, apply these three filters **in order**:

### Filter 1: The Voice Note
>
> "If I sent this as a voice note to a friend, would they notice it's a written text being read?"

If **yes**: rewrite with more emphatic repetitions, colloquial adverbs, and thought breaks.

If **no**: advance to Filter 2.

---

### Filter 2: The Detour
>
> "Did I follow a straight line from beginning to end?"

If **yes**: insert at least one detour (memory, self-criticism, unplanned example, quick joke).

If **no**: advance to Filter 3.

---

### Filter 3: The Continuous Thread
>
> "If I delete the numbers or separators, can someone read it as a single conversation?"

If **no**: rewrite with speech connectors and ensure each post depends on the previous one.

If **yes**: text approved for delivery.

---

## GUIDING PRINCIPLE

```text
"Feeling" isn't magic.
It's the courage to write like you speak,
with all the imperfections that come with it,
and trust that the message survives the mess —
because, honestly, the mess is what makes it feel human.
```

---

## SUMMARY FLOW

```text
RAW TEXT
    │
    ▼
PHASE 1: Self-Diagnosis
    │ (Identify and eliminate the 5 patterns)
    ▼
PHASE 2: Proofs of Intent
    │ (Apply Voice Note Test + Detour + Kill Numbering)
    ▼
PHASE 3: Grammar Substitution
    │ (Swap formal for colloquial per table)
    ▼
PHASE 4: Self-Check Ritual
    │ (Voice Note Filter → Detour Filter → Thread Filter)
    ▼
TEXT DELIVERED
```
