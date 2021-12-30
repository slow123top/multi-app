<template>
  <div>
    <Attachment ref="attachment" v-model="fileList"></Attachment>
    <button @click="chooseFile">双向绑定</button>
  </div>
</template>
<script>
import Button from "./button/Button.vue";
// import Icon from "./icon/Icon.vue";
import Attachment from "./attachment/Attachment.vue";
import TextInput from "./input/text.vue";
export default {
  name: "app",
  data() {
    return {
      title: "测试App",
      name: "名称",
      dataObj: {
        a: 1,
        b: "AA",
      },
      arr: [1],
      fileList: [],
      // fileList: [{ path: "/assets/gg.png" }, { path: "/assets/gg.png" }],
      val: "你好",
    };
  },
  components: {
    TextInput,
    Attachment,
  },

  // render() {
  //   return (
  //     <div>
  //       <TextInput v-model={this.val}></TextInput>
  //       <span>{this.val}</span>
  //     </div>
  //   );
  // },
  methods: {
    count() {
      this.title = "网页";
    },
    updateArr() {
      this.arr.splice(0, 0, "aa");
    },
    chooseFile() {
      this.$refs.attachment.chooseFile();
    },
  },
};
</script>
<style lang="css"></style>
