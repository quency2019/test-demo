<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="change">按钮</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    init: String,
  },
  data() {
    return {
      child: "child",
    };
  },
  mounted() {
    // console.log(this.$parent, "parent");
  },
  methods: {
    change(e) {
      console.log(e);
      this.$emit("change", e.target);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
