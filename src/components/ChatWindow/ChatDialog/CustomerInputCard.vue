<template>
  <div class="chat-input-card">
    <CustomerInputToolbar />
    <textarea ref="textareaRef" v-model="inputText" @keydown="handleKeydown" @input="autoResize"
      :placeholder="$t('session.chat.button.placeholder')" class="chat-textarea"></textarea>
    <div class="send-button-container">
      <span class="w-400 s-12 l-20 text-4">{{ $t('session.chat.button.lineBreak') }}</span>
      <PrimaryButton size="small" label="common.send" @click="handleSend" :force-color="color" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerInputToolbar from "./CustomerInputToolbar.vue";
import PrimaryButton from "../../button/PrimaryButton.vue";
import { useChatInput } from "../../../hooks/useChatInput";

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

    const { inputText, textareaRef, handleKeydown, autoResize, sendMessage } = useChatInput()

    const handleSend = () => {
      sendMessage()
    }

    return { handleSend, inputText, textareaRef, handleKeydown, autoResize, sendMessage }
  }
})
</script>

<style lang="less" scoped>
.chat-input-card {
  border-radius: 4px;
  width: calc(100% - 40px);
  height: 172px;
  margin: 8px;
  padding: 10px 12px;
  background-color: white;
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
