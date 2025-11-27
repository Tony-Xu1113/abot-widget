<!-- 聊天主体： 头像+对话框 -->
<template>
  <div class="chat-content">
    <TimeStamp v-if="isFirst" :timestamp="timestamp" />
    <div class="main-chat" :class="{ 'my-chat': isMe, 'first-chat': isFirst }">
      <!-- 头像 -->
      <ChannelAvatar v-if="isFirst" :id="avatar" />

      <!-- 对话框 -->
      <div class="main-chat-wrapper">
        <span v-if="isFirst && !isMe" class="w-500 s-12 l-20 username-label">{{ username }}</span>
        <div class="main-chat-bubble" :class="{ 'my-chat': isMe, 'first-chat': isFirst }"
          :style="{ '--bubble-color': color }">
          <span class="w-400 s-14 l-20">{{ text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TimeStamp from "./TimeStamp.vue";
import ChannelAvatar from "../../avatar/ChannelAvatar.vue";

export default defineComponent({
  name: "CustomerContent",
  components: { ChannelAvatar, TimeStamp },
  props: {
    username: {
      type: String,
      default: "username"
    },
    avatar: {
      type: String,
      default: "0"
    },
    text: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    timestamp: {
      type: String,
      default: '2025-01-01 00:00:00'
    },
    isMe: {
      type: Boolean,
      default: false
    },
    isFirst: {
      type: Boolean,
      default: true
    },
    bubbleColor: {
      type: String,
      default: '#00703d'
    }
  },
  setup(props) {
    const color = computed(() => props.bubbleColor + '19')

    return { color }
  }
})
</script>

<style lang="less" scoped>
.chat-content {
  display: flex;
  flex-direction: column;
}

.main-chat {
  display: flex;
  gap: 12px;
  margin-right: 48px;
  margin-top: 8px;

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &-bubble {
    padding: 8px 12px;
    background-color: white;
    border-radius: 4px;
    width: fit-content;
    height: fit-content;
    margin-left: 52px;

    &.my-chat {
      background-color: var(--bubble-color);
      margin-right: 52px;
      margin-left: 0px;
    }

    &.first-chat {
      margin-inline: 0px;
    }
  }

  &.my-chat {
    flex-direction: row-reverse;
    margin-right: 0px;
    margin-left: 48px;
  }

  &.first-chat {
    margin-top: 24px;
  }
}

.username-label {
  color: #616961
}
</style>
