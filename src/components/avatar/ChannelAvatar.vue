<template>
  <div class="channel-avatar">
    <div class="channel-avatar-content">
      <component :is="getAvatar(id)" :style="{ width: '40px', height: '40px' }" />
    </div>
    <div v-if="channel !== 1" class="channel-avatar-badge">
      <component :is="getChannel(channel)" :style="{ width: '10px', height: '10px' }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import AvatarImg from "./AvatarImg.vue";
import ChannelImg from "./ChannelImg.vue";

export default defineComponent({
  name: "ChannelAvatar",
  props: {
    id: {
      type: String,
      default: '1'
    },
    channel: {
      type: Number,
      default: 1
    }
  },
  setup() {
    const getAvatar = (id: string) => {
      return h(AvatarImg, {
        avatar: `avatar-${id ? id : '1'}`
      })
    }

    const getChannel = (id: number) => {
      return h(ChannelImg, {
        avatar: id
      })
    }

    return { getAvatar, getChannel }
  }
})
</script>

<style lang="less" scoped>
.channel-avatar {
  position: relative;
  width: 40px;
  height: 40px;

  &-content {
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
  }

  &-badge {
    position: absolute;
    display: flex;
    padding: 1px;
    background-color: white;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
  }
}
</style>
