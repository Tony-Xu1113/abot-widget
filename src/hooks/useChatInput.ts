import { ref, nextTick } from "vue";
import { useLang } from "./useLang";
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

    const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

    console.log("发送消息:", message);
    const query = {
      chatId: cStore.chatId,
      messageType: MessageType.TEXT,
      language: getUCLang(),
      contentType: "text/plain",
      content: message,
      timestamp: currentTime,
    };

    const thisChat = {
      avatar: "1", // 网页渠道客户默认头像
      content: message,
      contentType: "text/plain",
      sequenceId: "unknown",
      timestamp: currentTime,
      sender: "custom",
      username: "custom",
    };

    // 本地存储
    cStore.chatInfo.push(thisChat);

    cStore.wsSend(query);

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
