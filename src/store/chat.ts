import { defineStore } from "pinia";
import { onMounted, reactive, toRefs } from "vue";
import { useSocketIO } from "../hooks/useSocketIO";
import { MessageType } from "../components/ChatWindow.vue";
import { SenderType } from "../enum/chatEnum";

export enum ChatStatus {
  WAITING,
  ROBOT,
  AGENT,
  TERMINATION,
}

// 每个消息气泡需要拿到的数据
export interface ChatContentType {
  avatar: string;
  isFirst?: boolean;
  isMe?: boolean;
  content: string;
  contentType: string;
  sequenceId: string;
  timestamp: string;
  sender: string;
}

export const useChatStore = defineStore("chat-store", () => {
  const state = reactive({
    chatId: "0",
    chatStatus: ChatStatus.TERMINATION,
    channelId: "0",
    currentAgent: "agent-0",
    chatInfo: [] as ChatContentType[],
  });

  const token = localStorage.getItem("__ABOT_ACCESS_TOKEN__");
  const channel = localStorage.getItem("__ABOT_CHANNEL__");
  const ws = useSocketIO(
    `http://localhost:9999/websocket/socket.io?token=${token}&channelId=${channel}`
  );

  const loadOldChat = (data: any) => {
    const oldChat = data
      .filter((i: any) => i.messageType !== MessageType.CC)
      .map((r: any) => ({
        avatar: r.senderType === SenderType.AGENT ? "2" : "1",
        content: r.content,
        contentType: r.contentType,
        sequenceId: r.sequenceId,
        timestamp: r.timestamp,
        sender: r.senderType,
      }));

    state.chatInfo.push(...oldChat.reverse());
  };

  const wsConnect = async () => {
    try {
      console.log("Socket开始连接...", state.channelId);
      await ws.connect();

      ws.on("message", (data) => {
        const sourceData = JSON.parse(data);
        console.log("收到源消息：");
        console.log(sourceData);
        // chat connect 只有和真人对接才收到
        if (sourceData.messageType === MessageType.CC) {
          state.chatId = sourceData.chatId;
          state.chatStatus = 2;
          state.currentAgent = sourceData.content.split("-")[1];
        } else if (sourceData.messageType === MessageType.TEXT) {
          console.log(
            "从" + state.currentAgent + "收到消息:" + sourceData.content
          );
        }
      });

      ws.on("connect_error", (error) => {
        console.error("❌ Socket.IO 连接错误:", error);
      });

      ws.on("connect_timeout", (timeout) => {
        console.error("⏰ Socket.IO 连接超时:", timeout);
      });

      ws.on("error", (error) => {
        console.error("🚨 Socket.IO 错误:", error);
      });

      ws.on("disconnect", (reason) => {
        console.log("🔌 Socket.IO 断开连接:", reason);
      });
    } catch (error) {
      console.error("连接失败", error);
    }
  };

  const wsSend = async (query: object) => {
    ws.emit("message", JSON.stringify(query));
  };

  const wsClose = () => {
    ws.disconnect();
  };

  return {
    ...toRefs(state),
    wsConnect,
    wsClose,
    wsSend,
  };
});
