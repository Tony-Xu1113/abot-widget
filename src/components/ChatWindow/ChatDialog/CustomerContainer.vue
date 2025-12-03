<template>
  <div class="chat-container" ref="chatRef">
    <!-- 顶部留空 -->
    <div></div>
    <CustomerContent v-for="chat in currentChatBox" :key="chat.sequenceId" :username="chat.username"
      :avatar="chat.avatar" :text="chat.content" :timestamp="chat.timestamp" :is-first="chat.isFirst" :is-me="chat.isMe"
      :bubble-color="color" />
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, onMounted, watch, nextTick } from "vue";
import CustomerContent from "./CustomerContent.vue";
import { useChatStore } from "../../../store/chat";

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
    const cStore = useChatStore()
    const chatRef = ref()

    const currentChatBox = computed(() => {
      const chats = cStore.chatInfo
      return chats.map((chat, index) => {
        const previousChat = index > 0 ? chats[index - 1] : null

        return {
          ...chat,
          isFirst: !previousChat || chat.sender !== previousChat.sender,
          isMe: chat.sender === 'custom',
        }
      })
    })

    const scrollToBottom = () => {
      const scrollContainer = chatRef.value
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        })
      }
    }

    watch(() => currentChatBox.value, () => {
      nextTick(() => { scrollToBottom() })
    })

    onMounted(() => {
      nextTick(() => { scrollToBottom() })
    })

    return { currentChatBox, chatRef }
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
