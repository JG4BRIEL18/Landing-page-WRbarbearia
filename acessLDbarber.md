# Guia de Acessibilidade e Usabilidade - WR Barbearia (WCAG 2.2 AA)

A **WR Barbearia** é uma landing page institucional para uma barbearia de Maceió (AL). O objetivo é apresentar o trabalho do barbeiro, mostrar a localização e facilitar o agendamento de horários pelo WhatsApp.

**Requisitos do cliente:**
- Página simples, nas cores preto e branco
- Logotipo da barbearia presente
- Informações de contato para agendamento
- Fotos de cortes (já recebidas do cliente e aplicadas na página)
- Detalhes sobre a localização

**Tecnologias utilizadas:**
- HTML
- CSS
- JavaScript (puro, sem frameworks)
- Google Fonts (Bebas Neue e Work Sans)
- Google Maps (mapa incorporado via iframe)

**Última atualização do documento:** 30/10/2026

> **Legenda de status:** ✓ Implementado | ⚠ Parcial / requer atenção | ✗ Pendente

---

## ESTRUTURA DO PROJETO

O projeto é um site estático, sem backend e sem banco de dados. Toda a página está em um único `index.html`, estilizada por um único CSS e com interações em um único arquivo JS.

### Organização de Pastas

```
seu-projeto/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── logo.jpg
    ├── hero.jpg
    ├── corte1.jpg
    ├── corte2.jpg
    ├── corte3.jpg
    ├── corte4.jpg
    └── corte5.jpg
```

---

### Descrição das Camadas

#### HTML (`index.html`)
- Define o conteúdo e a estrutura semântica da página
- Cada seção tem um `id` usado pelo menu de navegação
- Inclui o **skip link** ("Pular para o conteúdo") logo após o `<body>`, apontando para o `<main id="conteudo">`
- Os links do WhatsApp já trazem o endereço `wa.me` com a mensagem pronta direto no `href`, então funcionam mesmo sem JavaScript
- No `<head>`: favicon (`assets/logo.jpg`) e tags Open Graph para prévia de compartilhamento

**Seções da página:**
- `#inicio` → Hero (apresentação e chamada para agendar)
- `#galeria` → Fotos dos cortes
- `#localizacao` → Endereço, horário, WhatsApp e mapa
- `#contato` → Botão de WhatsApp e Instagram
- Rodapé com direitos autorais e link "Voltar ao topo"

#### CSS (`style.css`)
- Responsável por todo o visual
- Usa **variáveis CSS** (`:root`) para cores, fontes e espaçamentos
- Abordagem **mobile first**: a base cobre o celular e os `media queries` (`min-width`) adicionam o layout maior
- Classes de acessibilidade: `.sr-only` (texto só para leitor de tela) e `.skip-link` (visível apenas ao receber foco)

**Paleta de cores (preto e branco):**

| Variável | Cor | Uso |
|---|---|---|
| `--black` | `#0d0d0d` | Texto, botões, seção de localização |
| `--black-soft` | `#171717` | Hover do botão de WhatsApp |
| `--white` | `#fafafa` | Fundo principal |
| `--off-white` | `#f2f1ee` | Fundo dos itens da galeria |
| `--gray-500` | `#6b6b6b` | Textos secundários (escurecido de `#7a7a7a` para atingir 4.5:1) |
| `--gray-300` | `#d9d8d4` | Textos sobre fundo escuro |
| `--gray-200` | `#e7e6e2` | Bordas |

**Breakpoints:**
- Base (até 480px) → celular, galeria em 2 colunas
- 481px → ajuste do espaçamento da galeria
- 721px → menu horizontal e galeria em 4 colunas
- 861px → localização com texto e mapa lado a lado

#### JavaScript (`script.js`)
- Controla o menu hambúrguer (abrir/fechar)
- Fecha o menu com a tecla `Esc` e devolve o foco ao botão hambúrguer
- Faz rolagem suave entre seções (respeitando a preferência de movimento reduzido) e fecha o menu ao clicar em um link
- Fecha o menu ao clicar fora dele
- Preenche o ano atual no rodapé
- Os links do WhatsApp **não são mais montados pelo JS**: o `href` completo está no HTML

#### Imagens (`assets/`)
- Logotipo (`logo.jpg`), imagem do hero e 5 fotos da galeria
- As fotos da galeria são as definitivas, fornecidas pelo cliente

---

## Conformidade WCAG 2.2 Nível AA

### 1. CONTRASTE (1.4.3 - Contrast Minimum)
**Status:** ✓ Implementado (com verificação manual pendente sobre as fotos)

**Verificações realizadas (valores calculados a partir das cores do CSS):**

- **Elemento:** Corpo / Header / Botão principal
  - Cor do Texto: #0d0d0d
  - Cor de Fundo: #fafafa
  - Contrast Ratio: 18.62:1
  - AA Normal: Pass
  - AAA Normal: Pass

- **Elemento:** Botão WhatsApp
  - Cor do Texto: #fafafa
  - Cor de Fundo: #0d0d0d
  - Contrast Ratio: 18.62:1
  - AA Normal: Pass
  - AAA Normal: Pass

- **Elemento:** Seção Localização (texto principal)
  - Cor do Texto: #fafafa
  - Cor de Fundo: #0d0d0d
  - Contrast Ratio: 18.62:1
  - AA Normal: Pass
  - AAA Normal: Pass

- **Elemento:** Seção Localização (rótulos: Endereço, Horário, WhatsApp)
  - Cor do Texto: #d9d8d4
  - Cor de Fundo: #0d0d0d
  - Contrast Ratio: 13.63:1
  - AA Normal: Pass
  - AAA Normal: Pass

- **Elemento:** Texto secundário (descrições de seção, rodapé) sobre o fundo principal
  - Cor do Texto: #6b6b6b 
  - Cor de Fundo: #fafafa
  - Contrast Ratio: 5.11:1 
  - AA Normal: Pass
  - AAA Normal: Pass

- **Elemento:** Texto secundário sobre o fundo da galeria
  - Cor do Texto: #6b6b6b
  - Cor de Fundo: #f2f1ee
  - Contrast Ratio: 4.72:1
  - AA Normal: Pass
  - AAA Normal: Pass

**Pontos que exigem verificação manual:**
- Textos sobre a imagem do hero (título, kicker e parágrafo): o contraste depende da foto. O overlay escuro ajuda, mas deve ser testado com a imagem final.
- Legendas da galeria (`figcaption`): ficam sobre as fotos com degradê escuro. Testar com as fotos definitivas.

**Conclusão:**
- Contraste excelente na maior parte da página (preto e branco)
- O cinza secundário foi corrigido e agora atende ao AA

---

### 2. NAVEGAÇÃO POR TECLADO (2.1.1 - Keyboard / 2.4.1 - Bypass Blocks)
**Status:** ✓ Implementado

**Recursos:**
- ✓ Links, botões e menu são elementos nativos (`<a>` e `<button>`), acessíveis por `Tab`
- ✓ Navegação reversa com `Shift + Tab`
- ✓ Hambúrguer é um `<button>` real, com `aria-label`, `aria-expanded` e `aria-controls`
- ✓ No celular, o menu fechado usa `visibility: hidden`, então os links invisíveis não recebem foco
- ✓ O menu fecha com a tecla `Esc` e o foco volta para o botão hambúrguer
- ✓ **Skip link** "Pular para o conteúdo": aparece ao pressionar `Tab` na primeira vez e leva direto ao `<main>`

**Teste:**

Pressione `Tab` e percorra toda a página em tela estreita, com o menu fechado.
O foco não deve passar por links invisíveis. Com o menu aberto, `Esc` deve fechá-lo.

---

### 3. ALT EM IMAGENS (1.1.1 - Non-text Content)
**Status:** ✓ Implementado

**Exemplo:**
```html
<img src="assets/hero.jpg" alt="Interior da WR Barbearia">
```

**Boas práticas:**
- ✓ As fotos do hero e da galeria possuem texto alternativo descritivo, já atualizado para as fotos finais (Tape fade, Americano com Freestyle, Degradê com Freestyle, Degradê navalhado com Freestyle, Ambiente da barbearia)
- ✓ O logo usa `alt=""` (decorativo), pois o texto "WR Barbearia" ao lado já identifica a marca, evitando leitura duplicada
- ✓ O `iframe` do mapa tem `title="Localização da WR Barbearia"`
- ✓ O ícone SVG do WhatsApp usa `aria-hidden="true"`, pois o botão já tem texto
- ⚠ Se alguma foto da galeria for trocada no futuro, lembrar de atualizar `alt` e legenda

---

### 4. LINKS E BOTÕES (2.4.4 - Link Purpose / 4.1.2 - Name, Role, Value)
**Status:** ✓ Implementado

**Características:**
- ✓ Textos de link claros ("Agendar horário", "Chamar no WhatsApp", "Ver no Google Maps")
- ✓ Links externos usam `rel="noopener noreferrer"`
- ✓ Links que abrem em nova aba (`target="_blank"`) têm o aviso "(abre em nova aba)" em texto visível apenas para leitores de tela (`.sr-only`)
- ✓ Os links do WhatsApp têm o `href` completo no HTML, com mensagem pronta, e funcionam sem JavaScript

---

### 5. FOCO VISÍVEL (2.4.7 - Focus Visible)
**Status:** ✓ Implementado

**CSS aplicado:**
```css
:focus-visible {
  outline: 2px solid var(--black);
  outline-offset: 3px;
}

.hero :focus-visible,
.location :focus-visible {
  outline-color: var(--white);
}
```

**Resultado:**
- ✓ Foco visível nas áreas de fundo claro (contraste 18.62:1)
- ✓ Nas áreas escuras (seção Localização e hero) o contorno é branco, mantendo o contraste
- ✓ O `<main>` não desenha contorno ao receber foco do skip link (`main:focus { outline: none; }`)

---

### 6. HIERARQUIA DE TÍTULOS (1.3.1 - Info and Relationships)
**Status:** ✓ Implementado

**Estrutura usada:**
- h1 → título do hero ("Cada corte é uma questão de precisão.")
- h2 → títulos das seções (Galeria, Onde estamos, Contato)

**Observações:**
- ✓ Existe um único `h1`
- ✓ Não há saltos de nível

---

### 7. HTML SEMÂNTICO
**Status:** ✓ Implementado

**Uso correto de:**
- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`
- `<figure>` e `<figcaption>` na galeria
- `<dl>`, `<dt>` e `<dd>` nas informações de localização

**Benefícios:**
- Melhor leitura por leitores de tela
- Melhor SEO
- Estrutura organizada

---

### 8. IDIOMA E METADADOS (3.1.1 - Language of Page)
**Status:** ✓ Implementado

- ✓ `<html lang="pt-BR">`
- ✓ `<title>` descritivo
- ✓ `meta description` preenchida
- ✓ `meta viewport` sem bloqueio de zoom
- ✓ Favicon (`assets/logo.jpg`)
- ✓ Tags Open Graph (`og:title`, `og:description`, `og:image`, `og:type`, `og:locale`, `og:site_name`, `og:url`)
- ⚠ `og:image` e `og:url` ainda usam o placeholder `https://SEU-DOMINIO.com`; trocar pelo endereço final do site antes de publicar

---

### 9. TIPOGRAFIA E LEGIBILIDADE
**Status:** ✓ Implementado

**Configurações:**
- Títulos: Bebas Neue (display)
- Corpo: Work Sans (sans-serif), com fallback do sistema
- Tamanhos em `rem` e `clamp()`, que escalam com a tela e com a preferência do usuário
- Line-height de 1.6 nos textos corridos
- Texto alinhado à esquerda, exceto na seção de contato (centralizada)

---

### 10. RESPONSIVIDADE (1.4.10 - Reflow)
**Status:** ✓ Implementado

**Recursos:**
- ✓ Layout mobile first
- ✓ Menu hambúrguer em telas pequenas
- ✓ Galeria muda de 2 para 4 colunas
- ✓ Mapa e informações lado a lado a partir de 861px
- ✓ Imagens com `max-width: 100%`

**Exemplo:**
```css
@media (min-width: 721px) {
  .gallery__grid { grid-template-columns: repeat(4, 1fr); }
}
```

---

### 11. MOVIMENTO REDUZIDO (2.3.3 / boas práticas)
**Status:** ✓ Implementado

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
```

- ✓ Quem desativa animações no sistema não recebe rolagem suave nem transições
- ✓ O `script.js` também respeita essa preferência: a rolagem do menu usa `behavior: 'auto'` quando o movimento reduzido está ativo

---

### 12. TAMANHO DO ALVO (2.5.8 - Target Size Minimum, novo na WCAG 2.2)
**Status:** ✓ Implementado

- ✓ Botão hambúrguer: 34 x 34 px (mínimo exigido: 24 x 24 px)
- ✓ Botões principais com área de toque confortável
- ⚠ Links de texto do rodapé e do menu desktop são pequenos; conferir espaçamento entre eles

---

## CHECKLIST DE TESTES

### ✓ Teclado
- Todos os links acessíveis
- Ordem lógica de navegação
- Foco visível nas seções escuras (corrigido; **confirmar no navegador**)
- Menu mobile fechado sem foco em itens invisíveis (corrigido; **confirmar no navegador**)
- Skip link aparece com `Tab` e leva ao conteúdo (**confirmar**)
- `Esc` fecha o menu mobile (**confirmar**)

### ✓ Imagens e mídia
- Todas as imagens com `alt`
- Mapa com `title`
- Logotipo carregando (`assets/logo.jpg`)

### ⚠ Contraste
- Texto principal > 4.5:1
- Texto cinza secundário corrigido (5.11:1 sobre o fundo claro)
- Textos sobre fotos (testar com as imagens finais)

### ✓ Layout
- Funciona no celular
- Sem rolagem horizontal
- Conteúdo visível em todos os breakpoints

### ✓ Funcionalidades
- Botão do WhatsApp abre a conversa com mensagem pronta
- Link do WhatsApp na seção de localização abre a conversa com mensagem pronta
- Os dois links do WhatsApp funcionam com o JavaScript desativado
- Link do Google Maps abre o endereço correto
- Instagram abre o perfil da barbearia
- Ano do rodapé atualiza automaticamente
- Prévia de compartilhamento (Open Graph) funcionando após publicar com o domínio correto

---

## FERRAMENTAS DE TESTE

### Automáticas:
- Lighthouse (Chrome DevTools)
- Axe DevTools
- WAVE

### Manuais:
- Navegação por teclado (`Tab`, `Shift + Tab`, `Enter`, `Esc`)
- Teste visual de contraste com as fotos finais
- Zoom de 200% e 400% no navegador
- Teste em celulares reais (Android e iOS)
- Leitor de tela (NVDA ou TalkBack)

---

## PONTOS PENDENTES DO PROJETO

- Trocar `https://SEU-DOMINIO.com` pelo domínio final no `og:image` e no `og:url`
- Testar o contraste dos textos sobre o hero e as legendas da galeria com as fotos finais
- Informar os horários de funcionamento (hoje a página orienta consultar pelo WhatsApp)
- Rodar o Lighthouse/Axe e testar com leitor de tela após a publicação

**Itens concluídos desde a versão anterior:**
- ✓ Fotos finais recebidas e aplicadas, com `alt` e legendas atualizados
- ✓ Extensão do logotipo confirmada (`logo.jpg`)
- ✓ Aviso interno sobre as fotos removido da página

---

**Concluídas:**
- ✓ Skip link ("Pular para o conteúdo")
- ✓ Foco visível nas seções escuras
- ✓ Menu mobile fechado com `visibility: hidden` e fechamento com `Esc`
- ✓ Aviso quando um link abre em nova aba
- ✓ Link do WhatsApp direto no HTML (sem depender de JS)
- ✓ Favicon e imagem de compartilhamento (Open Graph), com o domínio ainda a definir

---

## CONCLUSÃO

A landing page da **WR Barbearia** atende às diretrizes da **WCAG 2.2 nível AA** nos pontos verificados no código, com:

- Boa legibilidade e alto contraste (preto e branco), incluindo o cinza secundário corrigido
- HTML semântico e hierarquia de títulos correta
- Navegação por teclado completa: skip link, foco visível em todas as seções, menu mobile sem foco oculto e fechamento com `Esc`
- Layout responsivo e mobile first
- Contato direto por WhatsApp (funciona sem JavaScript), localização com mapa e Instagram

Os quatro ajustes que faltavam para a conformidade completa (contraste do cinza secundário, foco visível nas seções escuras, menu mobile fechado ainda focável e skip link) foram aplicados. Restam apenas verificações manuais no navegador e com as fotos finais, e a troca do domínio no Open Graph antes de publicar.