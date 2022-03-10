<template>
  <div>
    <!-- <div v-if="name === '名称'">{{ name }}</div>
    <div v-if="name === '胡玉洋'">{{ name }}</div> -->
    <!-- <button @click="updateName">更改数据</button> -->
    <hy-tabs v-model="id">
      <hy-tab id="a" title="tab1">标签一</hy-tab>
      <hy-tab id="b" title="tab2">标签二</hy-tab>
    </hy-tabs>
  </div>
</template>
<script>
// import Attachment from "./attachment/Attachment.vue";
// import TextInput from "./form/input/text.vue";
import HyButton from "../components/button/Button.vue";
import HyTab from "../components/tab/Tab.vue";
import HyTabs from "../components/tab/tabs/Tabs.vue";
export default {
  name: "app",
  // props: {
  //   type: {
  //     type: String,
  //     default: "sa",
  //   },
  // },
  data() {
    return {
      name: "名称",
      id: "a",
      // dataObj: {
      //   a: 1,
      //   b: "AA",
      // },
      // array: {
      //   v: 33,
      // },
      // list: [1],
      // visible: true,
      // value: "输入框",
    };
    // arr: [1],
    // fileList: [],
  },
  // computed: {
  //   text: function() {
  //     return this.name + "aaa";
  //   },
  // },
  components: {
    // TextInput,
    // Attachment,
    HyButton,
    HyTab,
    HyTabs,
  },
  mounted() {
    // this.$refs.hyButton.$on('button-click',function(val){
    //   this.name = '你好';
    //   console.log(val);
    // })
    // this.$watch("dataObj.cc", function(newVal, val) {
    //   console.log("cc");
    // });
  },
  // render(h) {
  //   return h("div", { attrs: { class: "aaa" } }, [h("h1", "haha")]);
  // },
  // render() {
  //   return (
  //     <div>
  //       <TextInput v-model={this.val}></TextInput>
  //       <span>{this.val}</span>
  //     </div>
  //   );
  // },
  methods: {
    // count() {
    //   this.title = "网页";
    // },
    // updateArr() {
    //   this.arr.splice(0, 0, "aa");
    // },
    // chooseFile() {
    //   this.$refs.attachment.chooseFile();
    // },
    // addProp() {
    //   this.$set(this.dataObj, "cc", "eee");
    //   // this.dataObj.cc=11;
    // },
    updateName() {
      this.name = "胡玉洋";
    },
  },
};
</script>
<style lang="css"></style>
