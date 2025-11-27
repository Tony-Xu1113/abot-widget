<template>
  <div class="chat-container">
    <!-- 顶部留空 -->
    <div></div>
    <CustomerContent v-for="chat in testCurrentBox" :key="chat.sequenceId" :username="chat.username"
      :avatar="chat.avatar" :text="chat.content" :timestamp="chat.timestamp" :is-first="chat.isFirst" :is-me="chat.isMe"
      :bubble-color="color" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerContent from "./CustomerContent.vue";

export default defineComponent({
  name: "CustomContainer",
  components: { CustomerContent },
  props: {
    color: {
      type: String,
      default: '#00703d'
    }
  },
  setup() {
    const testCurrentBox = [
      { sequenceId: 1, username: 'user_fak3', avatar: '1', content: 'asdawewadkc', timestamp: '2025-07-08 12:34:56', isFirst: true, isMe: true },
      { sequenceId: 2, username: '客服一号', avatar: '5', content: '你在说什么？', timestamp: '2025-07-08 12:42:16', isFirst: true, isMe: false },
      { sequenceId: 4, username: '客服一号', avatar: '5', content: '你是机器人吗？', timestamp: '2025-07-08 12:42:37', isFirst: false, isMe: false },
      { sequenceId: 5, username: 'user_fak3', avatar: '1', content: '刚才猫爬键盘上了', timestamp: '2025-07-08 12:42:56', isFirst: true, isMe: true },
    ]

    return { testCurrentBox }
  }
})
</script>

<style lang="less" scoped>
.chat-container {
  display: grid;
  grid-template-rows: 1fr auto;
  height: calc(100% - 278px);
  padding-inline: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
