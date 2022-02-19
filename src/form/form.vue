<template>
  <form>
    <slot>表单</slot>
  </form>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      fileListData: [],
    };
  },
  computed: {},
  beforeMount() {
    this.fileListData = this.value;
  },
  mounted() {},
  components: {},
  methods: {
    //   vue双向绑定方式
    input(e) {
      this.$emit("input", e.target.value);
    },
    change(e) {
      //   this.$emit("onInput", e.target.value);
    },
  },
};
</script>
