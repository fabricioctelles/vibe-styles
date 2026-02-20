<p align="center">
  <a href="^"><strong>🇬🇧 Click here for the English Version</strong></a>
</p>

<br>

<p align="center">
  <img src="app/assets/images/logo.png" alt="Vibe Styles Logo" width="150" style="border-radius: 12px;">
</p>

<h1 align="center">🎨 Vibe Styles</h1>

<p align="center">
  Coleção interativa com <strong>256 estilos de UI/UX design</strong> — cada um com demonstração visual ao vivo e prompt copiável para IA generativa.
</p>

<p align="center">
  <a href="https://vibe.ft.ia.br/">🌐 Demo ao Vivo</a> ·
  <a href="https://github.com/fabricioctelles/vibe-styles">💻 GitHub</a> ·
  <a href="#-categorias">📂 Categorias</a> ·
  <a href="#-como-usar">🚀 Como Usar</a> ·
  <a href="#-catálogo-completo">📋 Catálogo</a> ·
  <a href="#-contribuindo">🤝 Contribuindo</a> ·
  <a href="README-EN.md">🇬🇧 English</a>
</p>

<p align="center">
  <a href="https://github.com/fabricioctelles/vibe-styles/stargazers"><img src="https://img.shields.io/github/stars/fabricioctelles/vibe-styles?style=for-the-badge&logo=github&labelColor=1E293B&color=8B5CF6" alt="GitHub Stars"></a>
  <img src="https://img.shields.io/badge/estilos-256-8B5CF6?style=for-the-badge&labelColor=1E293B" alt="256 Estilos">
  <img src="https://img.shields.io/badge/categorias-25-10B981?style=for-the-badge&labelColor=1E293B" alt="25 Categorias">
  <img src="https://img.shields.io/badge/stack-HTML%20%2B%20Tailwind%20%2B%20Alpine.js-38BDF8?style=for-the-badge&labelColor=1E293B" alt="Stack">
  <img src="https://img.shields.io/badge/idioma-PT--BR-F59E0B?style=for-the-badge&labelColor=1E293B" alt="Português Brasileiro">
  <img src="https://img.shields.io/badge/licença-open--source-EC4899?style=for-the-badge&labelColor=1E293B" alt="Open Source">
</p>

---

## 📖 Sobre o Projeto

O **Vibe Styles** é uma **coleção interativa com 256 estilos de UI/UX design — cada um com demonstração visual + prompt copiável pronto para colar em ChatGPT, Claude, Gemini ou qualquer IA generativa.**

O projeto reúne 256 estilos de design — de Glassmorphism a Cyberpunk, de Brutalism a Kawaii — cada um implementado como uma landing page standalone com HTML, Tailwind CSS e Alpine.js.

### O diferencial

- ✅ **Prompts copy-paste ready** — Cada estilo vem com um prompt estruturado e testado para IA generativa
- ✅ **Demonstração visual funcional** — Não é mockup — cada estilo é uma página HTML completa e responsiva
- ✅ **Sem decisões de design** — Já vem com paleta de cores, tipografia, espaçamento e regras de execução
- ✅ **Para 4 personas diferentes** — Developers, Designers sem code, Agências, Criadores de conteúdo (Gamma, Pitch, Lovable, NotebookLM)

### Inspiração

Tudo começou com um [post no Reddit](https://www.reddit.com/r/notebooklm/comments/1r2p1bb/40_notebooklm_infographic_styles_specification/) do [Paolo Cortez](https://www.reddit.com/user/Paolo-Cortez/), que compartilhou uma coleção de prompts de estilos de infográficos para o NotebookLM. As especificações estavam tão bem estruturadas — com paletas de cores, tipografia, texturas e tags — que poderiam facilmente servir como especificações de estilos para landing pages.

Isso me lembrou do [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), um skill que também mantém uma [lista curada de estilos de UI/UX](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/src/ui-ux-pro-max/data/styles.csv) com foco em implementação prática.

Usei também a [Manus AI](https://manus.im/app) para evoluir as listas, saltando de 89 para a casa dos 200 estilos.

Fiz o merge das fontes e usei o [Kiro](https://kiro.dev) com multi-agentes para gerar os prompts dinâmicos e criar as quase 200 páginas de demonstração de forma automatizada.

Testei também no [Cline](https://cline.bot/) e no [Claude Code](https://claude.com/product/claude-code) e deu super certo também.

A intenção é ser simples e direto: ajudar você a escolher o estilo certo para o seu SaaS ou projetinho de fim de semana.

### Por que o Vibe Styles existe?

- **Referência rápida** — Navegue visualmente por 256 estilos sem sair do navegador
- **Prompts prontos** — Copie e cole em qualquer IA generativa para replicar o estilo
- **Código real** — Cada estilo é uma implementação funcional, não apenas um mockup
- **Zero dependências** — HTML estático + Tailwind CDN + Alpine.js + Google Fonts. Sem build, sem compilação
- **SEO-friendly** — URLs com slugs semânticos, Schema Markup JSON-LD, Open Graph, sitemap, NGINX otimizado para Coolify

---

## 🏗 Arquitetura da Aplicação V2

### Estrutura de Projeto

```
vibe-styles/
├── app/
│   ├── index.html                    # Página principal (grid + header sticky + infinite scroll)
│   ├── detail.html                   # Página de detalhe (70% iframe + 30% prompt com abas)
│   ├── data/
│   │   └── data.json                 # JSON centralizado com todos os 256 estilos
│   ├── styles/
│   │   ├── 1.html                    # Iframes dos designs (um por estilo)
│   │   ├── 2.html
│   │   └── [id].html                 # Total: 256 arquivos
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg              # Logo da aplicação
│   │   │   └── [screenshots]         # Previews 16:9 dos estilos
│   │   ├── css/
│   │   │   └── animations.css        # Animações customizadas
│   │   └── js/
│   │       ├── config.js             # Configurações globais
│   │       ├── utils.js              # Helpers (generateSlug, findCardBySlug, dark mode)
│   │       └── detail.js             # Roteamento por slug (parseRoute, loadStyleData)
│   ├── screenshots/                  # Diretório de imagens dos estilos
│   │   ├── 1.png                     # Dark Mode (OLED)
│   │   ├── 2.png
│   │   └── [id].png                  # Uma imagem por estilo
│   ├── llms.txt                      # Metadados para IA
│   ├── sitemap.xml                   # Sitemap para SEO (URLs com slug)
│   └── robots.txt                    # Controle de crawlers
└── nginx.conf                        # Configuração NGINX para Coolify (rewrite de slugs)

```

### Dois Pontos de Entrada

| Página | Função | Características |
|--------|--------|------------------|
| **index.html** | Catálogo visual | Grid responsivo 4/3/2/1 cols, cards em estilo poster, header sticky, infinite scroll (16 cards/carga) |
| **detail.html** | Visualização detalhada | Layout 70/30 (iframe + prompt), responsivo mobile, roteamento por slug (`/{slug}`) com fallback `?id=` |

### Fluxo de Dados

```
app/data/styles.json (fetch uma vez)
    ↓
Alpine.js state (reatividade declarativa)
    ↓
Filtro/Busca em tempo real (~2ms)
    ↓
Renderização reativa (cards montam com stagger animation)
    ↓
Intersection Observer (detecção de scroll)
    ↓
Carregamento de 16 cards adicionais
    ↓
Images src: app/screenshots/[id].png
```

### Roteamento

- **Home**: `index.html` — Grid de todos os 256 estilos
- **Detalhe**: `/{slug}` — Estilo específico com iframe + prompt (ex: `/glassmorphism`)
- **Fallback**: `detail.html?id=[id]` — Compatibilidade retroativa, redireciona para slug via `history.replaceState`
- **Iframes**: `app/styles/[id].html` — Demonstração visual do estilo
- **Dados**: `app/data/data.json` — Fonte única de verdade

**Roteamento por slug** — URLs amigáveis geradas dinamicamente a partir do nome do estilo. NGINX reescreve `/{slug}` para `detail.html`, onde o JavaScript resolve o slug via `parseRoute()` + `findCardBySlug()`. URLs antigas com `?id=` continuam funcionando com redirect transparente.

---

## 🎨 Interface & Design

### Header Sticky

```
┌────────────────────────────────────────────────────────────────────────────┐
│ [Logo] Vibe Styles  |  [🔍 Busca] [Filtros]  |  [🌙] [⭐ GitHub] [Logo ft] │
└────────────────────────────────────────────────────────────────────────────┘
```

**Componentes:**
- **Logo**: Aplicação com nome "Vibe Styles"
- **Busca**: Input com debounce (Alpine.js) — filtra em tempo real por qualquer termo do JSON
- **Filtros**: Dropdown com categorias (General, Landing Page, BI/Analytics, etc)
- **Dark Mode Toggle**: Ícone sol/lua que gira 180°, persiste em localStorage
- **GitHub Stars Badge**: `https://img.shields.io/github/stars/fabricioctelles/vibe-styles`
- **Link ft.ia.br**: Logo pequeno (20px) com link para https://ft.ia.br/

**Comportamento:**
- `position: sticky; top: 0; z-index: 50`
- Backdrop blur com fundo semi-transparente
- Responsive: em mobile, alguns elementos são ocultados

### Grid de Cards (Home)

**Responsividade:**
```
Desktop (>1440px):  4 colunas
Laptop (>1024px):   3 colunas
Tablet (>640px):    2 colunas
Mobile:             1 coluna
```

**CSS:**
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 16px;
padding: 2rem;
```

### Card Individual (Estilo Poster)

**Layout:**
```
┌─────────────────────────────────┐
│ ┌─────────────────────────────┐ │  ← Imagem 16:9 com overlay
│ │ [Screenshot do Estilo]      │ │
│ │ (app/screenshots/[id].png)  │ │     
│ │                             │ │     Gradient overlay (bottom-up)
│ │ ┌───────────────────────┐   │ │     Badge: "General" top-left
│ │ │ General (Category)    │   │ │
│ │ └───────────────────────┘   │ │
│ │                             │ │
│ │ 📌 Glassmorphism (Title)    │ │  ← Text overlay bottom-left
│ │    (white text, shadow)     │ │
│ └─────────────────────────────┘ │
│  Rounded: 24px (rounded-2xl)    │
│  Aspect: 16:9                   │
│  Hover: Scale 1.05, rotate -1°  │
└─────────────────────────────────┘
```

**Estilo Visual:**
- Rounded corners: `rounded-2xl` (24px)
- Aspect ratio: 16:9 responsive
- Imagem: `app/screenshots/[id].png` como background
- Overlay gradient: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))`
- Título: Posicionado no topo esquerdo sobre a imagem, branco com text-shadow
- Badge de categoria: Canto superior esquerdo

**Interações:**
- **Hover**:
  - Imagem: scale 1.05 (zoom suave)
  - Card: rotate -1deg (inclinação leve)
  - Shadow: aumenta para `0 20px 40px rgba(0,0,0,0.15)`
  - Ícone "→" aparece no topo direito (opacity: 0 → 1)
  - Background escurece levemente

- **Click**:
  - Navega para `detail.html?id=[id]`
  - Cursor `pointer`

- **Mount (Staggered Animation)**:
  - Fadeup: `opacity 0 → 1` + `translateY(20px) → 0`
  - Duração: 300ms easing
  - Delay: `calc(index * 50ms)` baseado na posição

**Acessibilidade:**
- Semântica: `<article>` ou `<a>` tag
- `aria-label`: "Ver estilo [nome]"
- Focus ring: `focus:ring-2 ring-offset-2`
- Alt text na imagem

### Infinite Scroll

**Mecanismo:** Intersection Observer API

```javascript
const sentinel = document.querySelector('[data-sentinel]');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !isLoading) {
    loadMoreCards(16);
  }
}, { rootMargin: '400px' });
observer.observe(sentinel);
```

**Comportamento:**
- Carrega 16 cards de cada vez
- Quando o usuário scrolla perto do final, carrega mais automaticamente
- Loading spinner enquanto busca
- Mensagem de fim quando chegar em 256 estilos: "🎉 Fim da coleção!"

---

## 📄 Página de Detalhe

### Desktop (70/30 Layout - Full Height)

```
┌──────────────────────────────────────────────────────┐
│ ← Prev Style        Home        Next Style →         │ Header nav
├──────────────────────────────────────────────────────┤
│ Vibe Styles / Glassmorphism                          │ Breadcrumb
│ Glassmorphism   [General] [frosted] [blur] [2022+]   │ Título + tags
├──────────────────────────────────┬───────────────────┤
│                                  │ [Prompt][Origem]  │ Abas pill-style
│   Iframe (70%)                   │ [Uso]  [Similar]  │ (ativa = roxo)
│   app/styles/[id].html           │─────────────────  │
│                                  │ Prompt de IA      │ Header da aba
│                                  │─────────────────  │
│                                  │ [📋 Copiar]       │ Botão no topo
│                                  │─────────────────  │
│                                  │ ## INSTRUÇÃO...   │
│                                  │ Atue como um...   │ Conteúdo com
│   [Abrir em nova aba]            │ (scroll)          │ scroll
└──────────────────────────────────┴───────────────────┘
Footer: © 2026 FABRICIO TELLES · FT.IA.BR
```

### Abas do Painel Direito

| Aba | Conteúdo |
|-----|----------|
| **Prompt** | Botão "Copiar Prompt Completo" no topo + prompt copiável com scroll + descrição |
| **Origem** | Histórico e contexto de origem do estilo |
| **Uso** | Casos de uso recomendados |
| **Similar** | Estilos relacionados com links de navegação por slug |

As abas usam estilo pill com destaque em `--color-accent` (roxo) na aba ativa. Todo o conteúdo das abas tem scroll independente.

### Mobile (Responsive Full-Width)

```
┌─────────────────────────────────────────────┐
│ ← Vibe Styles › Glassmorphism               │
├─────────────────────────────────────────────┤
│ Iframe 100% Width, Full Height              │
│                                             │
│ [📋 Copy Prompt] (Floating bottom-right)    │
│                                             │
└─────────────────────────────────────────────┘
```

**Comportamento:**
- Em desktop: layout lado-a-lado 70/30 com abas pill-style no painel direito
- Em mobile: iframe fullscreen, prompt em floating button
- Navegação prev/next e related styles usam URLs com slug
- Botão "Copiar Prompt" com feedback visual ("✓ Copiado!" por 2 segundos)
- Meta tags SEO (canonical, og:url, Schema JSON-LD, breadcrumbs) usam URLs com slug

---

## 🌓 Dark Mode & Personalização

### Toggle Dark Mode

**Implementação:**
- **Ícone**: Sol ☀️ (light) / Lua 🌙 (dark)
- **Animação**: Rotação 180° suave ao alternar
- **Persistência**: localStorage (`vibe-styles-theme`)
- **Aplicação**: Classe `.dark` no `<html>` ou `<body>`

**Cores:**

```css
:root {
  --page-bg: #F5F5F7;          /* Light: Cinza muito claro ≈ Apple Gray */
  --card-bg: #FFFFFF;           /* Light: Branco puro */
  --text-primary: #1d1d1f;      /* Light: Preto muito escuro ≈ Apple Black */
  --text-secondary: #6e6e73;    /* Light: Cinza médio */
  --accent: #8B5CF6;            /* Purple (mantém nos dois temas) */
}

.dark {
  --page-bg: #1a1a1a;          /* Dark: Preto profundo ≈ Apple OLED Black */
  --card-bg: #2d2d2d;           /* Dark: Cinza muito escuro */
  --text-primary: #f5f5f7;      /* Dark: Branco muito claro ≈ Apple White */
  --text-secondary: #a1a1a6;    /* Dark: Cinza médio claro */
  --accent: #8B5CF6;            /* Purple (mantém) */
}
```

**Transition:**
- Todos os elementos com `transition: background-color 0.3s, color 0.3s`
- Suave sem jarras

---

---

## 🗂 Categorias

O acervo está organizado em **25 categorias** que cobrem os principais cenários de design:

| Categoria | Qtd | Descrição | Badge |
|-----------|-----|-----------|-------|
| **General** | 110 | Estilos de interface de uso geral — tendências modernas e clássicas | 🟣 |
| **Landing Page** | 8 | Padrões otimizados para páginas de conversão e vendas | 🟢 |
| **BI/Analytics** | 10 | Dashboards e visualização de dados corporativos | 🟡 |
| **Organization** | 1 | Estilos organizacionais e corporativos | 🔵 |
| **Infographic** | 13 | Estilos visuais para infográficos e apresentação de informações | 🔴 |
| **Tech-Inspired** | 20 | Estilos inspirados em grandes empresas de tecnologia | 🔵 |
| **Thematic** | 11 | Estilos temáticos com identidade visual forte | 🟠 |
| **Technical** | 8 | Estilos técnicos e especializados | 🔵 |
| **Data Visualization** | 1 | Visualização de dados especializada | 🟡 |
| **Artistic** | 3 | Estilos artísticos e expressivos | 🟣 |
| **Historical** | 5 | Estilos inspirados em períodos históricos | 🟤 |
| **Fantasy** | 1 | Estilos de fantasia e mundos imaginários | 🟣 |
| **Casual** | 1 | Estilos casuais e descontraídos | 🟢 |
| **Futuristic** | 8 | Estilos futuristas e de ficção científica | 🔵 |
| **Pop Culture** | 9 | Estilos inspirados em cultura pop, filmes e séries | 🟣 |
| **Retro** | 6 | Estilos retrô e nostálgicos | 🟠 |
| **Educational** | 1 | Estilos educacionais e didáticos | 🔵 |
| **Minimalism** | 5 | Estilos minimalistas limpos e funcionais | ⚪ |
| **Brutalism** | 5 | Estilos brutalistas ousados e diretos | ⚫ |
| **Constructivism** | 5 | Estilos construtivistas geométricos e estruturados | 🔺 |
| **SwissStyle** | 5 | Estilos Swiss Design com tipografia e grid | 🟥 |
| **EditorialStyle** | 5 | Estilos editoriais inspirados em revistas e publicações | 📰 |
| **HandDrawn** | 5 | Estilos hand-drawn artesanais e orgânicos | ✏️ |
| **FlatDesign** | 5 | Estilos flat design limpos e bidimensionais | 🔷 |
| **BentoStyle** | 5 | Estilos bento com layout em grade modular | 🍱 |

---

## 🚀 Como Usar

### Fluxo: Escolha Estilo → Copie Prompt → Cole em IA

#### 1️⃣ **Acesse o catálogo**
Vá para **[vibe.ft.ia.br](https://vibe.ft.ia.br/)** (ou execute localmente — vide "Execução Local" abaixo)

#### 2️⃣ **Escolha o estilo ideal**
- Use o dropdown para navegar pelos 256 estilos
- **Dica**: procure por categoria (General, Landing Page, BI/Analytics) ou tipo de projeto:
  - 🏢 Para **SaaS B2B**: Minimalismo, Swiss Style, Glassmorphism, Dark Mode OLED
  - 🛒 Para **Ecommerce**: Vibrant & Block-based, Flat Design, Bento Grid
  - 🚀 Para **Landing Page de alto-impacto**: Glassmorphism, Aurora UI, 3D & Hyperrealism
  - 📊 Para **Dashboard/Analytics**: Data-Dense, Executive Dashboard, Real-Time Monitoring
  - ✨ Para **Portfólio/Criativo**: Editorial Grid, Hand-Drawn, Claymation 3D
  - 🎮 Para **Comunidade/Gen-Z**: Y2K Aesthetic, Cyberpunk UI, Kawaii

#### 3️⃣ **Visualize a demonstração**
O estilo é exibido em tempo real no painel central (iframe responsivo). Analise cores, tipografia, espaçamento e animações.

#### 4️⃣ **Copie o prompt**
Clique no botão **"Copiar Prompt"** (canto superior direito). O prompt estruturado será copiado para sua área de transferência.

#### 5️⃣ **Cole em sua IA preferida**
- **ChatGPT** (chat.openai.com)
- **Claude** (claude.ai)
- **Gemini** (gemini.google.com)
- **Lovable** (lovable.dev) — para gerar código completo
- **Gamma** (gamma.app) — para apresentações
- **Pitch** (pitch.com) — para decks
- **NotebookLM** (notebooklm.google.com) — para gerar áudio + slides
- Qualquer outra IA que aceite prompts

#### 6️⃣ **Customize e adapte**
O prompt traz especificações completas (cores, tipografia, layout, componentes). Você pode adaptar:
- Tema/contexto ("Para uma agência de design", "Para um SaaS de IA")
- Seções específicas (remover Testimonials, adicionar FAQ)
- Conteúdo textual (headlines, descrições de features)
- Cores (manter o estilo, trocar paleta)

---

### Execução Local

```bash
# Clone o repositório
git clone https://github.com/fabricioctelles/vibe-styles.git
cd vibe-styles

# Opção 1: Servidor simples (sem suporte a slugs na URL)
python3 -m http.server 8000 --directory app
# Acesse http://localhost:8000 — navegação funciona, mas URLs de slug retornam 404

# Opção 2: Dev server com rewrite de slugs (recomendado)
python3 scripts/dev-server.py 8001
# Acesse http://localhost:8001 — URLs como /glassmorphism funcionam corretamente
```

O dev server (`scripts/dev-server.py`) simula o comportamento do NGINX, reescrevendo URLs de slug para `detail.html`.

---

## ❓ FAQ — Mapeamento de Personas e Use-Cases

### 👨‍💻 Você é um Developer usando IA como ferramenta de design?

**Seu problema**: "Estou preso em decisões de design. Não quero perder tempo com CSS, cores e tipografia."

**Solução com Vibe Styles**:
1. Escolha um estilo no Vibe Styles (ex: "Glassmorphism" ou "Dark Mode OLED")
2. Copie o prompt estruturado
3. Cole no ChatGPT/Claude → ele gera HTML/CSS completo com design system definido
4. Customize apenas a lógica de negócio (API, banco de dados, autenticação)

**Estilos recomendados**: Minimalism & Swiss Style, Glassmorphism, Dark Mode OLED, Neumorphism, Accessible & Ethical

---

### 🎨 Você é um Designer sem habilidades de front-end?

**Seu problema**: "Tenho ideias de design, mas não sei codificar. Ferramentas como Figma levam muito tempo."

**Solução com Vibe Styles**:
1. Navegue pelos 256 estilos para se inspirar
2. Copie o prompt de um estilo similar ao seu conceito
3. Customize o prompt (cores, fontes, seções)
4. Cole em Lovable (lovable.dev) ou Claude → ele gera código completo
5. Você recebe HTML/CSS pronto que pode entregar para um time de dev

**Estilos recomendados**: Claymorphism, Aurora UI, 3D & Hyperrealism, Bento Box Grid, Hand-Drawn Sketch

---

### 🏢 Você é uma Agência que precisa delivery rápido?

**Seu problema**: "Meus clientes esperam landing pages em 1-2 semanas, mas cada projeto exige decisões de design do zero. Isso é caro."

**Solução com Vibe Styles**:
1. Use o Vibe Styles como design system compartilhado com clientes
2. Escolha 3-5 estilos base (ex: Minimalism para B2B, Vibrant Block-based para ecommerce)
3. Copie o prompt, customize para o cliente
4. Gere com IA → você ganha 60-70% de velocidade
5. Time de design refina detalhes (copywriting, imagens, otimizações)

**Estilos recomendados por setor**:
- **Fintech/Dados**: Executive Dashboard, Data-Dense, Financial Dashboard
- **SaaS B2B**: Swiss Style, Minimalism, Glassmorphism, Accessible & Ethical
- **Ecommerce**: Vibrant & Block-based, Bento Grid, Y2K Aesthetic
- **Saúde**: Accessible & Ethical, Organic Biophilic, Minimalism Sereno
- **Educação**: Chalkboard, Hand-Drawn, Kawaii, Flat Design Educacional

---

### 📱 Você é Criador de Conteúdo (Gamma, Pitch, Lovable, NotebookLM)?

**Seu problema**: "Preciso criar apresentações, infográficos e landing pages com visual coerente, mas templates genéricos não bastam."

**Solução com Vibe Styles**:
1. Use os prompts do Vibe Styles com **Gamma** (para apresentações) ou **Pitch** (para decks)
2. Use com **NotebookLM** para gerar infográficos + áudio estruturado
3. Use com **Lovable** para landing pages
4. **Resultado**: todo o conteúdo visual segue o mesmo estilo = marca coerente

**Estilos recomendados**:
- **Apresentações**: Gradient Mesh, Editorial Grid, Geometric, Aurora Borealis
- **Infográficos**: Radial Diagram, Timeline Horizontal, Z-Shape, Sakura/Floral
- **Landing Pages**: Hero-Centric, Conversion-Optimized, Feature-Rich Showcase
- **Narrativa/Storytelling**: Parallax Storytelling, Editorial Grid, Ghibli-Inspired

---

### ❓ "Qual estilo escolher para SaaS B2B vs Ecommerce?"

| Use-Case | Estilos Recomendados | Por quê |
|----------|------|--------|
| **SaaS B2B** (Enterprise, Risk-averse) | Minimalism & Swiss Style, Dark Mode OLED, Glassmorphism, Accessible & Ethical | Confiam, seriedade, credibilidade |
| **SaaS B2C** (Jovem, tech-forward) | Aurora UI, Glassmorphism, Bento Grid, 3D & Hyperrealism | Moderno, dinâmico, engajante |
| **Ecommerce** (Conversão alta) | Vibrant & Block-based, Y2K Aesthetic, Flat Design Produtivo, Bento Grid | Chamar atenção, highlight de produtos |
| **Fintech** (Confiança + inovação) | Executive Dashboard, Swiss Modernism 2.0, Minimalism Seguro, Material AI | Profesional + futuro |
| **Educação** (Amigável, lúdico) | Chalkboard, Hand-Drawn, Kawaii, Flat Design Educacional | Acolhimento, criatividade |
| **SaaS Dev** (Tech-forward) | Blueprint Engineering, HUD/Sci-Fi UI, Circuit Board PCB, Brutalist | Técnico, credibilidade com devs |
| **Portfolio/Criativo** (Destaque) | Claymation 3D, Hand-Drawn, Editorial Grid, Ghibli-Inspired | Criatividade pessoal, diferente |
| **Landing Page de Vendas** (CTR alto) | Hero-Centric, Conversion-Optimized, Social Proof-Focused, Trust & Authority | Dirigid ao leitor, psychology-driven |

---

### ❓ "Estou preso em decisões de design. O que ele resolve?"

**Problema**: Você sabe que precisa de uma landing page, mas fica paralizado:
- "Que cores usar?" ❌ → ✅ Vibe Styles define paleta completa + variações
- "Que fonte?" ❌ → ✅ Tipografia + hierarquia já definidas
- "Qual layout?" ❌ → ✅ Estrutura de seções já mapeada
- "Que animações?" ❌ → ✅ Efeitos visuais específicos do estilo
- "Como espaçar?" ❌ → ✅ Design system com variáveis de gap, padding, marging

**Resultado**: você pula direto para a implementação. IA gera a base. Você customiza conteúdo.

---

### ❓ "Meu prompt para IA não funciona. Como o Vibe Styles ajuda?"

**Problema atual**:
```
"Me cria uma landing page bonita"
→ IA retorna algo genérico, sem identidade visual consistente
```

**Com Vibe Styles**:
```
[Copie o prompt completo do estilo Glassmorphism do Vibe Styles]
"Me cria uma landing page para um SaaS de IA usando o estilo definido no prompt..."
→ Resultado: landing page com identidade visual clara, cores coerentes, tipografia definida
```

**Por quê funciona melhor**:
- ✅ Prompt estruturado em seções (Estilo → Cores → Tipografia → Layout → Checklist)
- ✅ Especificações técnicas (CSS, design system variables)
- ✅ Checklist de validação (WCAG, responsividade, hover states)
- ✅ Regras de execução claras (sem espaço para ambiguidade)

---

### ❓ "Todos os estilos incluem prompts prontos?"

Sim. Todos os 256 estilos incluem:
- ✅ Demonstração visual ao vivo (HTML responsivo)
- ✅ Prompt estruturado e testado
- ✅ Paleta de cores (primária, secundária, acentos)
- ✅ Tipografia (fonts, tamanhos, hierarquia)
- ✅ Especificações técnicas (CSS, design system, variáveis)
- ✅ Checklist de validação
- ✅ Regras de execução para IA seguir

---

### ❓ "Posso usar os estilos com Lovable, Gamma, Pitch ou NotebookLM?"

**Sim.** O prompt é agnóstico — funciona em qualquer ferramenta que aceite instruções de texto:

| Ferramenta | Uso | Resultado |
|------------|-----|----------|
| **ChatGPT/Claude** | Cola o prompt → gera HTML/CSS | Landing page code-ready |
| **Lovable** | Cola o prompt → gera app interativa | Landing page live + deployável |
| **Gamma** | Cola o prompt em "Custom style" | Apresentação com estilo visual coerente |
| **Pitch** | Cola o prompt em contexto | Deck com identidade visual |
| **NotebookLM** | Cola como Instruções na geração de Infográfico + áudio + slides | Gerações Pesonalizadas |
| **Gemini** | Ative o modo "CANVA", cole o prompt |  Landing page pronta |
---

### ❓ "Como escolho entre 256 estilos?"

Use este decision tree:

```
1. Qual é seu Use Case?
   → SaaS B2B? → Minimalism, Swiss, Glassmorphism
   → Ecommerce? → Vibrant, Bento, Flat Design
   → Landing Page Vendas? → Hero-Centric, Conversion-Optimized
   → Portfolio/Criativo? → Hand-Drawn, Claymation, Editorial Grid
   → Dashboard/BI? → Executive Dashboard, Data-Dense, Real-Time Monitoring
   → Infográfico? → Radial Diagram, Geometric, Sakura

2. Qual é sua audiência?
   → Risk-averse (Enterprise, Financial)? → Dark, Swiss, Accessible
   → Tech-forward (Devs, Startups)? → Glassmorphism, 3D, Cyberpunk, Blueprint
   → Jovem/Gen-Z? → Y2K, Kawaii, Cyberpunk, Vaporwave
   → Criativo/Artístico? → Hand-Drawn, Claymation, Ghibli-Inspired

3. Qual é o mood que você quer?
   → Minimalista e confiável? → Minimalism, Swiss
   → Moderno e dinâmico? → Glassmorphism, Aurora, 3D
   → Criativo e lúdico? → Hand-Drawn, Kawaii, Claymation
   → Técnico e preciso? → Blueprint, PCB, HUD/Sci-Fi
   → Nostálgico e retro? → Vintage, Retro Travel, 8-Bit
   → Futurista? → Cyberpunk, Holographic, Glitch UI

Depois que escolher → copie o prompt → customize no seu contexto.

DICA: Use a busca, ela compreende todos os campos
 de estilo (categorias, keywords, descrição, etc)

```

---
## Lista de Estilos

Você encontra no arquivo `ESTILOS.md`



## 🔗 Estrutura de URLs

O projeto utiliza URLs semânticas com slugs SEO-friendly:

| Padrão | Exemplo | Descrição |
|--------|---------|-----------|
| `/` | `vibe.ft.ia.br/` | Página principal (galeria) |
| `/{slug}` | `vibe.ft.ia.br/glassmorphism` | Página de detalhe do estilo |
| `/detail.html?id=N` | `/detail.html?id=3` | Fallback retroativo (redireciona para slug) |
| `/styles/{id}.html` | `/styles/3.html` | Iframe de demonstração do estilo |
| `/data/data.json` | `/data/data.json` | Base de dados JSON com todos os estilos e prompts |
| `/llms.txt` | `/llms.txt` | Metadados para crawlers de IA |
| `/sitemap.xml` | `/sitemap.xml` | Sitemap XML para motores de busca |

Os slugs são gerados dinamicamente pela função `generateSlug()` em `utils.js`:
- Acentos são transliterados para ASCII (`ê` → `e`)
- Caracteres especiais são removidos (`&`, `/`, `()`)
- Espaços viram hífens (`Dark Mode (OLED)` → `dark-mode-oled`)
- URLs antigas (`detail.html?id=3`) redirecionam transparentemente para o slug via `history.replaceState`

### Roteamento NGINX (Coolify)

O arquivo `nginx.conf` na raiz do projeto configura o roteamento para deploy no Coolify:
- `/{slug}` → serve `detail.html` (JavaScript resolve o slug)
- `/styles/*.html` → serve arquivos estáticos dos iframes
- Assets com cache longo (1 ano) e gzip habilitado

### Servidor de Desenvolvimento Local

Para testar slugs localmente (sem NGINX), use o dev server com rewrite:

```bash
python3 scripts/dev-server.py 8000
```

Acesse `http://localhost:8001/glassmorphism` — o servidor reescreve URLs de slug para `detail.html`.

---

## 🤖 Integração com IA

O Vibe Styles foi projetado para funcionar como ponte entre referência visual e IA generativa:

### Fluxo de uso

```
1. Navegue pelo catálogo → 2. Encontre o estilo ideal → 3. Copie o prompt → 4. Cole na IA → 5. Gere seu design
```

### Formato do prompt

Cada estilo possui um prompt estruturado contendo:

- **Header**: Instruções contextuais para a IA (papel, tarefa, campos customizáveis)
- **Estilo**: Nome, tipo e keywords do estilo
- **Paleta**: Cores primárias, secundárias e de destaque
- **Tipografia**: Fontes principais, tamanhos e hierarquia
- **Layout**: Estrutura de seções, espaçamentos e organização
- **Elementos Visuais**: Bordas, sombras, animações e detalhes
- **Tags**: Classificação semântica do estilo

### Exemplo de uso

```markdown
# No ChatGPT/Claude/Gemini

Usuário: [Cola o prompt do estilo "Glassmorphism"]

IA: [Gera código HTML/CSS completo no estilo Glassmorphism]
```

---


## 🛠 Stack Tecnológica

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura semântica com Alpine.js directives |
| Tailwind CSS (CDN) | Estilização utilitária responsiva |
| Alpine.js | Reatividade declarativa (v3.x, ~15KB) |
| JavaScript vanilla | Utils customizadas (generateSlug, findCardBySlug, parseRoute, localStorage persistence) |
| Google Fonts | Tipografia (Inter) |
| JSON | Base de dados centralizada de estilos e prompts |

**Zero build tools**, **zero webpack/vite**, **zero npm dependencies**. Arquivos estáticos puros que rodam em qualquer servidor HTTP com Alpine.js via CDN.

### Por que Alpine.js?

✅ **Reatividade declarativa via HTML** — Menos JavaScript boilerplate  
✅ **Debounce built-in** — Perfeito para search/filtros em tempo real  
✅ **Performance** — Diferença <2ms comparado a Vanilla JS  
✅ **Filosofia HTML-first** — Mantém HTML semântico e legível  
✅ **Sem compilação** — Funciona direto do arquivo `.html`

---

## 📊 Números do Projeto

| Métrica | Valor |
|---------|-------|
| Total de estilos | 256 |
| Categorias | 25 |
| Arquivos HTML de estilo | 256 (em expansão) |
| Dependências de build | 0 |
| Frameworks JavaScript | 0 |
| Tamanho do shell (index.html) | ~815 linhas |
| Base de dados | `data.json` (~4300 linhas) |

---

## 📐 Especificações Técnicas

Cada landing page de demonstração segue o padrão:

| Aspecto | Especificação |
|---------|---------------|
| Responsivo | 375px a 1440px |
| Navbar | Nenhuma (exibido dentro de iframe) |
| Tamanho | ~300 linhas máximo |
| Seções | Hero, Features (3), Testimonials (3), Pricing (3 tiers), CTA, Footer |
| Acessibilidade | `prefers-reduced-motion`, alt text, labels |

---

## 🗓 Changelog

- **Fevereiro 2026** — URLs com slug semântico (`/glassmorphism` em vez de `?id=3`). Configuração NGINX para Coolify. Dev server local com rewrite de slugs. Abas pill-style no painel de prompt (Prompt, Origem, Uso, Similar) com scroll independente. Botão "Copiar Prompt" movido para o topo do box. Correção de colisões de slug (IDs 140 e 166 renomeados). Atualização de sitemap, llms.txt e meta tags SEO para URLs com slug.
- **Fevereiro 2026** — Expansão para 256 estilos em 25 categorias. Adição de novas categorias especializadas (Minimalism, Brutalism, Constructivism, SwissStyle, EditorialStyle, HandDrawn, FlatDesign, BentoStyle) e estilos brasileiros temáticos. Migração completa para `data.json`. Atualização de `sitemap.xml` e `llms.txt`.
- **Fevereiro 2026** — Migração dos prompts de arquivos `.txt` individuais para `data.json` centralizado. Novo `DataLoader` no `index.html`. Adição de 90 novos estilos (Tech-Inspired, Thematic, Technical, Futuristic, Pop Culture, Historical, Artistic). Script `generate_html.py` para geração automatizada via LLM.
- **Fevereiro 2026** — Lançamento inicial com 98 estilos, 4 categorias, SEO completo, integração com IA

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Algumas formas de contribuir:

- 🎨 Sugerir novos estilos de UI/UX
- 🐛 Reportar bugs ou inconsistências
- 📝 Melhorar a documentação
- 💻 Implementar HTMLs de estilos faltantes
- ✨ Otimizar prompts existentes

---

## 🙏 Agradecimentos

- **[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** — Pelo skill com a lista curada de estilos de UI/UX, paletas, tipografia e guidelines de implementação que complementaram a base de estilos do projeto.

- **[Manus AI](https://manus.im/app)** — Por gerar os novos prompts (acima do ID 89, todos gerados por ela)


- **[Paolo Cortez](https://www.reddit.com/user/Paolo-Cortez/)** — Pela coleção original de estilos de infográficos para NotebookLM que inspirou alguns prompts desse projeto.

---

<p align="center">
  Feito com 💜 por <a href="https://ft.ia.br/?ref=vibestyles">ft.ia.br</a> com a ajuda do <a href="https://kiro.dev">Kiro</a><br>
  <img src="app/assets/logo-fabricio.png" alt="Vibe Styles Logo" width="80" height="80" style="border-radius: 16px;">
</p>
