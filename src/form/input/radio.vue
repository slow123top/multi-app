<template>
  <input type="radio" name="radio" :value="val" @input="input" />
</template>
<script>
export default {
  props: {
    val: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "radio",
    }
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
