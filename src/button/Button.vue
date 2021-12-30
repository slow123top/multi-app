<template>
  <div>
    <hy-button><span>default</span></hy-button>
    <hy-button type="primary">
      <span>asdasdas</span>
      <span>asdasdas</span>
    </hy-button>
    <hy-button type="danger"><span>danger</span></hy-button>
    <hy-button type="warning"><span>warning</span></hy-button>
    <hy-button type="success"><span>success</span></hy-button>
    <hy-button type="dashed" @click="clickEvent"><span>dashed</span></hy-button>
    <div style="text-align:center">
      <div style="display:inline-block;text-align:left">
        asdasdsadddddddddddddddddddddddddddddddddddd
      </div>
    </div>
  </div>
</template>
<script>
import HyButton from "../../components/button/Button.vue";
export default {
  name: "demo-button",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {
    HyButton,
  },
  methods: {
    clickEvent() {
      console.log("点击事件");
    },
  },
  computed: {},
};
</script>
<style lang="scss"></style>
