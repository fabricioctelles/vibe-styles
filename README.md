<p align="center">
  <a href="README-EN.md"><strong>🇬🇧 Click here for the English Version</strong></a>
</p>

<br>

<p align="center">
  <img src="app/assets/logo.png" alt="Vibe Styles Logo" width="150" style="border-radius: 12px;">
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
- **SEO-friendly** — URLs com slugs semânticos, Schema Markup JSON-LD, Open Graph, sitemap

---

## 🏗 Arquitetura da Aplicação V2

### Estrutura de Projeto

```
vibe-styles-v2/
├── app/
│   ├── index.html                    # Página principal (grid + header sticky + infinite scroll)
│   ├── detail.html                   # Página de detalhe (70% iframe + 30% prompt)
│   ├── data/
│   │   └── styles.json               # JSON centralizado com todos os 256 estilos
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
│   │       └── utils.js              # Helpers (slugify, dark mode, etc)
│   ├── screenshots/                  # Diretório de imagens dos estilos
│   │   ├── 1.png                     # Dark Mode (OLED)
│   │   ├── 2.png
│   │   └── [id].png                  # Uma imagem por estilo
│   ├── llms.txt                      # Metadados para IA
│   ├── sitemap.xml                   # Sitemap para SEO
│   └── robots.txt                    # Controle de crawlers
└── docs/
    └── plans/
        └── 2026-02-18-ui-styles-collection-design.md
```

### Dois Pontos de Entrada

| Página | Função | Características |
|--------|--------|------------------|
| **index.html** | Catálogo visual | Grid responsivo 4/3/2/1 cols, cards em estilo poster, header sticky, infinite scroll (16 cards/carga) |
| **detail.html** | Visualização detalhada | Layout 70/30 (iframe + prompt), responsivo mobile, roteamento via query string (`?id=[id]`) |

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
- **Detalhe**: `detail.html?id=[id]` — Estilo específico com iframe + prompt
- **Iframes**: `app/styles/[id].html` — Demonstração visual do estilo
- **Dados**: `app/data/styles.json` — Fonte única de verdade

**Sem History API** — Roteamento simples via query strings e links diretos

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
┌─────────────────────────────────────────────┐
│ Vibe Styles › Glassmorphism                 │ ← Breadcrumb
├───────────────────────────────────────────────┤
│ Nome: Glassmorphism                         │ ← Metadata
│ Tipo: Visual Effect | Era: 2022+ | #F5F5F7  │    (flexível)
├───────────────────────────────────────────┬─┤
│                                           │ │
│   Iframe (70%)                            │P│
│   app/styles/[id].html                    │r│
│   (full responsivo demonstração)          │o│
│                                           │m│
│                                           │p│
│                                           │t│
│   com:                                    ││
│   - Scroll responsivo                     │(│
│   - Sem navbar                            │3│
│   - Full viewport                         │0│
│                                           │%│
│                                           │)│
│                                           ││
│   [Copy Prompt] ← Topo direito            │ │
│                                           │ │
│                                           │ │
└───────────────────────────────────────────┴─┘
Footer: Copyright © 2024 + Logo ft.ia.br (20px)
```

### Mobile (Responsive Full-Width)

```
┌─────────────────────────────────────────────┐
│ ← Vibe Styles › Glassmorphism               │ ← Back link
├─────────────────────────────────────────────┤
│ Iframe 100% Width, Full Height              │
│ (Sem painel de prompt — mobile-focused)     │
│                                             │
│ [📋 Copy Prompt] (Floating bottom-right)    │
│                                             │
└─────────────────────────────────────────────┘
```

**Comportamento:**
- Em desktop: layout lado-a-lado 70/30
- Em mobile: iframe fullscreen, prompt em floating button
- Metadata do estilo em header enriquecido
- Botão "Copiar Prompt" com feedback visual ("✅ Copiado!" por 2 segundos)

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

# Sirva os arquivos estáticos (qualquer servidor HTTP funciona)
python3 -m http.server 8000 --directory app
# ou
npx serve app
# ou
php -S localhost:8000 -t app
```

Acesse `http://localhost:8000` no navegador.

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
| **NotebookLM** | Cola como "Context" → adiciona dados | Infográfico + áudio + slides |

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
```

---



### 🟣 General (110 estilos)

Estilos de interface de uso geral — tendências modernas e clássicas:

| # | Estilo | Slug |
|---|--------|------|
| 1 | Minimalism & Swiss Style | `minimalism-swiss-style` |
| 2 | Neumorphism | `neumorphism` |
| 3 | Glassmorphism | `glassmorphism` |
| 4 | Brutalism | `brutalism` |
| 5 | 3D & Hyperrealism | `3d-hyperrealism` |
| 6 | Vibrant & Block-based | `vibrant-block-based` |
| 7 | Dark Mode (OLED) | `dark-mode-oled` |
| 8 | Accessible & Ethical | `accessible-ethical` |
| 9 | Claymorphism | `claymorphism` |
| 10 | Aurora UI | `aurora-ui` |
| 11 | Retro-Futurism | `retro-futurism` |
| 12 | Flat Design | `flat-design` |
| 13 | Skeuomorphism | `skeuomorphism` |
| 14 | Liquid Glass | `liquid-glass` |
| 15 | Motion-Driven | `motion-driven` |
| 16 | Micro-interactions | `micro-interactions` |
| 17 | Inclusive Design | `inclusive-design` |
| 18 | Zero Interface | `zero-interface` |
| 19 | Soft UI Evolution | `soft-ui-evolution` |
| 38 | Neubrutalism | `neubrutalism` |
| 39 | Bento Box Grid | `bento-box-grid` |
| 40 | Y2K Aesthetic | `y2k-aesthetic` |
| 41 | Cyberpunk UI | `cyberpunk-ui` |
| 42 | Organic Biophilic | `organic-biophilic` |
| 43 | AI-Native UI | `ai-native-ui` |
| 44 | Memphis Design | `memphis-design` |
| 45 | Vaporwave | `vaporwave` |
| 46 | Dimensional Layering | `dimensional-layering` |
| 47 | Exaggerated Minimalism | `exaggerated-minimalism` |
| 48 | Kinetic Typography | `kinetic-typography` |
| 49 | Parallax Storytelling | `parallax-storytelling` |
| 50 | Swiss Modernism 2.0 | `swiss-modernism-2-0` |
| 51 | HUD / Sci-Fi FUI | `hud-sci-fi-fui` |
| 52 | Pixel Art | `pixel-art` |
| 53 | Bento Grids | `bento-grids` |
| 55 | Spatial UI (VisionOS) | `spatial-ui-visionos` |
| 56 | E-Ink / Paper | `e-ink-paper` |
| 57 | Gen Z Chaos / Maximalism | `gen-z-chaos-maximalism` |
| 58 | Biomimetic / Organic 2.0 | `biomimetic-organic-2-0` |
| 59 | Anti-Polish / Raw Aesthetic | `anti-polish-raw-aesthetic` |
| 60 | Tactile Digital / Deformable UI | `tactile-digital-deformable-ui` |
| 61 | Nature Distilled | `nature-distilled` |
| 62 | Interactive Cursor Design | `interactive-cursor-design` |
| 63 | Voice-First Multimodal | `voice-first-multimodal` |
| 64 | 3D Product Preview | `3d-product-preview` |
| 65 | Gradient Mesh / Aurora Evolved | `gradient-mesh-aurora-evolved` |
| 66 | Editorial Grid / Magazine | `editorial-grid-magazine` |
| 67 | Chromatic Aberration / RGB Split | `chromatic-aberration-rgb-split` |
| 68 | Vintage Analog / Retro Film | `vintage-analog-retro-film` |
| 69 | Art Deco / Golden Age | `art-deco-golden-age` |
| 70 | Risograph / Retro-Pop | `risograph-retro-pop` |
| 71 | Ancient Egyptian / Historical | `ancient-egyptian-historical` |
| 72 | Vintage Lithograph / Victorian | `vintage-lithograph-victorian` |
| 73 | Comic Book / Pop Art | `comic-book-pop-art` |
| 74 | Kawaii / Sweet Pastel | `kawaii-sweet-pastel` |
| 75 | Isometric Gaming / Voxel | `isometric-gaming-voxel` |
| 76 | Chalkboard / Hand-Drawn | `chalkboard-hand-drawn` |
| 77 | Bauhaus / Risograph Modern | `bauhaus-risograph-modern` |
| 78 | Steampunk Industrial | `steampunk-industrial` |
| 79 | Circuit Board / PCB | `circuit-board-pcb` |
| 80 | Retro Travel Poster | `retro-travel-poster` |
| 81 | Vaporwave Aesthetic | `vaporwave-aesthetic` |
| 82 | Vintage Botanical / Scientific | `vintage-botanical-scientific` |
| 83 | Horror / Gothic Dark | `horror-gothic-dark` |
| 84 | Blueprint / Engineering | `blueprint-engineering` |
| 85 | Studygram / Notebook Kawaii | `studygram-notebook-kawaii` |
| 86 | Claymation 3D | `claymation-3d` |
| 100 | Grunge Rock dos Anos 90 | `grunge-rock-dos-anos-90` |
| 101 | Art Nouveau Florido | `art-nouveau-florido` |
| 102 | Flat Design Corporativo | `flat-design-corporativo` |
| 103 | Steampunk Vitoriano | `steampunk-vitoriano` |
| 104 | De Stijl Abstrato | `de-stijl-abstrato` |
| 105 | Cyber-Tribal | `cyber-tribal` |
| 106 | Rococó Delicado | `rococo-delicado` |
| 107 | Swiss Design Gráfico | `swiss-design-grafico` |
| 108 | Psicodélico Anos 60 | `psicodelico-anos-60` |
| 109 | Gótico Moderno | `gotico-moderno` |
| 110 | Solarpunk Utópico | `solarpunk-utopico` |
| 111 | Afrofuturismo Digital | `afrofuturismo-digital` |
| 112 | Cerâmica Wabi-Sabi | `ceramica-wabi-sabi` |
| 113 | Cassette Futurism | `cassette-futurism` |
| 114 | Azulejo Português | `azulejo-portugues` |
| 115 | Brutalist Web Design | `brutalist-web-design` |
| 116 | Aurora Boreal Nórdica | `aurora-boreal-nordica` |
| 117 | Origami Geométrico | `origami-geometrico` |
| 118 | Noir Detetive | `noir-detetive` |
| 119 | Terracota Mediterrâneo | `terracota-mediterraneo` |
| 234 | Lambe-Lambe Brasileiro | `lambe-lambe-brasileiro` |
| 235 | Cartazista de Supermercado | `cartazista-de-supermercado` |
| 236 | Happy Art Tropical | `happy-art-tropical` |
| 237 | Azulejaria Digital Moderna | `azulejaria-digital-moderna` |
| 238 | Modernismo Jornalístico Brasileiro | `modernismo-jornalistico-brasileiro` |
| 239 | Geometria Artesanal Brasileira | `geometria-artesanal-brasileira` |
| 240 | Arquitetura Moderna Brasileira | `arquitetura-moderna-brasileira` |
| 241 | Festival Modernista Vibrante | `festival-modernista-vibrante` |
| 242 | Tropicalismo Orgânico Luxuoso | `tropicalismo-organico-luxuoso` |
| 243 | Tropicalismo Botânico Suave | `tropicalismo-botanico-suave` |
| 244 | Tropicalismo Gastronômico Vibrante | `tropicalismo-gastronomico-vibrante` |
| 245 | Tropicalismo Indígena Autêntico | `tropicalismo-indigena-autentico` |
| 246 | Tropicalismo Aventureiro Natural | `tropicalismo-aventureiro-natural` |
| 247 | Conforto Artesanal Brasileiro | `conforto-artesanal-brasileiro` |
| 248 | Vernacular Acolhedor Brasileiro | `vernacular-acolhedor-brasileiro` |
| 249 | Reuso Criativo Disruptivo | `reuso-criativo-disruptivo` |
| 250 | Design Autoral Robusto | `design-autoral-robusto` |
| 251 | Culinária Afetiva Brasileira | `culinaria-afetiva-brasileira` |
| 252 | Símbolos Cívicos Brasileiros | `simbolos-civicos-brasileiros` |
| 253 | Símbolos Ambientais Brasileiros | `simbolos-ambientais-brasileiros` |
| 254 | Símbolos Culturais Brasileiros | `simbolos-culturais-brasileiros` |
| 255 | Símbolos Regionais Brasileiros | `simbolos-regionais-brasileiros` |
| 256 | Símbolos Políticos Brasileiros | `simbolos-politicos-brasileiros` |

### 🟢 Landing Page (8 estilos)

Padrões otimizados para páginas de conversão e vendas:

| # | Estilo | Slug |
|---|--------|------|
| 20 | Hero-Centric Design | `hero-centric-design` |
| 21 | Conversion-Optimized | `conversion-optimized` |
| 22 | Feature-Rich Showcase | `feature-rich-showcase` |
| 23 | Minimal & Direct | `minimal-direct` |
| 24 | Social Proof-Focused | `social-proof-focused` |
| 25 | Interactive Product Demo | `interactive-product-demo` |
| 26 | Trust & Authority | `trust-authority` |
| 27 | Storytelling-Driven | `storytelling-driven` |

### 🟡 BI/Analytics (10 estilos)

Dashboards e visualização de dados corporativos:

| # | Estilo | Slug |
|---|--------|------|
| 28 | Data-Dense Dashboard | `data-dense-dashboard` |
| 29 | Heat Map & Heatmap Style | `heat-map-heatmap-style` |
| 30 | Executive Dashboard | `executive-dashboard` |
| 31 | Real-Time Monitoring | `real-time-monitoring` |
| 32 | Drill-Down Analytics | `drill-down-analytics` |
| 33 | Comparative Analysis Dashboard | `comparative-analysis-dashboard` |
| 34 | Predictive Analytics | `predictive-analytics` |
| 35 | User Behavior Analytics | `user-behavior-analytics` |
| 36 | Financial Dashboard | `financial-dashboard` |
| 37 | Sales Intelligence Dashboard | `sales-intelligence-dashboard` |

### 🔵 Organization (1 estilos)

Estilos organizacionais e corporativos:

| # | Estilo | Slug |
|---|--------|------|
| 54 | Knolling Pastel Flat Lay | `knolling-pastel-flat-lay` |

### 🔴 Infographic (13 estilos)

Estilos visuais para infográficos e apresentação de informações:

| # | Estilo | Slug |
|---|--------|------|
| 87 | Radial Diagram / Donut Chart | `radial-diagram-donut-chart` |
| 88 | Timeline Horizontal Corporativo | `timeline-horizontal-corporativo` |
| 89 | Z-Shape | `z-shape` |
| 90 | Natureza / Elementos Botânicos | `natureza-elementos-botanicos` |
| 91 | Elementos Musicais | `elementos-musicais` |
| 92 | Degraded Colorful / Vibrant Gradient | `degraded-colorful-vibrant-gradient` |
| 93 | Dark Glassmorphism Infographic | `dark-glassmorphism-infographic` |
| 94 | Sakura / Floral Japonês | `sakura-floral-japones` |
| 95 | Underwater / Aquático | `underwater-aquatico` |
| 96 | Mixed Reality / VR-AR | `mixed-reality-vr-ar` |
| 97 | Gradient Aurora Borealis | `gradient-aurora-borealis` |
| 98 | Doodle / Sketch Livre | `doodle-sketch-livre` |
| 99 | Geometric | `geometric` |

### 🔵 Tech-Inspired (20 estilos)

Estilos inspirados em grandes empresas de tecnologia:

| # | Estilo | Slug |
|---|--------|------|
| 120 | Estilo Deep Learning High-Tech | `estilo-deep-learning-high-tech` |
| 121 | Estilo de Elegância Espacial | `estilo-de-elegancia-espacial` |
| 122 | Estilo Material AI | `estilo-material-ai` |
| 123 | Estilo Fluent AI | `estilo-fluent-ai` |
| 124 | Estilo de Experiência de Compra Contínua | `estilo-de-experiencia-de-compra-continua` |
| 125 | Estilo de Realidade Virtual Social | `estilo-de-realidade-virtual-social` |
| 126 | Estilo de Tecnologia de Precisão | `estilo-de-tecnologia-de-precisao` |
| 127 | Estilo de Fluxo de Rede | `estilo-de-fluxo-de-rede` |
| 128 | Estilo de Ecossistema Digital | `estilo-de-ecossistema-digital` |
| 129 | Estilo de Litografia de Precisão | `estilo-de-litografia-de-precisao` |
| 130 | Estilo de Dados Empresariais | `estilo-de-dados-empresariais` |
| 131 | Estilo de Inovação em Dispositivos Móveis | `estilo-de-inovacao-em-dispositivos-moveis` |
| 132 | Estilo de IA Criativa | `estilo-de-ia-criativa` |
| 133 | Estilo de IA para Negócios | `estilo-de-ia-para-negocios` |
| 134 | Estilo de Computação de Alta Performance | `estilo-de-computacao-de-alta-performance` |
| 135 | Estilo de Futuro Autônomo | `estilo-de-futuro-autonomo` |
| 136 | Estilo de Entretenimento Imersivo | `estilo-de-entretenimento-imersivo` |
| 137 | Estilo de Elegância Fintech | `estilo-de-elegancia-fintech` |
| 138 | Estilo de Inteligência Generativa | `estilo-de-inteligencia-generativa` |
| 139 | Estilo de IA Ética | `estilo-de-ia-etica` |

### 🟠 Thematic (11 estilos)

Estilos temáticos com identidade visual forte:

| # | Estilo | Slug |
|---|--------|------|
| 140 | Underwater Aquático | `underwater-aquatico` |
| 141 | SaaS Enterprise Analytics | `saas-enterprise-analytics` |
| 142 | HealthTech Plataforma Clínica | `healthtech-plataforma-clinica` |
| 143 | FinTech Plataforma Financeira | `fintech-plataforma-financeira` |
| 144 | EdTech Plataforma de Cursos | `edtech-plataforma-de-cursos` |
| 145 | Portfolio Dev Full-Stack | `portfolio-dev-full-stack` |
| 146 | Real Estate Imobiliária Digital | `real-estate-imobiliaria-digital` |
| 147 | Fitness App de Treinos | `fitness-app-de-treinos` |
| 148 | Travel Plataforma de Viagens | `travel-plataforma-de-viagens` |
| 149 | Crypto Exchange Plataforma | `crypto-exchange-plataforma` |
| 169 | Passport Travel UI | `passport-travel-ui` |

### 🔵 Technical (8 estilos)

Estilos técnicos e especializados:

| # | Estilo | Slug |
|---|--------|------|
| 150 | Engineering Blueprint Schematic | `engineering-blueprint-schematic` |
| 151 | PCB Schematic Architecture | `pcb-schematic-architecture` |
| 152 | Industrial Workbench Schematic | `industrial-workbench-schematic` |
| 153 | Architectural Schematic | `architectural-schematic` |
| 154 | CAD-Inspired Blueprint | `cad-inspired-blueprint` |
| 155 | Denim and Industrial Craft | `denim-and-industrial-craft` |
| 156 | Bento Grid Tech Minimalist | `bento-grid-tech-minimalist` |
| 157 | Neumorphic Tech Schematic | `neumorphic-tech-schematic` |

### 🟡 Data Visualization (1 estilos)

Visualização de dados especializada:

| # | Estilo | Slug |
|---|--------|------|
| 158 | Corporate Radial Process | `corporate-radial-process` |

### 🟣 Artistic (3 estilos)

Estilos artísticos e expressivos:

| # | Estilo | Slug |
|---|--------|------|
| 159 | Sumi-e Tech Scroll | `sumi-e-tech-scroll` |
| 160 | Ghibli-Inspired Narrative Map | `ghibli-inspired-narrative-map` |
| 161 | Ukiyo-e Woodblock Revival | `ukiyo-e-woodblock-revival` |

### 🟤 Historical (5 estilos)

Estilos inspirados em períodos históricos:

| # | Estilo | Slug |
|---|--------|------|
| 162 | Ancient Egyptian Instructional Scroll | `ancient-egyptian-instructional-scroll` |
| 163 | Gatsby Art Deco Noir | `gatsby-art-deco-noir` |
| 164 | Belle Époque Lithograph | `belle-epoque-lithograph` |
| 165 | Rococo Romantic Narrative | `rococo-romantic-narrative` |
| 166 | Vintage Botanical Scientific | `vintage-botanical-scientific` |

### 🟣 Fantasy (1 estilos)

Estilos de fantasia e mundos imaginários:

| # | Estilo | Slug |
|---|--------|------|
| 167 | Steampunk Nebula Explorer | `steampunk-nebula-explorer` |

### 🟢 Casual (1 estilos)

Estilos casuais e descontraídos:

| # | Estilo | Slug |
|---|--------|------|
| 168 | Hand-Drawn Sketch-Note | `hand-drawn-sketch-note` |

### 🔵 Futuristic (8 estilos)

Estilos futuristas e de ficção científica:

| # | Estilo | Slug |
|---|--------|------|
| 170 | Cyberpunk Neon Noir | `cyberpunk-neon-noir` |
| 171 | Hacker Aesthetic CRT/CLI | `hacker-aesthetic-crt-cli` |
| 172 | Holographic Data-Viz | `holographic-data-viz` |
| 173 | Thermal Insight Tech | `thermal-insight-tech` |
| 174 | Futuristic UI Glassmorphism | `futuristic-ui-glassmorphism` |
| 175 | Fractal Bioluminescence | `fractal-bioluminescence` |
| 176 | Glitch UI Dystopian Terminal | `glitch-ui-dystopian-terminal` |
| 177 | Cyberpunk Dark Mode Flow | `cyberpunk-dark-mode-flow` |

### 🟣 Pop Culture (9 estilos)

Estilos inspirados em cultura pop, filmes e séries:

| # | Estilo | Slug |
|---|--------|------|
| 178 | Retro-Comic Action Blueprint | `retro-comic-action-blueprint` |
| 179 | Manga Instructional Comic | `manga-instructional-comic` |
| 180 | Claymation 3D Illustration | `claymation-3d-illustration` |
| 181 | Risograph Zine Aesthetic | `risograph-zine-aesthetic` |
| 182 | 70s Psychedelic Flower Power | `70s-psychedelic-flower-power` |
| 183 | American Diner Americana | `american-diner-americana` |
| 184 | Kawaii Pastel Pop | `kawaii-pastel-pop` |
| 185 | Versus Mode Anime Aesthetic | `versus-mode-anime-aesthetic` |
| 187 | Voxel Gamified Isometric | `voxel-gamified-isometric` |

### 🟠 Retro (6 estilos)

Estilos retrô e nostálgicos:

| # | Estilo | Slug |
|---|--------|------|
| 186 | 8-Bit Retro Terminal | `8-bit-retro-terminal` |
| 219 | Retro Arcade Pixelado | `retro-arcade-pixelado` |
| 220 | Retro Boutique Vintage | `retro-boutique-vintage` |
| 221 | Retro Barbershop Clássica | `retro-barbershop-classica` |
| 222 | Retro Aventura Anos 70 | `retro-aventura-anos-70` |
| 223 | Retro Digital Anos 90 | `retro-digital-anos-90` |

### 🔵 Educational (1 estilos)

Estilos educacionais e didáticos:

| # | Estilo | Slug |
|---|--------|------|
| 188 | Chalkboard Sketch-Note | `chalkboard-sketch-note` |

### ⚪ Minimalism (5 estilos)

Estilos minimalistas limpos e funcionais:

| # | Estilo | Slug |
|---|--------|------|
| 189 | Minimalismo Funcional B2B | `minimalismo-funcional-b2b` |
| 190 | Minimalismo Fotográfico Elegante | `minimalismo-fotografico-elegante` |
| 191 | Minimalismo Chic de Luxo | `minimalismo-chic-de-luxo` |
| 192 | Minimalismo Sereno de Bem-Estar | `minimalismo-sereno-de-bem-estar` |
| 193 | Minimalismo Confiável Financeiro | `minimalismo-confiavel-financeiro` |

### ⚫ Brutalism (5 estilos)

Estilos brutalistas ousados e diretos:

| # | Estilo | Slug |
|---|--------|------|
| 194 | Neobrutalismo Ousado | `neobrutalismo-ousado` |
| 195 | Brutalismo Sonoro Glitch | `brutalismo-sonoro-glitch` |
| 196 | Brutalismo Artístico Abstrato | `brutalismo-artistico-abstrato` |
| 197 | Neobrutalismo Crítico | `neobrutalismo-critico` |
| 198 | Brutalismo Urbano Expressivo | `brutalismo-urbano-expressivo` |

### 🔺 Constructivism (5 estilos)

Estilos construtivistas geométricos e estruturados:

| # | Estilo | Slug |
|---|--------|------|
| 199 | Construtivismo Dinâmico Tech | `construtivismo-dinamico-tech` |
| 200 | Construtivismo Arquitetônico | `construtivismo-arquitetonico` |
| 201 | Construtivismo de Dados Dinâmicos | `construtivismo-de-dados-dinamicos` |
| 202 | Construtivismo de Eventos Dinâmicos | `construtivismo-de-eventos-dinamicos` |
| 203 | Construtivismo Literário Experimental | `construtivismo-literario-experimental` |

### 🟥 SwissStyle (5 estilos)

Estilos Swiss Design com tipografia e grid:

| # | Estilo | Slug |
|---|--------|------|
| 204 | Estilo Suíço Corporativo | `estilo-suico-corporativo` |
| 205 | Estilo Suíço Premium | `estilo-suico-premium` |
| 206 | Estilo Suíço Científico | `estilo-suico-cientifico` |
| 207 | Estilo Suíço Artístico | `estilo-suico-artistico` |
| 208 | Estilo Suíço Educacional | `estilo-suico-educacional` |

### 📰 EditorialStyle (5 estilos)

Estilos editoriais inspirados em revistas e publicações:

| # | Estilo | Slug |
|---|--------|------|
| 209 | Editorial Contemporâneo | `editorial-contemporaneo` |
| 210 | Editorial de Viagem Sofisticado | `editorial-de-viagem-sofisticado` |
| 211 | Editorial de Portfólio Criativo | `editorial-de-portfolio-criativo` |
| 212 | Editorial Investigativo Sóbrio | `editorial-investigativo-sobrio` |
| 213 | Editorial Interativo Digital | `editorial-interativo-digital` |

### ✏️ HandDrawn (5 estilos)

Estilos hand-drawn artesanais e orgânicos:

| # | Estilo | Slug |
|---|--------|------|
| 214 | Desenho à Mão Lúdico | `desenho-a-mao-ludico` |
| 215 | Artesanato Orgânico e Acolhedor | `artesanato-organico-e-acolhedor` |
| 216 | Café Artesanal Aconchegante | `cafe-artesanal-aconchegante` |
| 217 | Criatividade Artesanal e Pessoal | `criatividade-artesanal-e-pessoal` |
| 218 | Aprendizado Criativo Artesanal | `aprendizado-criativo-artesanal` |

### 🔷 FlatDesign (5 estilos)

Estilos flat design limpos e bidimensionais:

| # | Estilo | Slug |
|---|--------|------|
| 224 | Flat Design Produtivo | `flat-design-produtivo` |
| 225 | Flat Design Educacional Vibrante | `flat-design-educacional-vibrante` |
| 226 | Flat Design Musical Intuitivo | `flat-design-musical-intuitivo` |
| 227 | Flat Design Informativo Claro | `flat-design-informativo-claro` |
| 228 | Flat Design Financeiro Seguro | `flat-design-financeiro-seguro` |

### 🍱 BentoStyle (5 estilos)

Estilos bento com layout em grade modular:

| # | Estilo | Slug |
|---|--------|------|
| 229 | Bento Produtividade Flexível | `bento-produtividade-flexivel` |
| 230 | Bento Dados Estruturados | `bento-dados-estruturados` |
| 231 | Bento Portfólio de Produto | `bento-portfolio-de-produto` |
| 232 | Bento Notícias Curadas | `bento-noticias-curadas` |
| 233 | Bento Eventos Dinâmicos | `bento-eventos-dinamicos` |

---

## 🔗 Estrutura de URLs

O projeto utiliza URLs semânticas com slugs SEO-friendly:

| Padrão | Exemplo | Descrição |
|--------|---------|-----------|
| `/` | `vibe.ft.ia.br/` | Página principal (showcase) |
| `/styles/{slug}` | `/styles/glassmorphism` | Visualização de um estilo específico |
| `/data/data.json` | `/data/data.json` | Base de dados JSON com todos os estilos e prompts |
| `/llms.txt` | `/llms.txt` | Metadados para crawlers de IA |
| `/sitemap.xml` | `/sitemap.xml` | Sitemap XML para motores de busca |

Os slugs são gerados automaticamente a partir do nome do estilo:
- Acentos são transliterados para ASCII (`ê` → `e`)
- Caracteres especiais são removidos (`&`, `/`, `()`)
- Espaços viram hifens (`Dark Mode (OLED)` → `dark-mode-oled`)
- URLs numéricas antigas (`/styles/3.html`) redirecionam via 301 para o slug correspondente

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

## 📁 Estrutura do Projeto (Atual)

Ver [seção "Arquitetura da Aplicação V2"](#-arquitetura-da-aplicação-v2) acima para estrutura visual completa.

Resumo rápido:

```
vibe-styles/
├── app/
│   ├── index.html                  # Home: grid + header sticky + infinite scroll
│   ├── detail.html                 # Detail: layout 70/30 iframe+prompt responsivo
│   ├── data/
│   │   └── styles.json             # Centralizado: 256 estilos + prompts estruturados
│   ├── styles/
│   │   ├── 1.html → 256.html       # Iframes dos designs (um por estilo)
│   ├── screenshots/
│   │   ├── 1.png → 256.png         # Previews 16:9 dos estilos para grid
│   ├── assets/
│   │   ├── images/                 # Logos e recursos gráficos
│   │   ├── css/animations.css      # Animações customizadas
│   │   └── js/utils.js             # Helpers (dark mode, slugify, etc)
│   ├── llms.txt                    # Metadados para crawlers de IA
│   ├── sitemap.xml                 # Sitemap XML para SEO
│   └── robots.txt                  # Controle de crawlers
├── scripts/
│   ├── generate_html.py            # Gerador automatizado de HTMLs via LLM
│   └── migrate-to-json.py          # Migração de prompts .txt para JSON
├── docs/
│   └── plans/
│       └── 2026-02-18-ui-styles-collection-design.md
└── README.md
```

---

## 🛠 Stack Tecnológica

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura semântica com Alpine.js directives |
| Tailwind CSS (CDN) | Estilização utilitária responsiva |
| Alpine.js | Reatividade declarativa (v3.x, ~15KB) |
| JavaScript vanilla | Utils customizadas (slugify, localStorage persistence) |
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

- **Fevereiro 2026** — Expansão para 256 estilos em 25 categorias. Adição de novas categorias especializadas (Minimalism, Brutalism, Constructivism, SwissStyle, EditorialStyle, HandDrawn, FlatDesign, BentoStyle) e estilos brasileiros temáticos. Migração completa para `data.json`. Atualização de `sitemap.xml` e `llms.txt`.
- **Fevereiro 2026** — Migração dos prompts de arquivos `.txt` individuais para `data.json` centralizado. Novo `DataLoader` no `index.html`. Adição de 90 novos estilos (Tech-Inspired, Thematic, Technical, Futuristic, Pop Culture, Historical, Artistic). Script `generate_html.py` para geração automatizada via LLM.
- **Fevereiro 2026** — Lançamento inicial com 98 estilos, 4 categorias, roteamento por slugs, SEO completo, integração com IA

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
  Feito com 💜 por <a href="https://ft.ia.br">ft.ia.br</a> com a ajuda do <a href="https://kiro.dev">Kiro</a><br>
  <img src="app/assets/logo-fabricio.png" alt="Vibe Styles Logo" width="80" height="80" style="border-radius: 16px;">
</p>
