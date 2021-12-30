<template>
  <button :class="['hy-btn', 'hy-btn-' + type]" @click="trigger">
    <span>
      <slot>默认内容</slot>
      <!-- <a href="">{{ userName }}</a> -->
    </span>
  </button>
</template>
<script>
export default {
  name: "hy-button",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  directives: {
    disabled: {
      inserted(el, binding) {},
      binding(el, binding, vnode) {
        el.disabled = true;
      },
    },
  },
  methods: {
    trigger(e) {
      console.log(this.$slots);
      this.$emit("click", e);
    },
  },
  computed: {},
};
</script>
<style src="./Button.scss" lang="scss" scoped>

</style>
