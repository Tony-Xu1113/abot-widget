<template>
  <div class="chat-input-card">
    <CustomerInputToolbar />
    <textarea ref="textareaRef" v-model="inputText" @keydown="handleKeydown" @input="autoResize"
      :placeholder="$t('session.chat.button.placeholder')" class="chat-textarea"></textarea>
    <div class="send-button-container">
      <span class="w-400 s-12 l-20 text-4">{{ $t('session.chat.button.lineBreak') }}</span>
      <PrimaryButton size="small" label="common.send" @click="handleSend" :force-color="color" />
    </div>
    <div v-if="sendDisabled || cStore.chatStatus === 3" class="disable-mask"></div>
  </div>

</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import CustomerInputToolbar from "./CustomerInputToolbar.vue";
import PrimaryButton from "../../button/PrimaryButton.vue";
import { useChatInput } from "../../../hooks/useChatInput";
import { useChatStore } from "../../../store/chat";

export default defineComponent({
  name: "CustomerInputCard",
  components: { CustomerInputToolbar, PrimaryButton },
  props: {
    color: {
      type: String,
      default: '#00703d'
    }
  },
  setup() {
    const cStore = useChatStore()

    const sendDisabled = computed(() => cStore.sendDisable)

    const { inputText, textareaRef, handleKeydown, autoResize, sendMessage } = useChatInput()

    const handleSend = () => {
      sendMessage()
    }

    return { cStore, sendDisabled, handleSend, inputText, textareaRef, handleKeydown, autoResize, sendMessage }
  }
})
</script>

<style lang="less" scoped>
.chat-input-card {
  position: relative;
  border-radius: 4px;
  width: calc(100% - 40px);
  height: 172px;
  margin: 8px;
  padding: 10px 12px;
  background-color: white;
}

.disable-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #00000019;
  top: 0;
  left: 0;
}

.send-button-container {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
}

.chat-textarea {
  flex: 1;
  border: none;
  resize: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 22px;
  min-height: 116px;
  max-height: 200px;
  padding: 0px;
  margin-top: 4px;
  width: 100%;
  overflow-y: auto;
  transition: height 0.2s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #b8bbb8;
  }
}
</style>
