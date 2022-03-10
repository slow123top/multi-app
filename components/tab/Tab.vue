<template>
  <div class="tab-item" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hy-tab",
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
  mounted() {
    // if (this.$parent) {
    //   const list = this.$parent.list;
    //   const thisVm = list && list.find((l) => l.id === this.id);
    //   if (!thisVm) {
    //     this.$parent.list.push(this);
    //   }
    // }
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
