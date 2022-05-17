<template>
  <div>
    第一页
    <hy-button @button-click="click"></hy-button>
  </div>
</template>
<script>
import HyButton from "../../components/button/Button.vue";
export default {
  name: "page1",
  methods: {
    click() {
      console.log("aaa");
    },
  },
  components: {
    HyButton,
  },
};
</script>
<style lang="css"></style>
