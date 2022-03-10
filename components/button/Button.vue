<template>
  <button :class="['hy-btn', 'hy-btn-' + type]" @click="trigger">
    {{ a }}
    <span>
      <slot>默认内容</slot>
      <!-- <a href="">{{ userName }}</a> -->
    </span>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "hy-button",
  inject: {
    foo: {
      from: "bar",
      default: "aa",
    },
  },
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
    type: {
      type: [Boolean, String],
      default: "default",
    },
    "disabled-click": {
      type: [Boolean, String],
      default: false,
    },
    userName: "username",
    array: {
      type: Object,
      default: () => {
        return { a: 1 };
      },
    },
  },
  data() {
    return {
      a: "哈哈",
    };
  },
  directives: {},
  methods: {
    trigger(e) {
      if (this.disabledClick === true) {
        return;
      }
      console.log(this.$slots);
      this.$emit("button-click", e);
    },
  },
  computed: {},
  mounted() {
    console.log(this.foo);
    this.$on("button-click", function() {
      this.a = "aaaa";
    });
  },
};
</script>
<style src="./Button.scss" lang="scss" scoped></style>
