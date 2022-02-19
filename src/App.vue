<template>
  <div>
    {{ name }}
    <button @click="updateName">更改name</button>
  </div>
</template>
<script>
import Attachment from "./attachment/Attachment.vue";
import TextInput from "./form/input/text.vue";
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
  computed: {
    text: function() {
      return this.name + "aaa";
    },
  },
  components: {
    TextInput,
    Attachment,
  },
  mounted() {
    this.$watch("dataObj.cc", function(newVal, val) {
      console.log("cc");
    });
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
    updateName() {
      this.name = "胡玉洋";
    },
  },
};
</script>
<style lang="css"></style>
