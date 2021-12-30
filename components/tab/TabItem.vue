<template>
  <div class="tab-item" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hy-tab-item",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // iconStyle: {},
    };
  },
  computed: {
    active() {
      return this.$parent.value === this.id;
    },
  },
  methods: {},
};
</script>
