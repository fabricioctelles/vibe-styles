<h1 align="center">🎨 Vibe Styles</h1>

<p align="center">
  Coleção interativa com <strong>98 estilos de UI/UX design</strong> — cada um com demonstração visual ao vivo e prompt copiável para IA generativa.
</p>

<p align="center">
  <a href="https://vibe.ft.ia.br/">🌐 Demo ao Vivo</a> ·
  <a href="https://github.com/fabricioctelles/vibe-styles">💻 GitHub</a> ·
  <a href="#-categorias">📂 Categorias</a> ·
  <a href="#-como-usar">🚀 Como Usar</a> ·
  <a href="#-catálogo-completo">📋 Catálogo</a> ·
  <a href="#-contribuindo">🤝 Contribuindo</a>
</p>

<p align="center">
  <a href="https://github.com/fabricioctelles/vibe-styles/stargazers"><img src="https://img.shields.io/github/stars/fabricioctelles/vibe-styles?style=for-the-badge&logo=github&labelColor=1E293B&color=8B5CF6" alt="GitHub Stars"></a>
  <img src="https://img.shields.io/badge/estilos-98-8B5CF6?style=for-the-badge&labelColor=1E293B" alt="98 Estilos">
  <img src="https://img.shields.io/badge/categorias-4-10B981?style=for-the-badge&labelColor=1E293B" alt="4 Categorias">
  <img src="https://img.shields.io/badge/stack-HTML%20%2B%20Tailwind%20%2B%20JS-38BDF8?style=for-the-badge&labelColor=1E293B" alt="Stack">
  <img src="https://img.shields.io/badge/idioma-PT--BR-F59E0B?style=for-the-badge&labelColor=1E293B" alt="Português Brasileiro">
  <img src="https://img.shields.io/badge/licença-open--source-EC4899?style=for-the-badge&labelColor=1E293B" alt="Open Source">
</p>

---

## 📖 Sobre o Projeto

O **Vibe Styles** é uma referência visual completa para designers e desenvolvedores que trabalham com UI/UX. O projeto reúne 98 estilos de design — de Glassmorphism a Cyberpunk, de Brutalism a Kawaii — cada um implementado como uma landing page standalone com HTML, Tailwind CSS e JavaScript vanilla.

O diferencial: cada estilo vem com um **prompt copiável** otimizado para ferramentas de IA generativa (ChatGPT, Claude, Gemini, etc.), permitindo que você reproduza qualquer estilo instantaneamente nos seus projetos.

### Inspiração

Tudo começou com um [post no Reddit](https://www.reddit.com/r/notebooklm/comments/1r2p1bb/40_notebooklm_infographic_styles_specification/) do [Paolo Cortez](https://www.reddit.com/user/Paolo-Cortez/), que compartilhou uma coleção de prompts de estilos de infográficos para o NotebookLM. As especificações estavam tão bem estruturadas — com paletas de cores, tipografia, texturas e tags — que poderiam facilmente servir como especificações de estilos para landing pages.

Isso me lembrou do [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), um skill que também mantém uma [lista curada de estilos de UI/UX](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/src/ui-ux-pro-max/data/styles.csv) com foco em implementação prática.

Fiz o merge das duas listas e usei o [Kiro](https://kiro.dev) com multi-agentes para gerar os prompts dinâmicos e criar as quase 100 páginas de demonstração de forma automatizada.

A intenção é ser simples e direto: ajudar você a escolher o estilo certo para o seu SaaS ou projetinho de fim de semana.

### Por que o Vibe Styles existe?

- **Referência rápida** — Navegue visualmente por 98 estilos sem sair do navegador
- **Prompts prontos** — Copie e cole em qualquer IA generativa para replicar o estilo
- **Código real** — Cada estilo é uma implementação funcional, não apenas um mockup
- **Zero dependências** — HTML estático + Tailwind CDN + Google Fonts. Sem build, sem framework
- **SEO-friendly** — URLs com slugs semânticos, Schema Markup JSON-LD, Open Graph, sitemap

---

## 🗂 Categorias

O acervo está organizado em **4 categorias** que cobrem os principais cenários de design:

| Categoria | Qtd | Descrição | Badge |
|-----------|-----|-----------|-------|
| **General** | 66 | Estilos de interface de uso geral — tendências modernas e clássicas | 🟣 Violeta |
| **Landing Page** | 8 | Padrões otimizados para páginas de conversão e vendas | 🟢 Esmeralda |
| **BI/Analytics** | 10 | Dashboards e visualização de dados corporativos | 🟡 Âmbar |
| **Infographic** | 13 | Estilos visuais para infográficos e apresentação de informações | 🔴 Rosa |

---

## 🚀 Como Usar

### Navegação Online

1. Acesse **[vibe.ft.ia.br](https://vibe.ft.ia.br/)**
2. Selecione um estilo no dropdown da barra de navegação
3. Visualize a demonstração ao vivo no painel central
4. Clique em **"Copiar Prompt"** para copiar o prompt do estilo
5. Cole o prompt no ChatGPT, Claude, Gemini ou qualquer IA generativa

### Execução Local

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/vibe-styles.git
cd vibe-styles

# Sirva os arquivos estáticos (qualquer servidor HTTP funciona)
# Opção 1: Python
python3 -m http.server 8000 -d app

# Opção 2: Node.js (npx)
npx serve app

# Opção 3: PHP
php -S localhost:8000 -t app
```

Acesse `http://localhost:8000` e pronto.

> **Nota:** O projeto não requer instalação de dependências, build ou compilação. São arquivos HTML estáticos que funcionam diretamente no navegador.

Para facilitar você pode rodar na pasta app o comando:

```
 cd app && \
 python3 -m http.server 8080
 
 ```

---

## 🏗 Arquitetura do Projeto

```
vibe-styles/
├── app/
│   ├── index.html              # Shell principal — navbar + dropdown + iframe
│   ├── llms.txt                # Metadados para crawlers de IA (LLMs)
│   ├── robots.txt              # Regras de crawling
│   ├── sitemap.xml             # Sitemap com 98 URLs de slug
│   ├── assets/
│   │   └── logo-fabricio.png   # Logo do criador
│   ├── prompts/
│   │   ├── .htaccess           # Regras de acesso
│   │   ├── 1.txt               # Prompt do estilo #1
│   │   ├── 2.txt               # Prompt do estilo #2
│   │   └── ...                 # 98 arquivos de prompt (IDs 1-99, exceto 54)
│   └── styles/
│       ├── .htaccess           # Rewrite rules para slugs SEO
│       ├── 1.html              # Landing page do estilo #1
│       ├── 2.html              # Landing page do estilo #2
│       └── ...                 # 98 páginas HTML standalone
└── README.md
```

### Como funciona

O `index.html` é um shell leve que contém:
- Uma **navbar fixa** com dropdown de seleção de estilos (agrupados por categoria)
- Um **iframe** que carrega a página standalone do estilo selecionado (`styles/{id}.html`)
- Um botão **"Copiar Prompt"** que busca o arquivo `prompts/{id}.txt` via fetch e copia para o clipboard
- **Roteamento por slugs** — URLs semânticas como `/styles/glassmorphism` via History API
- **Meta tags dinâmicas** — Title, description, Open Graph e Twitter Card atualizados por estilo
- **Schema Markup JSON-LD** — CreativeWork + ItemList + FAQPage para SEO estruturado

Cada página de estilo (`styles/{id}.html`) é uma landing page completa e independente com:
- Tailwind CSS via CDN
- Google Fonts
- Ícones SVG inline (sem emojis)
- 6 seções: Hero, Features, Testimonials, Pricing, CTA e Footer
- Conteúdo em português brasileiro
- Responsivo de 375px a 1440px
- Suporte a `prefers-reduced-motion`

---

## 🛠 Stack Tecnológica

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica de todas as páginas |
| **Tailwind CSS** (CDN) | Estilização utilitária — sem build necessário |
| **JavaScript Vanilla** | Lógica do shell, roteamento, clipboard API, meta tags dinâmicas |
| **Google Fonts** | Tipografia — Inter como fonte principal do shell |
| **Schema.org JSON-LD** | SEO estruturado (WebSite, CollectionPage, CreativeWork, FAQPage) |
| **History API** | Navegação SPA-like com URLs de slug sem reload |

### Sem dependências de build

- Sem Node.js, npm, webpack, Vite ou qualquer bundler
- Sem React, Vue, Svelte ou qualquer framework
- Sem banco de dados ou backend
- 100% estático — deploy em qualquer servidor HTTP, CDN ou GitHub Pages

---

## 📋 Catálogo Completo

### 🟣 General (66 estilos)

Estilos de interface de uso geral, cobrindo desde tendências modernas até referências históricas:

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

Dashboards e visualização de dados:

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

---

## 🔗 Estrutura de URLs

O projeto utiliza URLs semânticas com slugs SEO-friendly:

| Padrão | Exemplo | Descrição |
|--------|---------|-----------|
| `/` | `vibe.ft.ia.br/` | Página principal (showcase) |
| `/styles/{slug}` | `/styles/glassmorphism` | Visualização de um estilo específico |
| `/prompts/{id}.txt` | `/prompts/3.txt` | Prompt em texto puro (uso interno) |
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

Cada prompt contém especificações completas para reprodução fiel do estilo:

- **Nome e tipo** do estilo
- **Keywords** descritivas
- **Paleta de cores** (primárias e secundárias com códigos hex/rgba)
- **Efeitos e animações** específicos
- **AI Prompt Keywords** — instruções otimizadas para IA
- **CSS/Technical Keywords** — propriedades CSS relevantes
- **Design System Variables** — variáveis de design token
- **Checklist de implementação** — itens de verificação

### Compatibilidade

Os prompts foram testados e otimizados para:
- ChatGPT (GPT-4, GPT-4o)
- Claude (Sonnet, Opus)
- Google Gemini
- Qualquer LLM com capacidade de geração de código

### Acesso para crawlers de IA

O `robots.txt` permite acesso de crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, etc.) ao conteúdo público, enquanto protege os prompts de indexação direta. O arquivo `llms.txt` fornece metadados estruturados para LLMs.

---

## ♿ Acessibilidade

Cada página de estilo segue práticas de acessibilidade:

- Todas as imagens possuem `alt` text
- Inputs de formulário possuem `label` associado
- Cor nunca é o único indicador de informação
- `prefers-reduced-motion` é respeitado — animações são desabilitadas quando o usuário prefere
- Contraste de texto mínimo de 4.5:1 (WCAG AA)
- Elementos interativos possuem `cursor: pointer`
- Modal de FAQ com suporte a navegação por teclado (Escape para fechar)
- Atributos ARIA (`role="dialog"`, `aria-modal`, `aria-label`)

---

## 📱 Responsividade

Todas as páginas são testadas nos seguintes breakpoints:

| Breakpoint | Dispositivo |
|------------|-------------|
| 375px | Mobile (iPhone SE) |
| 768px | Tablet (iPad) |
| 1024px | Laptop |
| 1440px | Desktop |

---

## 🔍 SEO

O projeto implementa uma estratégia de SEO completa:

- **URLs semânticas** com slugs descritivos
- **Meta tags dinâmicas** — title, description, canonical atualizados por estilo
- **Open Graph** — preview otimizado para compartilhamento em redes sociais
- **Twitter Cards** — cards de resumo para Twitter/X
- **Schema Markup JSON-LD** — WebSite, CollectionPage, ItemList, CreativeWork, FAQPage
- **Sitemap XML** — todas as 98 URLs indexadas
- **robots.txt** — regras específicas para crawlers de IA e motores de busca
- **llms.txt** — metadados estruturados para Large Language Models

---

## 🤝 Contribuindo

### Adicionando novos estilos

O projeto possui um guia detalhado para expansão da coleção em [`docs/como-adicionar-novos-estilos.md`](docs/como-adicionar-novos-estilos.md). O processo resumido:

1. Identifique o próximo ID disponível
2. Crie o arquivo de prompt em `app/prompts/{id}.txt`
3. Crie a página HTML em `app/styles/{id}.html` seguindo o padrão (Tailwind CDN, SVG icons, PT-BR, responsivo, 6 seções)
4. Adicione a entrada no array `STYLES` do `index.html`
5. Atualize o `sitemap.xml` com a nova URL de slug

### Regras para páginas de estilo

| Regra | Detalhe |
|-------|---------|
| Framework | Tailwind CSS via CDN |
| Fontes | Google Fonts |
| Ícones | SVG inline (nunca emojis) |
| Interação | `cursor-pointer` em todo elemento clicável |
| Idioma | Português brasileiro (PT-BR) |
| Responsivo | 375px a 1440px |
| Navbar | Nenhuma (exibido dentro de iframe) |
| Tamanho | ~300 linhas máximo |
| Seções | Hero, Features (3), Testimonials (3), Pricing (3 tiers), CTA, Footer |
| Acessibilidade | `prefers-reduced-motion`, alt text, labels |

---

## 📚 Documentação

| Documento | Descrição |
|-----------|-----------|
| [`app/llms.txt`](app/llms.txt) | Metadados do projeto para crawlers de IA |

---

## 📊 Números do Projeto

| Métrica | Valor |
|---------|-------|
| Total de estilos | 98 |
| Categorias | 4 |
| Arquivos HTML de estilo | 98 |
| Arquivos de prompt | 98 |
| Linhas de código por estilo | ~300 |
| Dependências de build | 0 |
| Frameworks JavaScript | 0 |
| Tamanho do shell (index.html) | ~700 linhas |
| URLs no sitemap | 98 + 1 (home) |

---

## 🗓 Changelog

- **Fevereiro 2026** — Lançamento com 98 estilos, 4 categorias, roteamento por slugs, SEO completo, integração com IA

---

## 🙏 Agradecimentos

- **[Paolo Cortez](https://www.reddit.com/user/Paolo-Cortez/)** — Pela coleção original de estilos de infográficos para NotebookLM que inspirou este projeto. O [post no Reddit](https://www.reddit.com/r/notebooklm/comments/1r2p1bb/40_notebooklm_infographic_styles_specification/) foi o ponto de partida de tudo.
- **[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** — Pelo skill com a lista curada de estilos de UI/UX, paletas, tipografia e guidelines de implementação que complementaram a base de estilos do projeto.

---

<p align="center">
  Feito com 💜 por <a href="https://ft.ia.br">ft.ia.br</a> com a ajuda do <a href="https://kiro.dev">Kiro</a><br>
  <img src="app/assets/logo-fabricio.png" alt="Vibe Styles Logo" width="80" height="80" style="border-radius: 16px;">
</p>
