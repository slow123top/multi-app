<template>
  <span
    :class="['iconfont', type]"
    :style="{ 'font-size': size + 'px' }"
  ></span>
</template>
<script>
export default {
  name: "hy-icon",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      // iconStyle: {},
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url("iconfont.ttf?t=1628588284375") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-edit:before {
  content: "\e608";
}

.icon-delete:before {
  content: "\e609";
}

.icon-search:before {
  content: "\e60b";
}

.icon-left:before {
  content: "\e60c";
}

.icon-arrow-up:before {
  content: "\e60d";
}

.icon-arrow-down:before {
  content: "\e60e";
}

.icon-arrow-right:before {
  content: "\e60f";
}

.icon-close:before {
  content: "\e610";
}

.icon-selected:before {
  content: "\e611";
}

.icon-scanning:before {
  content: "\e612";
}

.icon-order:before {
  content: "\e613";
}

.icon-manage-order:before {
  content: "\e614";
}

.icon-customer:before {
  content: "\e615";
}

.icon-set:before {
  content: "\e616";
}

.icon-lock:before {
  content: "\e617";
}

.icon-eye:before {
  content: "\e618";
}

.icon-visible:before {
  content: "\e619";
}

.icon-favorites:before {
  content: "\e61a";
}

.icon-favorites-fill:before {
  content: "\e61b";
}

.icon-mark:before {
  content: "\e61c";
}

.icon-mark-fill:before {
  content: "\e61d";
}

.icon-comments:before {
  content: "\e61e";
}

.icon-reduce:before {
  content: "\e61f";
}

.icon-add:before {
  content: "\e620";
}

.icon-reduce-circle:before {
  content: "\e621";
}

.icon-add-circle:before {
  content: "\e622";
}

.icon-left-circle:before {
  content: "\e623";
}

.icon-right-circle:before {
  content: "\e624";
}

.icon-menu:before {
  content: "\e627";
}

.icon-double-left:before {
  content: "\e628";
}

.icon-double-right:before {
  content: "\e629";
}

.icon-arrow-down1:before {
  content: "\e62a";
}

.icon-arrow-up1:before {
  content: "\e62b";
}

.icon-data:before {
  content: "\e62c";
}

.icon-info:before {
  content: "\e62f";
}

.icon-fullscreen:before {
  content: "\e630";
}

.icon-narrowscreen:before {
  content: "\e633";
}

.icon-list:before {
  content: "\e634";
}

.icon-share:before {
  content: "\e636";
}

.icon-address:before {
  content: "\e639";
}

.icon-upload:before {
  content: "\e63a";
}

.icon-download:before {
  content: "\e63b";
}

.icon-mail:before {
  content: "\e63c";
}

.icon-submit:before {
  content: "\e63d";
}

.icon-copy:before {
  content: "\e63e";
}

.icon-home:before {
  content: "\e63f";
}

.icon-camera:before {
  content: "\e640";
}

.icon-cancle:before {
  content: "\e641";
}

.icon-package:before {
  content: "\e642";
}

.icon-label:before {
  content: "\e643";
}

.icon-production:before {
  content: "\e645";
}

.icon-tool:before {
  content: "\e646";
}

.icon-factory:before {
  content: "\e647";
}

.icon-dashboard:before {
  content: "\e648";
}

.icon-shielding:before {
  content: "\e649";
}

.icon-compass:before {
  content: "\e64a";
}

.icon-gift:before {
  content: "\e64b";
}

.icon-power:before {
  content: "\e64c";
}

.icon-calendar:before {
  content: "\e64d";
}

.icon-transport:before {
  content: "\e64e";
}

.icon-voice:before {
  content: "\e64f";
}

.icon-voice-fill:before {
  content: "\e650";
}

.icon-mute:before {
  content: "\e651";
}

.icon-mute-fill:before {
  content: "\e652";
}

.icon-microphone:before {
  content: "\e653";
}

.icon-microphone-fill:before {
  content: "\e654";
}

.icon-time:before {
  content: "\e655";
}

.icon-wifi:before {
  content: "\e657";
}

.icon-transmission:before {
  content: "\e658";
}

.icon-remind:before {
  content: "\e659";
}

.icon-remind-fill:before {
  content: "\e65a";
}

.icon-a-remindoff:before {
  content: "\e65b";
}

.icon-a-remind-filloff:before {
  content: "\e65c";
}

.icon-sharing:before {
  content: "\e65d";
}

.icon-video:before {
  content: "\e65e";
}

.icon-video-fill:before {
  content: "\e65f";
}

.icon-screenshot:before {
  content: "\e660";
}

.icon-screen:before {
  content: "\e661";
}

.icon-screen-fill:before {
  content: "\e662";
}

.icon-print:before {
  content: "\e663";
}

.icon-Interface:before {
  content: "\e664";
}
</style>
