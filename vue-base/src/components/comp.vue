<template>
  <ul>
    <li v-for="(item, index) in data" :key="item + index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "comp",
  data() {
    return {
      data: ["1", "3", "5"],
    };
  },
};
</script>

<style>
</style>