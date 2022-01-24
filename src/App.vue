<template>
  <div>
    <!-- <Attachment ref='attachment' v-model='fileList'></Attachment> -->
    <input type="text" name="" v-model="name" />
    <p>{{ dataObj.cc }}</p>
    <button @click="chooseFile">双向绑定</button>
    <button @click="addProp">改变对象</button>
  </div>
</template>
<script>
import Button from "./button/Button.vue";
// import Icon from './icon/Icon.vue';
import Attachment from "./attachment/Attachment.vue";
import TextInput from "./input/text.vue";
export default {
  name: "app",
  data() {
    return {
      name: "名称",
      dataObj: {
        a: 1,
        b: "AA",
      },
      // arr: [1],
      // fileList: [],
    };
  },
  components: {
    TextInput,
    Attachment,
  },
  mounted() {
    this.$watch('dataObj.cc',function(newVal,val){
      console.log('cc');
    })
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
    addProp() {
      this.$set(this.dataObj, "cc", "eee");
      // this.dataObj.cc=11;
    },
  },
};
</script>
<style lang="css"></style>
