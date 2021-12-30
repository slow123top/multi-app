<template>
  <div>
    <ul>
      <li v-for="item in $slots" :key="item.id" @click="change(item.id)">
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hy-tab",
  props: {
    direction: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 16,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // iconStyle: {},
    };
  },
  mounted() {
    // 初始化  确定显示哪一个标签页
    this.$slots.default.forEach((slot) => {
      if (slot.tag === "div") {
        
      }
    });
  },
  methods: {
    change(e) {
      this.$emit("input", e);
    },
  },
};
</script>
