<template src="./Uploader.html"> </template>
<style src="./Uploader.scss" lang="scss" scoped></style>
<script>
import { uuid } from "./utils/attachment";
export default {
  props: {
    value: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 拍照按钮类型   camera  plus（default）
    type: {
      type: String,
      default: "plus",
    },
    // 支持上传类型
    accept: {
      type: String,
      default:
        "application/msexcel,application/msword,application/vnd.ms-powerpoint,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain",
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: true,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pathList: [],
    };
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  components: {},
  methods: {
    input(e) {
      this.loadFiles();
    },
    // 值变化事件
    change(e) {
      this.$emit("afterRead", this.value);
    },
    // 模拟触发选择附件
    chooseFile() {
      if (!this.disabled) {
        this.$refs.fileInput.click();
      }
    },
    // 加载上传文件
    loadFiles() {
      // 整合类数组
      const fileListAdd = Array.from(this.$refs.fileInput.files);
      Promise.all(fileListAdd.map((f) => this.initReaderLoad(f))).then(
        (result) => {
          this.pathList = [
            ...this.pathList,
            ...result.map((r) => {
              return { path: r, id: uuid() };
            }),
          ];
          this.$emit("input", [...this.value, ...this.pathList]);
        }
      );
    },
    // 初始化读文件加载
    initReaderLoad(file) {
      const result = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      });
      return result;
    },
  },
};
</script>
