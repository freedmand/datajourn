<template>
  <div class="results">
    <div class="content">
      <h1>Search results for &lsquo;{{$store.state.query}}&rsquo;</h1>
      <router-link
        v-for="(result, i) in searchResults"
        :key="`${result.query}${i}`"
        :to="result.route.path"
        @click.native="clearSearch()"
      >
        <div class="result">
          <h4>{{result.route.name}}</h4>
          <Snippet :result="result">{{result.snippet}}</Snippet>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
  display: block;
}

h1 {
  font-weight: 400;
  margin-top: 2em;
}

.results {
  position: fixed;
  left: var(--sidebar-width);
  top: 0;
  right: 0;
  bottom: 0;
  text-align: left;
  background: white;
  overflow-y: scroll;
  padding: 0 0 3em 0;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.result {
  white-space: pre-wrap;
  margin: 1.5em 0;
  background: #fffff1;
  padding: 0.5em 2em;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1;
  max-height: 150px;
  overflow: hidden;
  cursor: pointer;
  border: solid 2px black;
  transition: all 0.2s ease;
}

.result:hover {
  transform: scale(1.05);
}
</style>

<script>
import Snippet from "./Snippet";

export default {
  components: { Snippet },
  props: {
    searchResults: Array
  },
  methods: {
    clearSearch() {
      this.$store.commit("clearSearch");
    }
  }
};
</script>