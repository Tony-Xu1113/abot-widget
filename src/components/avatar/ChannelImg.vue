<template>
  <img :src="getImgUrl(`channel/${avatar === 1 ? 'none' : 'telegram'}`, 'png')" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getImgUrl } from '../../utils/getImgUrl';

export default defineComponent({
  name: "ChannelImg",
  props: {
    avatar: {
      type: Number,
      default: 1
    }
  },
  setup() {
    return { getImgUrl }
  }
})
</script>
