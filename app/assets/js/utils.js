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
