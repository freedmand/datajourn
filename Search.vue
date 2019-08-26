<template>
  <div class="search">
    <img src="./assets/search_icon.svg" />
    <input @input="change($event)" type="text" placeholder="Search" v-model="query" />
    <div class="invisible">
      <FullText v-if="searching" :routes="routes" @fulltext="handleFullText($event)" />
    </div>
    <SearchResults v-if="showingSearch" :searchResults="searchResults" />
  </div>
</template>

<style scoped>
.search {
  position: relative;
}

input {
  background: white;
  height: 45px;
  width: 100%;
  border: none;
  border-bottom: var(--light-border);
  border-top: var(--light-border);
  border-radius: 0;
  font-size: 16px;
  font-family: inherit;
  padding-left: 52px;
  outline: none;
  box-sizing: border-box;
}

img {
  position: absolute;
  left: var(--sidebar-padding);
  top: 13.5px;
  pointer-events: none;
}

.invisible {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
}

::placeholder {
  color: rgba(0, 0, 0, 0.64);
}
</style>

<script>
import FullText from "./FullText";
import SearchResults from "./SearchResults";

import { mapState } from "vuex";

const SNIPPET_PAD = 100;

export default {
  components: { FullText, SearchResults },
  props: {
    routes: Array
  },
  data() {
    return {
      searching: false,
      fulltext: null
    };
  },
  methods: {
    change() {
      this.searching = true;
    },
    handleFullText($event) {
      this.fulltext = $event;
    }
  },
  watch: {
    $route() {
      this.$store.commit("clearSearch");
    },
    internalShowingSearch() {
      this.$store.commit("setSearch", this.internalShowingSearch);
    }
  },
  computed: {
    normalizedQuery() {
      return this.query.toLowerCase();
    },
    searchResults() {
      if (this.fulltext == null) return null;
      if (this.normalizedQuery.trim() == "") return null;

      const results = [];

      for (let i = 0; i < this.fulltext.length; i++) {
        const { route, normalized: text, text: originalText } = this.fulltext[
          i
        ];
        const idx = text.indexOf(this.normalizedQuery);
        if (idx != -1) {
          const start = Math.max(idx - SNIPPET_PAD, 0);
          const end = Math.min(idx + SNIPPET_PAD, text.length);
          let snippet = originalText.substring(start, end);
          results.push({
            route,
            snippet,
            moreAtStart: start != 0,
            moreAtEnd: end != text.length,
            query: this.normalizedQuery
          });
          continue;
        }
      }

      return results;
    },
    internalShowingSearch() {
      return this.searchResults != null;
    },
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("setQuery", value);
      }
    },
    ...mapState({
      showingSearch: state => state.searching
    })
  }
};
</script>