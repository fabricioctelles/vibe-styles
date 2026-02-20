
## 1) Underwater Aquático Deep Sea – Infográfico

### Estilo

Landing page em estilo **underwater** com forte uso de elementos marinhos (peixes, corais, algas, bolhas, ondas), paleta em tons de azul aqua, sensação calma e exploratória, com camadas de profundidade e iluminação azulada suave. Layout com hero impactante, seções separadas por ondas em SVG e elementos decorativos flutuando no background para sugerir profundidade oceânica.

### AI Prompt Keywords (SIGA FIELMENTE)

Underwater elements, aquatic life, water plants, bubbles, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea, layered depth, cool blue illumination, flowing liquid, underwater infographic.

### CSS/Technical

- Usar background linear-gradient em tons de azul (ex.: linear-gradient(180deg, \#E0F6FF, \#006994)).
- Criar animações de bolhas com @keyframes (translateY, opacity, scale) aplicadas em pseudo-elementos ou divs decorativas.
- Utilizar SVG de ondas como separadores entre seções, com path de curva suave (senoide).
- Aplicar depth layering com z-index diferentes (foreground, midground, background) e pequenos deslocamentos/parallax.
- Empregar filter: blur em elementos de fundo para simular distância.
- Definir variáveis CSS para cores e tamanhos (ex.: --light-aqua, --deep-navy, --ocean-blue, --bubble-size, --bubble-duration).


### Design System Variables

- Paleta: Ocean blue palette (tons aqua, navy, azul oceano, cerulean).
- Elementos: Marine elements present (peixes, corais, algas, bolhas, ondas em SVG).
- Movimento: Bubble animations (bolhas subindo continuamente em diferentes camadas).
- Padrões: Wave patterns (seções separadas por ondas em SVG).
- Profundidade: Depth layering (camadas com z-index e blur para simular profundidade).
- Clima: Calming underwater feel (transições suaves, iluminação azul fria, tipografia legível).


### Checklist

1. Estrutura obrigatória: Navbar, Hero, Features (3 cards), Testimonials (3 cards), Pricing (3 tiers com destaque no central), CTA Final, Footer completo.
2. Todo o conteúdo textual em Português Brasileiro (PT-BR).
3. Usar apenas ícones SVG inline (estilo Heroicons/Lucide); proibido uso de emojis.
4. Adicionar cursor-pointer e transition-all em todos os elementos interativos (links, botões, cards clicáveis).
5. Layout totalmente responsivo (mobile-first), com stack vertical em telas pequenas.
6. Visual claramente distinto de temas padrão (Bootstrap-like); usar as variáveis de design system ativamente.
7. Incluir meta tags básicas de SEO, viewport e Open Graph no head.
8. Footer com copyright 2026, links de navegação secundária e ícones de redes sociais.
9. Efeitos de animação suaves (sem exagero) com foco em desempenho.
10. Evitar poluição visual; valorizar espaços em branco e hierarquia tipográfica.

### REGRAS DE EXECUÇÃO

```
- Gerar um único documento HTML completo com CSS (em <style>) e JS (em <script>) dentro do head ou antes do fechamento do body.  
```

- Não utilizar frameworks de CSS (sem Bootstrap, Tailwind, etc.); apenas CSS puro.
- Não utilizar emojis em nenhum lugar do layout.
- Entregar o código final pronto para uso em produção, sem necessidade de ajustes estruturais.
- Assumir todas as decisões criativas faltantes, mantendo coerência com o estilo definido.

***

## 2) SaaS Enterprise – Analytics Dashboard

### Estilo

Landing page SaaS corporativa com foco em **analytics**, cards de métricas, prévias de gráficos e visual limpo em tons de azul corporativo. Layout com hero exibindo um mockup de dashboard, seções bem espaçadas e forte sensação de confiança e profissionalismo.

### AI Prompt Keywords (SIGA FIELMENTE)

SaaS landing, analytics dashboard, metrics cards, corporate blue, b2b, business intelligence, charts, integrations, trust, clean UI, glassmorphism, data visualization.

### CSS/Technical

- Usar paleta em tons de azul escuro a claro, com gradiente suave no background principal.
- Cards com efeito glassmorphism (background semi-transparente, border-radius médio, backdrop-filter: blur).
- Ícones SVG para representar métricas, integrações, segurança (cadeado) e nuvem.
- Animação de counters com JS (valores subindo de 0 até o número final).
- Responsividade com grid e flexbox, adaptando de colunas para stack vertical em mobile.
- Uso de variáveis CSS para cores principais, raio de borda, sombra e espaçamentos.


### Design System Variables

- Paleta: Corporate blue palette (ex.: \#0F172A, \#1E40AF, \#3B82F6, \#60A5FA).
- Componentes: Metric cards, Integration logos, Pricing tiers.
- Efeitos: Glass cards, smooth hover shadow, subtle glow em CTAs.
- Tipografia: Títulos fortes e textos de apoio com hierarchy clara.
- Layout: Seções retangulares limpas, com espaçamento consistente.


### Checklist

1. Estrutura obrigatória: Navbar, Hero com mockup de dashboard, Features, Integrations, Testimonials, Pricing, CTA Final, Footer completo.
2. Conteúdo em PT-BR, com foco no tom corporativo.
3. Ícones em SVG inline, sem emojis.
4. Botões com estados de hover (cor, sombra, leve scale).
5. Layout responsivo e testado para mobile, tablet e desktop.
6. Incluir seção ressaltando segurança e compliance (ex.: LGPD).
7. Usar animações discretas ao revelar seções ao scroll (fade, slide pequeno).
8. Incluir meta tags SEO e Open Graph.
9. Footer com links de documentação, suporte, privacidade, termos.
10. Manter contraste adequado para acessibilidade.

### REGRAS DE EXECUÇÃO

```
- Gerar HTML completo com <style> e <script> no mesmo arquivo.  
```

- Não utilizar bibliotecas externas (CSS/JS) além de fontes se necessário.
- Não usar emojis.
- Focar em código limpo e organizado, com classes descritivas.
- Entregar solução final sem necessidade de dependências adicionais.

***

## 3) HealthTech – Plataforma Clínica

### Estilo

Landing page de **HealthTech** com foco em clínicas/médicos, visual limpo em tons de verde saúde, ícones médicos, cards de serviços e fluxo claro de “como funciona”. Atmosfera de confiança, cuidado e clareza.

### AI Prompt Keywords (SIGA FIELMENTE)

healthtech landing, medical icons, clinic portal, healthcare green, patient journey, appointments, doctors, trust, clean, accessible, digital health.

### CSS/Technical

- Paleta baseada em verdes (emerald) e neutros claros para fundo.
- Uso de formas orgânicas (curvas suaves) como separadores de seções.
- Animação de pulso cardíaco em elementos específicos (ex.: ícone de coração ou badge).
- Campos de formulário com foco bem destacado (borda e sombra em verde).
- Layout em grid/flex, com seção “Como funciona” em passos horizontais no desktop e verticais no mobile.
- Variáveis CSS para cores, radius padrão de cartões, sombra e duração do pulso.


### Design System Variables

- Paleta: Healthcare green palette.
- Componentes: Service cards, Step-by-step flow, Testimonials médicos/pacientes, CTA de agendamento.
- Efeitos: Heartbeat pulse, hover suave em cards, focus states destacados.
- Tipografia: Clean e humanizada (sem parecer “fria”).
- Layout: Seções com bastante espaço em branco, foco em legibilidade.


### Checklist

1. Estrutura obrigatória: Navbar, Hero, Serviços/Funcionalidades, Como Funciona, Testimonials, CTA Principal, Footer.
2. Texto exclusivamente em PT-BR, com vocabulário médico acessível.
3. Ícones SVG médicos; proibido uso de emojis.
4. Responsividade total, com prioridade para leitura em mobile.
5. Meta tags de SEO e Open Graph.
6. Destaque para botão de “Agendar consulta” ou “Falar com especialista”.
7. Manter contraste alto para leitura em ambientes hospitalares (telas não ideais).
8. Animações suaves (sem excesso para não distrair).
9. Footer com links legais (privacidade, termos, LGPD).
10. Não usar temas ou componentes genéricos de frameworks.

### REGRAS DE EXECUÇÃO

- Entregar um único HTML com CSS e JS embutidos.
- Não usar frameworks CSS ou JS (somente vanilla).
- Não usar emojis.
- Código organizado, pronto para deploy.
- Assumir todas as decisões de microcópia, mantendo coerência com o contexto médico.

***

## 4) FinTech – Plataforma Financeira

### Estilo

Landing page **FinTech** premium, com foco em controle financeiro, gráficos de saldo, transações e segurança. Paleta em dourado + cinza escuro, estética moderna e confiável.

### AI Prompt Keywords (SIGA FIELMENTE)

fintech landing, finance dashboard, charts, security, gold and dark palette, premium, trust, transactions, cards, modern UI.

### CSS/Technical

- Fundo escuro com detalhes em dourado para CTAs e elementos-chave.
- Gráficos em estilo minimalista (barras ou linhas) usando SVG ou pseudo-elementos.
- Cards de planos e contas com sombra e borda suave.
- Efeito de hover em botões com brilho sutil (box-shadow e efeito glow).
- Uso de flexbox/grid para organizar seções de métricas e depoimentos.
- Variáveis CSS para cores douradas, escuras e espaçamentos.


### Design System Variables

- Paleta: Gold \& Dark palette.
- Componentes: Balance cards, Transaction list, Security highlights, Pricing tiers.
- Efeitos: Glow em CTAs, animations em números e gráficos.
- Tipografia: Firme e moderna (headers com peso forte).
- Layout: Blocos bem definidos com divisões claras.


### Checklist

1. Estrutura obrigatória: Navbar, Hero com destaque de números/benefícios, Metrics, Security, Testimonials, Pricing, CTA Final, Footer.
2. Textos em PT-BR, focando em benefícios financeiros e segurança.
3. Ícones SVG de finanças (cofre, cadeado, gráficos, cartões).
4. Zero emojis.
5. Design responsivo em todas as seções.
6. Destaque claro para um CTA principal (ex.: “Criar conta”).
7. Meta tags SEO e Open Graph.
8. Contraste adequado entre texto e fundo escuro.
9. Animações de números (increment) e hover sutil em cards.
10. Não usar temas genéricos de frameworks.

### REGRAS DE EXECUÇÃO

- Gerar HTML único com CSS e JS embutidos.
- Sem frameworks externos.
- Sem emojis.
- Código pronto para produção, sem dependências adicionais.
- Manter foco em performance (animações leves).

***

## 5) EdTech – Plataforma de Cursos

### Estilo

Landing page **EdTech** gamificada, com cores vibrantes (laranja/roxo/azul), badges de progresso, cards de cursos e seções que incentivam o estudo contínuo. Visual jovem e motivador.

### AI Prompt Keywords (SIGA FIELMENTE)

edtech landing, online courses, gamification, progress badges, vibrant colors, students, learning path, challenges, modern UI.

### CSS/Technical

- Paleta vibrante com laranja como cor de ação principal.
- Badges de progresso em cards de curso, usando pseudo-elementos e bordas arredondadas.
- Uso de gradientes em headers e CTAs.
- Cards de curso com hover elevando e mudando levemente a cor do fundo.
- Seção de “trilha de aprendizado” com passos conectados por linhas/ícones.
- Variáveis CSS para cores vibrantes, radius e sombras.


### Design System Variables

- Paleta: Vibrant learning palette (laranja, roxo, azul).
- Componentes: Course cards, Progress badges, Learning path steps, Testimonials de alunos.
- Efeitos: Hover em cards, badges com cor de progresso, animações de entrada.
- Tipografia: Jovem, legível, com hierarquia de títulos clara.
- Layout: Seções com conteúdos modulares (fácil de reordenar).


### Checklist

1. Estrutura obrigatória: Navbar, Hero, Catálogo de Cursos (cards), Trilha de Aprendizado, Depoimentos, Planos/assinaturas, CTA Final, Footer.
2. Texto em PT-BR, linguagem motivadora.
3. Ícones SVG para educação (livros, certificados, vídeos, etc.).
4. Sem emojis.
5. Layout responsivo, com grids adaptáveis.
6. Destacar badges de conclusão/progresso.
7. Meta tags SEO e Open Graph.
8. Contraste de texto adequado sobre cores vibrantes.
9. Microinterações visíveis em botões e cards.
10. Evitar aparência de template genérico.

### REGRAS DE EXECUÇÃO

- Entregar HTML único com CSS/JS.
- Não usar frameworks.
- Não usar emojis.
- Código pronto para publicação.
- Manter estrutura clara e fácil de manter.

***

## 6) Portfolio Dev – Full-Stack

### Estilo

Landing page de **portfólio** para desenvolvedor full-stack, visual minimalista e moderno com foco em projetos, stack de tecnologia e depoimentos. Paleta em cinza, preto e uma cor de destaque (por exemplo, ciano).

### AI Prompt Keywords (SIGA FIELMENTE)

developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand.

### CSS/Technical

- Layout em duas colunas no desktop (bio/projetos), stack vertical em mobile.
- Seção de projetos com cards contendo título, tech stack e link (botão).
- Destaque visual para stack principal (badges de tecnologias).
- Animações discretas em hover de links e botões (underline animado, escala suave).
- Variáveis CSS para cor de destaque, fundo, texto e espaçamentos.
- Utilização de CSS grid/flex para organizar galeria de projetos.


### Design System Variables

- Paleta: Dark + accent (preto/cinza + ciano).
- Componentes: Project cards, Tech badges, Timeline de experiência, CTA contatos.
- Efeitos: Hover de links/botões, foco em links com outline claro.
- Tipografia: Robusta para títulos, neutra para textos.
- Layout: Forte hierarquia de seções com títulos bem marcados.


### Checklist

1. Estrutura obrigatória: Navbar, Hero (bio + CTA), Projetos, Stack/Skills, Experiência, Depoimentos/Clientes, CTA Final, Footer.
2. Conteúdo em PT-BR focado em portfólio dev.
3. Ícones SVG (Git, terminal, frameworks, etc.).
4. Nenhum emoji.
5. Responsividade garantida.
6. Destaque claro para botão de contato (e.g. “Fale comigo”).
7. Meta tags SEO e Open Graph.
8. Manter background escuro com boa legibilidade.
9. Microinterações discretas para sensação premium.
10. Evitar aparência de template de currículo genérico.

### REGRAS DE EXECUÇÃO

- Gerar um único HTML com CSS/JS incluídos.
- Não usar frameworks.
- Não usar emojis.
- Código pronto para uso real como portfólio.
- Seguir rigorosamente a estrutura definida.

***

## 7) Real Estate – Imobiliária Digital

### Estilo

Landing page **imobiliária** moderna, com foco em imóveis de alto padrão, fotos grandes, cards de propriedades e mapas ilustrativos. Paleta em bege/dourado e cinza, com ar sofisticado.

### AI Prompt Keywords (SIGA FIELMENTE)

real estate landing, property cards, listings, luxury, gold and beige, modern, maps, filters, home search.

### CSS/Technical

- Cards de imóveis com foto em destaque, título, localização, preço e CTA.
- Seção de filtros (tipo, preço, localização) com inputs estilizados.
- Fundo claro com detalhes em dourado/bege para destacar CTAs.
- Grid responsivo de propriedades.
- Uso de pseudo-elementos para criar divisores sutis entre seções.
- Variáveis CSS para cores (bege, dourado, cinza).


### Design System Variables

- Paleta: Luxury beige \& gold palette.
- Componentes: Property cards, Filters bar, Highlights de bairros, Testimonials de clientes.
- Efeitos: Hover suave em cards (sombra e leve scale).
- Tipografia: Elegante, com títulos serif ou semi-serif.
- Layout: Visual organizado, semelhante a revista de imóveis premium.


### Checklist

1. Estrutura obrigatória: Navbar, Hero com busca rápida, Listagem de Imóveis, Filtros, Destaques, Depoimentos, CTA contato, Footer.
2. Textos em PT-BR, tom consultivo.
3. Ícones SVG (localização, dormitórios, vagas, metragem).
4. Zero emojis.
5. Layout responsivo com grid adaptável.
6. Fotos simuladas (placeholders) para imóveis.
7. Meta tags SEO e Open Graph.
8. Destaque para botão “Agendar visita” ou “Falar com corretor”.
9. Animações leves ao carregar cards.
10. Nada de aparência de template genérico.

### REGRAS DE EXECUÇÃO

- HTML único com CSS/JS embutidos.
- Sem frameworks.
- Sem emojis.
- Código pronto para uso de vitrine imobiliária.
- Manter coerência de estilo entre todas as seções.

***

## 8) Fitness – App de Treinos

### Estilo

Landing page **fitness** para app de treinos, estética energética (vermelho/laranja), fotos ou ilustrações de pessoas treinando, destaque para planos, antes/depois e app preview.

### AI Prompt Keywords (SIGA FIELMENTE)

fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health.

### CSS/Technical

- Seção hero com grande CTA para download/app.
- Cards de planos com destaque em um deles (mais recomendado).
- Slider “antes/depois” (simulado com CSS/JS simples).
- Animações de entrada para números de progresso (kcal, treinos, etc.).
- Variáveis CSS para cores fortes (vermelho/laranja) e neutros.
- Layout modular, adaptável a mobile facilmente.


### Design System Variables

- Paleta: Energetic red/orange palette.
- Componentes: Workout plans, Before/After slider, Stats counters, CTA download.
- Efeitos: Hover em CTAs, números animados, transições rápidas.
- Tipografia: Forte e “atlética” na percepção visual.
- Layout: Seções com imagens/ilustrações grandes.


### Checklist

1. Estrutura obrigatória: Navbar, Hero, Benefícios, Planos, Progresso/Resultados, App Preview, CTA, Footer.
2. Texto em PT-BR com tom motivacional.
3. Ícones SVG para treinos, alimentação, progresso.
4. Não usar emojis.
5. Layout responsivo, mobile-first.
6. Meta tags SEO e Open Graph.
7. Destaque para botão de download/começar.
8. Animações suaves mas presentes.
9. Manter legibilidade em fundos com imagens (overlays).
10. Sem aparência de template genérico.

### REGRAS DE EXECUÇÃO

- HTML único com CSS/JS.
- Sem frameworks.
- Sem emojis.
- Código pronto para landing real de app fitness.
- Respeitar rigorosamente hierarquia de seções.

***

## 9) Travel – Plataforma de Viagens

### Estilo

Landing page **travel** para agência/plataforma de viagens, com destinos em destaque, fotos amplas, mapas estilizados e seções com ofertas e pacotes. Paleta em azul + laranja ou azul + verde.

### AI Prompt Keywords (SIGA FIELMENTE)

travel landing, destinations, packages, maps, booking, adventure, blue and accent color, trips, flights, hotels.

### CSS/Technical

- Hero com grande imagem de destino e CTA de busca.
- Cards de pacotes com preço, destino, duração e CTA “Ver detalhes”.
- Seção de categorias (praia, montanha, cidade, etc.) com ícones SVG.
- Divisores suaves entre seções (curvas ou diagonais).
- Variáveis CSS para cores principais e acentos.
- Layout responsivo com carrossel simples para destinos em mobile.


### Design System Variables

- Paleta: Travel blue + accent palette.
- Componentes: Destination cards, Packages, Categories, Testimonials, CTA.
- Efeitos: Hover em cards, carrossel suave, destaques em ofertas.
- Tipografia: Acolhedora, com títulos que transmitam aventura.
- Layout: Seções que valorizam imagens e fotos.


### Checklist

1. Estrutura obrigatória: Navbar, Hero (busca ou seleção), Destinos em destaque, Pacotes, Depoimentos, CTA, Footer.
2. Texto em PT-BR, tom inspirador.
3. Ícones SVG (avião, mala, mapa, hotel).
4. Sem emojis.
5. Layout responsivo.
6. Meta tags SEO e Open Graph.
7. Destaque claro para botão de orçamento/contato.
8. Animações discretas ao passar por cards.
9. Manter boa legibilidade em cima de imagens (overlays escuros, por exemplo).
10. Evitar sensação de template genérico.

### REGRAS DE EXECUÇÃO

- Único arquivo HTML com CSS/JS embutidos.
- Sem frameworks.
- Sem emojis.
- Código pronto para vitrine de pacotes de viagem.
- Manter consistência visual geral.

***

## 10) Crypto – Exchange/Plataforma

### Estilo

Landing page **crypto** para exchange/plataforma de ativos digitais, visual futurista, com gráficos em tempo quase real (simulados), cards de moedas e destaque para segurança. Paleta em ciano, roxo escuro e cinza.

### AI Prompt Keywords (SIGA FIELMENTE)

crypto exchange landing, digital assets, charts, neon cyan, dark background, futuristic, security, wallets, trading.

### CSS/Technical

- Fundo escuro com detalhes neon em ciano.
- Cards de moedas com preço atual, variação e botão de trade.
- Gráfico line simples em SVG animado (ou pseudo-animação).
- Hover com glow neon em botões e links principais.
- Variáveis CSS para cores neon, fundos e sombras.
- Layout responsivo com seções de segurança, taxas, app preview.


### Design System Variables

- Paleta: Neon cyan + dark palette.
- Componentes: Crypto cards, Charts, Security section, Pricing/fees.
- Efeitos: Neon glow, hover intenso em CTAs, micro animações.
- Tipografia: Moderna, com fonte sem serifa forte.
- Layout: Dark mode first, com destaques em ciano.


### Checklist

1. Estrutura obrigatória: Navbar, Hero, Lista de Criptos, Gráfico/Estatísticas, Segurança, App/Plataforma, CTA Final, Footer.
2. Textos em PT-BR com foco em segurança e facilidade.
3. Ícones SVG (moedas, cadeados, carteiras, gráficos).
4. Sem emojis.
5. Layout responsivo.
6. Meta tags SEO e Open Graph.
7. Destacar diferenciais (taxas, segurança, liquidez).
8. Animações suaves, estilo futurista.
9. Manter contraste forte entre texto e fundo.
10. Evitar aparência de template genérico.

### REGRAS DE EXECUÇÃO

- Gerar um único HTML com CSS/JS.
- Não usar frameworks.
- Não usar emojis.
- Código pronto para landing real de exchange.
- Manter estética futurista coerente em todas as seções.

