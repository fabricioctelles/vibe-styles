/**
 * utils.js - Funções utilitárias para a galeria Vibe Styles
 * Requer: config.js carregado antes deste arquivo (variável global CONFIG)
 */

/**
 * darkMode() - Gerencia o tema escuro/claro com persistência em localStorage.
 * Usa CONFIG.DARK_MODE_KEY para a chave de armazenamento.
 */
function darkMode() {
  return {
    dark: localStorage.getItem(CONFIG.DARK_MODE_KEY) === 'true',

    initDarkMode() {
      document.documentElement.classList.toggle('dark', this.dark);
    },

    toggleDark() {
      this.dark = !this.dark;
      localStorage.setItem(CONFIG.DARK_MODE_KEY, this.dark.toString());
      document.documentElement.classList.toggle('dark', this.dark);
    }
  };
}

/**
 * gridApp() - Componente Alpine.js principal que gerencia o estado dos cards,
 * busca, filtros por tipo, infinite scroll e busca mobile.
 * Usa CONFIG.DATA_URL, CONFIG.CARDS_PER_PAGE e CONFIG.SCROLL_ROOT_MARGIN.
 */
function gridApp() {
  return {
    allCards: [],
    visibleCards: [],
    search: '',
    activeType: '',
    types: [],
    currentPage: 0,
    loading: false,
    showMobileSearch: false,
    featuredTypes: ['General', 'Minimalism', 'BentoStyle', 'Brutalism', 'Futuristic', 'FlatDesign', 'Artistic', 'Retro', 'Infographic'],
    showAllCategoriesModal: false,
    categorySearch: '',

    getCountByType(type) {
      if (!type) return this.allCards.length;
      return this.allCards.filter(c => c.type === type).length;
    },

    getVisibleFeaturedTypes() {
      return this.featuredTypes.filter(t => this.types.includes(t));
    },

    getFilteredModalTypes() {
      if (!this.categorySearch) return this.types;
      const term = this.categorySearch.toLowerCase();
      return this.types.filter(t => t.toLowerCase().includes(term));
    },

    openAllCategoriesModal() {
      this.categorySearch = '';
      this.showAllCategoriesModal = true;
    },

    selectCategoryFromModal(type) {
      this.setType(type);
      this.showAllCategoriesModal = false;
    },

    async initGrid() {
      try {
        const response = await fetch(CONFIG.DATA_URL);
        this.allCards = await response.json();
        this.types = [...new Set(this.allCards.map(c => c.type).filter(Boolean))].sort();
        this.loadMore();
        this.setupInfiniteScroll();
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    },

    getFilteredCards() {
      let cards = this.allCards;
      if (this.activeType) {
        cards = cards.filter(c => c.type === this.activeType);
      }
      if (this.search) {
        const term = this.search.toLowerCase();
        cards = cards.filter(c => JSON.stringify(c).toLowerCase().includes(term));
      }
      return cards;
    },

    resetAndLoad() {
      this.currentPage = 0;
      this.visibleCards = [];
      this.loadMore();
    },

    setType(type) {
      this.activeType = type;
      this.resetAndLoad();
    },

    loadMore() {
      const filtered = this.getFilteredCards();
      const start = this.currentPage * CONFIG.CARDS_PER_PAGE;
      const end = start + CONFIG.CARDS_PER_PAGE;
      this.visibleCards.push(...filtered.slice(start, end));
      this.currentPage++;
    },

    setupInfiniteScroll() {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !this.loading
            && this.visibleCards.length < this.getFilteredCards().length) {
          this.loading = true;
          setTimeout(() => {
            this.loadMore();
            this.loading = false;
          }, CONFIG.DEBOUNCE_MS);
        }
      }, { rootMargin: CONFIG.SCROLL_ROOT_MARGIN });

      if (this.$refs.sentinel) {
        observer.observe(this.$refs.sentinel);
      }
    },

    toggleMobileSearch() {
      this.showMobileSearch = !this.showMobileSearch;
    }
  };
}

/**
 * generateSlug(name) - Gera um slug URL-friendly a partir do nome do estilo.
 * Converte para lowercase, remove acentos, caracteres especiais,
 * substitui espaços por hífens e limpa hífens duplicados/nas pontas.
 * @param {string} name - Nome do estilo (ex: "Minimalism & Swiss Style")
 * @returns {string} - Slug gerado (ex: "minimalism-swiss-style")
 */
function generateSlug(name) {
  if (!name || typeof name !== 'string') return '';

  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[&\/\\#,+()$~%.'":*?<>{}@!]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * findCardBySlug(cards, slug) - Busca um card pelo slug no array de cards.
 * Realiza busca case-insensitive comparando o slug gerado de cada card.name.
 * @param {Array} cards - Array de cards do data.json
 * @param {string} slug - Slug a buscar (ex: "minimalism-swiss-style")
 * @returns {Object|null} - Card encontrado ou null
 */
function findCardBySlug(cards, slug) {
  if (!Array.isArray(cards) || !slug || typeof slug !== 'string') return null;

  const normalizedSlug = slug.toLowerCase();
  return cards.find(card => generateSlug(card.name) === normalizedSlug) || null;
}
