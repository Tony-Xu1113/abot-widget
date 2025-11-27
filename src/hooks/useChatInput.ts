// composables/useChatInput.ts
// import { useChatStore } from '@/stores/modules/session/chat'
// import {  useSessionStore } from '@/stores/modules/session/session'
import { ref, nextTick } from "vue";
import { useLang } from "./useLang";
import { getCurrentTimeString } from "../utils/getTimeDiffDisplay";
import { MessageType } from "../enum/chatEnum";
import { useChatStore } from "../store/chat";
import dayjs from "dayjs";

export function useChatInput() {
  const inputText = ref("");
  const textareaRef = ref<HTMLTextAreaElement>();
  const maxHeight = 110;
  const minHeight = 44;

  const cStore = useChatStore();
  const { getUCLang } = useLang();

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        return; // 允许默认换行
      } else {
        event.preventDefault();
        sendMessage();
      }
    }
  };

  const autoResize = () => {
    nextTick(() => {
      const textarea = textareaRef.value;
      if (!textarea) return;

      textarea.style.height = "auto";
      const newHeight = Math.max(
        Math.min(textarea.scrollHeight, maxHeight),
        minHeight
      );

      textarea.style.height = `${newHeight}px`;
      // chatStore.setChatBoxHeight(newHeight);
    });
  };

  const sendMessage = () => {
    const message = inputText.value.trim();
    if (!message) return;

    console.log("发送消息:", message);
    const query = {
      chatId: cStore.chatId,
      messageType: MessageType.TEXT,
      language: getUCLang(),
      contentType: "text/plain",
      content: message,
      timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };

    // 记得本地存储，然后显示

    cStore.wsSend(query);

    /*

    // websocket
    const sStore = useSessionStore();
    const { getUCLang } = useLang();
    const cStore = useChatStore();
    // 整理数据
    const query = {
      chatId: cStore.getSelectChat(),
      messageType: MessageType.TEXT,
      language: getUCLang.value,
      contentType: "text/plain",
      content: message,
      timestamp: getCurrentTimeString(),
    };
    // 本地直接显示打字内容
    const thisChatContent = cStore.userInfo.find(
      (item) => item.chatId === cStore.getSelectChat()
    );
    if (thisChatContent) {
      thisChatContent.content.push({
        avatar: "0",
        content: message,
        contentType: "text/plain",
        sequenceId: "unknown",
        timestamp: getCurrentTimeString(),
        sender: "agent",
      });
    }
    // 发送socket
    sStore.sendMessage(undefined, JSON.stringify(query));

    */

    inputText.value = "";
    resetHeight();

    return message; // 返回消息内容供父组件使用
  };

  const resetHeight = () => {
    nextTick(() => {
      const textarea = textareaRef.value;
      if (textarea) {
        textarea.style.height = "auto";
        // chatStore.setChatBoxHeight(minHeight);
      }
    });
  };

  return {
    inputText,
    textareaRef,
    handleKeydown,
    autoResize,
    sendMessage,
  };
}
