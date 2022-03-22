<template src="./Table.html"> </template>
<script>
export default {
  name: "Hy-Table",
  props: {
    data: {
      type: Array,
      default: () => {
        return;
      },
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    // outInfo(): void {
    //   console.log(111);
    // },
  },
  computed: {
    columnKeys() {
      return Object.keys(this.columns);
    },
  },
};
</script>
<style src="./Table.scss"></style>
