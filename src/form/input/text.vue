<template>
  <input
    class="input-primary"
    :class="{ 'input-success': successful }"
    type="text"
    :name="name"
    :value="value"
    @input="input"
  />
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
      // bind class可以和class attribute共存
      successful: true,
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
