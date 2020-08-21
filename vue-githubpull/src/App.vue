<template>
  <div id="app">
    <h2 class="p-1">github</h2>
    <template v-for="(item,index) in branchs">
      <input class="m-05" :key="index" type="radio" :value="item" v-model="currentBranch" />
      {{ item }}
    </template>
    <h4 class="p-05">{{ currentBranch }}</h4>
    <dl>
      <template v-for="(item,index) in commits">
        <dt :key="index">
          {{ item.sha | strFormat(5) }}
          <small>{{ item.commit.message }}</small>
        </dt>
        <dd :key="-index-1">by{{ item.commit.author.name }}at{{ item.commit.author.date | dateFormat }}</dd>
      </template>
    </dl>
  </div>
</template>

<script>
var apiURL = "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";

export default {
  name: "App",
  data() {
    return {
      branchs: ["master", "dev"],
      currentBranch: "master",
      commits: [],
    };
  },
  watch: {
    
  },
  methods: {
    fetchData() {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          this.commits = JSON.parse(xhr.responseText);
        }
      };
      xhr.open("get", `${apiURL}${this.currentBranch}`);
      xhr.send();
    },
  },
  filters: {
    dateFormat(value) {
      return value.replace(/T|Z/g, ' ');
    },
    strFormat(value, num) {
      return value.slice(0, num);
    }
  },
  created() {
    this.fetchData();
    console.log('start');
    this.$watch('currentBranch', () => {
      console.log('this.currentBranch, nv, ov');
      this.fetchData();
    },{immediate: true, deep: true});
  }
};
</script>

<style>
@import "./assets/index.css";
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
dt small {
  color: #777;
}
</style>
