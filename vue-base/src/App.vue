<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="value" @change="change" :init="init" ref="child" />
    <input v-model="value" />
    <div class="" ref="divref"></div>
    <Comp></Comp>
    <div>{{ sum }}</div>
    <button @click="add">add</button>
    <router-link to="/page1">link page1</router-link>
    <router-link to="/page2">link page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Comp from "./components/comp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Comp,
  },
  data() {
    return {
      value: "",
      init: "初始值",
      sum: "",
    };
  },
  mounted() {
    this.sum = this.$store.getters.sum;

    // console.log(this.$refs);
    // console.log(this.$children, "children");
    // for (let i = 0; i < this.$children.length; i++) {
    //   const element = this.$children[i];
    //   console.log(element, "children element");
    // }
  },
  methods: {
    change(value) {
      console.log(value);
      // this.title = value;
    },
    add() {
      // this.$store.dispatch("fetch");
      this.$store.commit("add", 3);
      this.sum = this.$store.getters.sum;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
