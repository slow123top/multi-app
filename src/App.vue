<template>
  <div>
    <!-- <div v-if="name === '名称'">{{ name }}</div>
    <div v-if="name === '胡玉洋'">{{ name }}</div> -->
    <button @click="updateName">更改数据</button>
    <hy-tabs v-model="id" v-if="id">
      <hy-tab :id="item.id" :title="item.title" v-for="item in list">{{
        item.name
      }}</hy-tab>
    </hy-tabs>
    <div>
      <p>段落</p>
      <div>块级block</div>
    </div>
    <div>
      <p>段落1</p>
      <div>块级block1</div>
    </div>
    <hy-table :data="data" :columns="columns"></hy-table>
  </div>
</template>
<script>
// import Attachment from "./attachment/Attachment.vue";
// import TextInput from "./form/input/text.vue";
import HyButton from "../components/button/Button.vue";
import HyTable from "../components/table/Table.vue";
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
      id: "aa",
      list: [
        { id: "aa", title: "tab1", name: "标签1" },
        { id: "bb", title: "tab2", name: "标签2" },
        { id: "cc", title: "tab3", name: "标签3" },
      ],
      data: [
        {
          id: "11",
          value: "sa",
          name: "sa",
        },
        {
          id: "22",
          value: "sa1",
          name: "sa2",
        },
      ],
      columns: [
        {
          field: "value",
          title: "第一列",
        },
        {
          field: "name",
          title: "第二列",
        },
      ],
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
  watch: {
    name: [
      function() {
        this.count();
      },
      function() {
        this.count1();
      },
    ],
  },
  components: {
    // TextInput,
    // Attachment,
    HyButton,
    HyTable,
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
    count() {
      console.log(11);
    },
    count1() {
      console.log(3233);
      this.title = "haha";
    },
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
