<template>
  <div class="small-icon-button" @click="onClick()">
    <component :is="getIcon" />
  </div>
</template>

<script lang="ts">
import AttachIcon from "../icon/AttachIcon.vue";
import EmotionIcon from "../icon/EmotionIcon.vue";
import ImageIcon from "../icon/ImageIcon.vue";
import SubscribeIcon from "../icon/subscribeIcon.vue";
import { computed, defineComponent } from "vue";


export default defineComponent({
  name: "SmallIconButton",
  props: {
    name: {
      type: String,
      default: 'emotion'
    },
    onClick: {
      type: Function,
      default: () => { }
    }
  },
  setup(props) {
    const getIcon = computed(() => {
      if (props.name === 'emotion') {
        return EmotionIcon
      } else if (props.name === 'image') {
        return ImageIcon
      } else if (props.name === 'attach') {
        return AttachIcon
      } else if (props.name === 'subscribe') {
        return SubscribeIcon
      }

      return EmotionIcon
    })

    return { getIcon }
  }
})
</script>

<style lang="less" scoped>
.small-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
}
</style>
