<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :class="{ active: item && item.id === value }"
        :key="item && item.id"
        @click="change(item.id)"
      >
        <span>{{ item && item.title }}</span>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "hy-tabs",
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
      active: false,
      activeId: "",
      list: [],
      // iconStyle: {},
    };
  },
  mounted() {
    // 初始化  确定显示哪一个标签页
    this.$slots.default.forEach((s) => {
      const componentOptions = s.componentOptions;
      if (componentOptions && componentOptions.tag === "hy-tab") {
        const propsData = componentOptions.propsData;
        this.list.push({
          id: propsData.id,
          title: propsData.title,
        });
      }
    });
  },
  methods: {
    change(e) {
      this.$emit("update:value", e);
    },
  },
};
</script>
