/**
 * detail.js - Carrega dados do estilo, atualiza meta tags, renderiza conteúdo
 */

let currentStyle = null;
let allStyles = [];

/**
 * parseRoute() - Extrai informações de roteamento da URL atual.
 * Prioridade 1: Slug no pathname (ex: /minimalism-swiss-style)
 * Prioridade 2: ID na query string (ex: ?id=1)
 * Fallback: Nenhum identificador encontrado
 * @returns {Object} - { type: 'slug'|'id'|'none', value: string|number|null }
 */
function parseRoute() {
  const pathname = window.location.pathname;
  const params = new URLSearchParams(window.location.search);

  // Prioridade 1: Slug no pathname (ex: /minimalism-swiss-style)
  const slugMatch = pathname.match(/^\/([a-z0-9][a-z0-9-]*)$/);
  if (slugMatch) {
    return { type: 'slug', value: slugMatch[1] };
  }

  // Prioridade 2: ID na query string (ex: ?id=1)
  const id = params.get('id');
  if (id) {
    return { type: 'id', value: parseInt(id) };
  }

  // Nenhum identificador encontrado
  return { type: 'none', value: null };
}

// Carregar dados do estilo
async function loadStyleData() {
  try {
    // Fetch data.json
    const response = await fetch('./data/data.json');
    allStyles = await response.json();
    
    // Obter ID da URL
    const params = new URLSearchParams(window.location.search);
    const styleId = parseInt(params.get('id')) || 1;
    
    // Encontrar estilo
    currentStyle = allStyles.find(s => s.id === styleId);
    
    if (!currentStyle) {
      console.warn(`Estilo ${styleId} não encontrado`);
      currentStyle = allStyles[0]; // Fallback
    }
    
    // Atualizar meta tags
    updateMetaTags();
    
    // Atualizar page title
    const styleName = currentStyle.name;
    const styleKeyword = currentStyle.prompt.estilo.keywords.split(',')[0].trim();
    document.getElementById('page-title').textContent = `${styleName} — ${styleKeyword} Template | Vibe Styles`;
    
    // Atualizar canonical
    document.getElementById('canonical-link').href = `https://vibe.ft.ia.br/styles/${currentStyle.id}.html`;
    
    // Atualizar OG tags
    document.getElementById('og-title').content = `${styleName} — Design System Template`;
    document.getElementById('og-description').content = currentStyle.metaDescription || `${styleName} — UI/UX design template com prompt pronto para IA`;
    
    // Atualizar meta description
    document.getElementById('meta-description').content = currentStyle.metaDescription || '';
    
    // Inserir schema StructuredData
    insertStructuredData();
    
    // Inserir breadcrumbs
    insertBreadcrumbs();
    
    // Inserir histórico e use cases (atualizar UX later com JavaScript)
    console.log('Estilo carregado:', currentStyle.name);
    
  } catch (error) {
    console.error('Erro ao carregar dados do estilo:', error);
  }
}

function updateMetaTags() {
  if (!currentStyle) return;
  
  const metaDesc = currentStyle.metaDescription || `${currentStyle.name} — Design template com prompt pronto para ChatGPT, Claude e Gemini.`;
  document.getElementById('meta-description').content = metaDesc.substring(0, 160);
}

function insertStructuredData() {
  if (!currentStyle) return;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "DesignEvaluation",
    "name": currentStyle.name,
    "description": currentStyle.metaDescription,
    "url": `https://vibe.ft.ia.br/styles/${currentStyle.id}.html`,
    "image": `https://vibe.ft.ia.br/app/screenshots/${currentStyle.id}.png`,
    "styleName": currentStyle.name,
    "styleType": currentStyle.type,
    "keywords": currentStyle.prompt.estilo.keywords,
    "useCase": currentStyle.useCase,
    "historicalContext": currentStyle.historicalContext,
    "relatedStyles": currentStyle.relatedStyleIds,
    "author": {
      "@type": "Organization",
      "name": "Vibe Styles",
      "url": "https://vibe.ft.ia.br"
    },
    "datePublished": "2026-02-19",
    "dateModified": "2026-02-19",
    "inLanguage": "pt-BR"
  };
  
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptTag);
}

function insertBreadcrumbs() {
  if (!currentStyle) return;
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "@id": "https://vibe.ft.ia.br/",
        "name": "Vibe Styles"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "@id": `https://vibe.ft.ia.br/styles/${currentStyle.id}.html`,
        "name": currentStyle.name
      }
    ]
  };
  
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(scriptTag);
}

// Renderizar Related Styles
function renderRelatedStyles() {
  if (!currentStyle || !currentStyle.relatedStyleIds) return;
  
  const relatedContainer = document.getElementById('related-styles-container');
  if (!relatedContainer) return;
  
  const relatedStyles = currentStyle.relatedStyleIds.map(id => 
    allStyles.find(s => s.id === id)
  ).filter(Boolean);
  
  const html = relatedStyles.map(style => `
    <a href="./detail.html?id=${style.id}" class="related-style-card">
      <img src="./screenshots/${style.id}.png" alt="${style.name}" class="w-full h-32 object-cover rounded-lg mb-2">
      <h4 class="font-medium text-sm">${style.name}</h4>
      <p class="text-xs text-gray-500">${style.type}</p>
    </a>
  `).join('');
  
  relatedContainer.innerHTML = html;
}

// Renderizar Histórico e Use Cases
function renderHistoryAndUseCases() {
  const historySection = document.getElementById('historical-context-section');
  const useCaseSection = document.getElementById('use-case-section');
  
  if (currentStyle && historySection) {
    const historyHTML = `
      <h2 class="text-lg font-bold mb-3">Histórico & Origem</h2>
      <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        ${currentStyle.historicalContext}
      </p>
    `;
    historySection.innerHTML = historyHTML;
  }
  
  if (currentStyle && useCaseSection) {
    const useCaseHTML = `
      <h2 class="text-lg font-bold mb-3">Quando Usar</h2>
      <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        ${currentStyle.useCase}
      </p>
    `;
    useCaseSection.innerHTML = useCaseHTML;
  }
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  loadStyleData().then(() => {
    renderRelatedStyles();
    renderHistoryAndUseCases();
  });
});
