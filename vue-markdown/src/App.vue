<template>
  <div id="app">
    <textarea :value="value" @input="update"></textarea>
    <div v-html="markedStr"></div>
  </div>
</template>

<script>
import marked from 'marked';
import _ from 'lodash';

export default {
  name: 'App',
  data() {
    let init = '*h1*';
    return {
      value: init,
      markedStr: marked(init)
    }
  },
  methods: {
    update({target: {value}}) {
      this.value = value;
      this.debounced(value);
    },
    debounced: _.debounce(function(value) {
      this.markedStr = marked(value);
    }, 500)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
