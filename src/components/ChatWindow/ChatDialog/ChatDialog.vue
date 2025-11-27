<template>
  <div class="dialog-style"
    :style="{ '--bg-color': props.boxColor, '--width': `${props.boxWidth}px`, '--height': `${props.boxHeight}px` }">
    <div class="dialog-header" @click="onClose()">
      <img :src="getImgUrl(props.logo)" class="logo-image" />
      <LineArrow color="white" size="24" />
    </div>

    <CustomerContainer :color="props.boxColor" />

    <CustomerInputCard :color="props.boxColor" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerInputCard from "./CustomerInputCard.vue";
import CustomerContainer from "./CustomerContainer.vue";
import LineArrow from "../../icon/LineArrow.vue";
import { getImgUrl } from "../../../utils/getImgUrl";

export default defineComponent({
  name: "ChatDialog",
  components: { LineArrow, CustomerInputCard, CustomerContainer },
  props: {
    props: {
      type: Object,
      required: true
    },
    onClose: {
      type: Function,
      default: () => { }
    }
  },
  setup(props) {
    return { getImgUrl }
  }
})
</script>

<style lang="less" scoped>
.dialog-style {
  position: absolute;
  border: 1px solid #F2F2F2;
  margin: 20px;
  right: 0px;
  bottom: 0px;
  background-color: #f8f9f8;
  border-radius: 2px;
  width: var(--width);
  height: var(--height);
}

.dialog-header {
  display: flex;
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  background-color: var(--bg-color);
  cursor: pointer;
  margin-bottom: 8px;
}

.logo-image {
  height: 30px;
  display: block;
  margin: 0;
}
</style>
