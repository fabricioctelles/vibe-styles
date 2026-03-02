# Como Adicionar um Novo Estilo ao Vibe Styles

> Guia passo a passo baseado no processo real de adição do estilo #257 (Aura Premium WebGL & Iconify).

## Pré-requisitos

- Servidor local rodando: `python3 -m http.server 8000 --directory app`
- Acesso ao Playwright ou Puppeteer para gerar screenshots

## Visão Geral dos Passos

| Passo | Arquivo(s) | Ação |
|-------|-----------|------|
| 1 | `app/data/data.json` | Adicionar novo registro JSON |
| 2 | `app/styles/{id}.html` | Criar página HTML do estilo |
| 3 | `app/screenshots/{id}.png` | Gerar screenshot 1280x720 |
| 4 | `app/sitemap.xml` | Adicionar URL com slug e imagem |
| 5 | `app/llms.txt` | Atualizar total de estilos |
| 6 | `app/llm.project.txt` | Atualizar contagens |
| 7 | `app/llm.categories.txt` | Atualizar contagem da categoria |
| 8 | `app/llm.version.txt` | Atualizar data de última modificação |

---

## Passo 1: Adicionar registro em `app/data/data.json`

Inserir um novo objeto no array JSON, antes do `]` final. O ID deve ser sequencial (último ID + 1).

### Estrutura obrigatória do registro

```json
{
  "id": 257,
  "name": "Nome do Estilo",
  "type": "General",
  "prompt": {
    "header": "Atue como um Engenheiro Frontend Sênior e UI Designer Especialista.\n\nSua tarefa é codificar uma Landing Page completa na primeira tentativa.\n\n- Tema da Landing Page <INSIRA O TEMA>\n- Seções a adicionar <INSIRA AS SEÇÕES>\n\nGere o código final imediatamente seguindo estas definições:",
    "estilo": {
      "nome": "Nome do Estilo",
      "tipo": "Tipo/Adjetivos do estilo",
      "keywords": "palavra1, palavra2, palavra3",
      "coresPrimarias": "Cor1 #HEX1, Cor2 #HEX2",
      "coresSecundarias": "Cor3 #HEX3, Cor4 #HEX4",
      "efeitos": "Descrição dos efeitos visuais e animações",
      "era": "Período/Era do design",
      "lightDark": "✓ Full / ✓ Full"
    },
    "aiPromptKeywords": "Instruções em inglês para a IA gerar o design...",
    "cssTechnical": "Propriedades CSS específicas do estilo...",
    "designSystemVariables": "Variáveis CSS custom properties...",
    "checklist": "☐ Item 1, ☐ Item 2, ☐ Item 3",
    "regrasDeExecucao": "1. Siga fielmente o estilo visual determinado.\n2. Use ícones SVG inline de alta qualidade (estilo Heroicons ou Lucide) — PROIBIDO usar emojis como ícones.\n3. Adicione `cursor-pointer` e estados de `hover` suaves (transition-all) em todos os elementos interativos.\n4. Estrutura Obrigatória da Página:\n   - Navbar (Logo + Links + CTA)\n   - Hero Section (Headline impactante + Subtitle + 2 botões + Elemento visual 3D/Abstrato via CSS)\n   - Features (3 cards com ícones)\n   - Testimonials (3 cards)\n   - Pricing (3 tiers, destaque no central)\n   - CTA Final\n   - Footer completo com redes socias, politica de privacidade, termos de uso, contato e links SEO.\n5. Todo o conteúdo textual deve ser em Português Brasileiro (PT-BR).\n6. O visual deve ser CLARAMENTE distinto — não crie um design \"padrão Bootstrap\". Force o uso das variáveis de design system fornecidas.\n7. Use tags `<style>` no head para classes personalizadas (especialmente para os efeitos complexos de backdrop-filter e animações) que o Tailwind via CDN não cobrir.\n8. Responsividade Total: O layout deve se adaptar perfeitamente a Mobile, Tablet e Desktop (Stack vertical no mobile).\n9. Inclua meta tags básicas de SEO, Viewport e Open Graph no `<head>`.\n10. Footer deve conter: Copyright 2026, Links de navegação secundária e Ícones de redes sociais.\n11. Assuma as decisões criativas necessárias para entregar o resultado completo e funcional agora."
  },
  "metaDescription": "Descrição SEO do estilo em PT-BR. Máximo ~160 caracteres.",
  "useCase": "Caso de uso 1, Caso de uso 2",
  "historicalContext": "Contexto histórico do estilo em PT-BR.",
  "relatedStyleIds": [3, 13, 55, 4, 7]
}
```

### Campos importantes

| Campo | Regra |
|-------|-------|
| `id` | Sequencial, último + 1 |
| `name` | Nome único, será usado para gerar o slug da URL |
| `type` | Deve ser uma das 25 categorias existentes (ver `llm.categories.txt`) |
| `header` | Sempre o mesmo texto padrão (copiar de outro registro) |
| `regrasDeExecucao` | Sempre as mesmas 11 regras padrão (copiar de outro registro) |
| `relatedStyleIds` | Array com 5 IDs de estilos relacionados |
| `metaDescription` | Descrição SEO em PT-BR |

Se o contexto não contiver todos os campos, gere dados para os campos baseado no que você recebeu. É importante que todos os campos estejam preenchidos.

### Validação

Após inserir, validar o JSON:

```bash
python3 -c "import json; data = json.load(open('app/data/data.json')); print(f'Total: {len(data)}, Último ID: {data[-1][\"id\"]}')"
```

---

## Passo 2: Criar HTML em `app/styles/{id}.html`

- Chame o máximo de agentes em paralelo possível
- Monte o prompt completo usando a função `buildPrompt` (detalhada abaixo) e grave em `/tmp/{id}.txt`
- Entregue o `/tmp/{id}.txt` como contexto para cada agente gerar o HTML em `app/styles/`
- Essa é uma tarefa agêntica, não tente executá-la em lote usando scripts, cada agente deve executar cada um dos novos prompts
- Limpe `/tmp/{id}.txt` após cada execução

### Função `buildPrompt`

A função abaixo recebe o objeto `prompt` de um registro do `data.json` e monta o prompt completo que será entregue ao agente. Reproduza essa lógica para gerar o `/tmp/{id}.txt`:

```javascript
// Origem: app/detail.html
// card = registro do data.json (ex: data[0])
// card.prompt contém todos os campos necessários

function buildPrompt(card) {
  if (!card || !card.prompt) return '';
  const p = card.prompt;
  const e = p.estilo || {};

  return `## INSTRUÇÃO PRINCIPAL
${p.header || ''}

## Estilo
- Nome: ${e.nome || ''}
- Tipo: ${e.tipo || ''}
- Keywords: ${e.keywords || ''}
- Cores Primárias: ${e.coresPrimarias || ''}
- Cores Secundárias: ${e.coresSecundarias || ''}
- Efeitos: ${e.efeitos || ''}
- Era: ${e.era || ''}
- Light/Dark: ${e.lightDark || ''}

## AI Prompt Keywords (SIGA FIELMENTE)
${p.aiPromptKeywords || ''}

## CSS/Technical
${p.cssTechnical || ''}

## Design System Variables
${p.designSystemVariables || ''}

## Checklist
${p.checklist || ''}

## REGRAS DE EXECUÇÃO
${p.regrasDeExecucao || ''}`;
}
```

### Gerar `/tmp/{id}.txt` via Python (one-liner)

```bash
# Um estilo (ex: ID 257)
python3 -c "
import json
d=json.load(open('app/data/data.json'))
c=next(x for x in d if x['id']==257)
p=c['prompt'];e=p.get('estilo',{})
open('/tmp/257.txt','w').write(f'''## INSTRUÇÃO PRINCIPAL
{p.get('header','')}

## Estilo
- Nome: {e.get('nome','')}
- Tipo: {e.get('tipo','')}
- Keywords: {e.get('keywords','')}
- Cores Primárias: {e.get('coresPrimarias','')}
- Cores Secundárias: {e.get('coresSecundarias','')}
- Efeitos: {e.get('efeitos','')}
- Era: {e.get('era','')}
- Light/Dark: {e.get('lightDark','')}

## AI Prompt Keywords (SIGA FIELMENTE)
{p.get('aiPromptKeywords','')}

## CSS/Technical
{p.get('cssTechnical','')}

## Design System Variables
{p.get('designSystemVariables','')}

## Checklist
{p.get('checklist','')}

## REGRAS DE EXECUÇÃO
{p.get('regrasDeExecucao','')}''')
print('✓ /tmp/257.txt gerado')
"

# Múltiplos estilos (ex: IDs 257 a 260)
python3 -c "
import json
d=json.load(open('app/data/data.json'))
for c in d:
 if c['id'] not in range(257,261): continue
 p=c['prompt'];e=p.get('estilo',{})
 t=f'''## INSTRUÇÃO PRINCIPAL
{p.get('header','')}

## Estilo
- Nome: {e.get('nome','')}
- Tipo: {e.get('tipo','')}
- Keywords: {e.get('keywords','')}
- Cores Primárias: {e.get('coresPrimarias','')}
- Cores Secundárias: {e.get('coresSecundarias','')}
- Efeitos: {e.get('efeitos','')}
- Era: {e.get('era','')}
- Light/Dark: {e.get('lightDark','')}

## AI Prompt Keywords (SIGA FIELMENTE)
{p.get('aiPromptKeywords','')}

## CSS/Technical
{p.get('cssTechnical','')}

## Design System Variables
{p.get('designSystemVariables','')}

## Checklist
{p.get('checklist','')}

## REGRAS DE EXECUÇÃO
{p.get('regrasDeExecucao','')}'''
 open(f'/tmp/{c[\"id\"]}.txt','w').write(t)
 print(f'✓ /tmp/{c[\"id\"]}.txt gerado')
"
```


---

## Passo 3: Gerar screenshot `app/screenshots/{id}.png`

Importante: Antes de gerar o screenshot, independente do metodo usado, espere 5 segundos para que as animações carreguem totalemnte.

### Opção A: Playwright (recomendado)

Com o servidor local rodando, navegar para `http://localhost:8000/styles/{id}.html`, redimensionar para 1280x720 e capturar screenshot.

### Opção B: Puppeteer

```bash
node scripts/generate-screenshots.js --limit 1
```

> O servidor local serve da pasta `app/`, então a URL é `http://localhost:8000/styles/{id}.html` (sem o prefixo `app/`).

### Especificações do screenshot

| Propriedade | Valor |
|-------------|-------|
| Largura | 1280px |
| Altura | 720px |
| Formato | PNG |
| Caminho | `app/screenshots/{id}.png` |

---

## Passo 4: Adicionar ao `app/sitemap.xml`

Inserir antes do `</urlset>` final:

```xml
  <url>
    <loc>https://vibe.ft.ia.br/{slug}</loc>
    <lastmod>{YYYY-MM-DD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://vibe.ft.ia.br/app/screenshots/{id}.png</image:loc>
      <image:title>{Nome do Estilo} - {Type}</image:title>
    </image:image>
  </url>
```

### Geração do slug

O slug é gerado automaticamente pela função `generateSlug()` em `app/assets/js/utils.js`:

1. Lowercase
2. Remove acentos (normalize NFD)
3. Remove caracteres especiais: `& / \ # , + ( ) $ ~ % . ' " : * ? < > { } @ !`
4. Espaços → hífens
5. Colapsa hífens consecutivos
6. Remove hífens nas pontas

**Exemplos:**

| Nome | Slug |
|------|------|
| Aura Premium WebGL & Iconify | `aura-premium-webgl-iconify` |
| Minimalism & Swiss Style | `minimalism-swiss-style` |
| 3D & Hyperrealism | `3d-hyperrealism` |

> Não usar caracteres especiais PT-BR nas URLs.

---

## Passo 5: Atualizar arquivos `llm*`

### `app/llms.txt`

- Atualizar `Total Styles` e `Purpose` com o novo número
- Atualizar range do `id` (ex: `1-257` → `1-258`)

### `app/llm.project.txt`

- Atualizar todas as ocorrências do total de estilos (buscar pelo número antigo)
- Campos a atualizar: `Total Styles`, `HTML Demo Files`, `Screenshots`, texto descritivo

### `app/llm.categories.txt`

- Atualizar total geral de estilos
- Atualizar contagem da categoria específica (ex: `General` de 111 → 112)

### `app/llm.version.txt`

- Atualizar `Last Updated` com a data atual

---

## Checklist Final

- [ ] Registro adicionado em `app/data/data.json` com ID sequencial
- [ ] JSON válido (testar com python3)
- [ ] HTML criado em `app/styles/{id}.html` com agentes em paralelo executando prompts de /tmp
- [ ] Screenshot gerado em `app/screenshots/{id}.png` (1280x720)
- [ ] Slug adicionado ao `app/sitemap.xml`
- [ ] `app/llms.txt` atualizado (total, range de IDs)
- [ ] `app/llm.project.txt` atualizado (todas as contagens)
- [ ] `app/llm.categories.txt` atualizado (total + contagem da categoria)
- [ ] `app/llm.version.txt` atualizado (data)

