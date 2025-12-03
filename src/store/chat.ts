import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { useSocketIO } from "../hooks/useSocketIO";
import {
  ChatStatus,
  MessageType,
  SenderIdType,
  SenderType,
} from "../enum/chatEnum";
import { useI18n } from "../ i18n/simple-i18n";

// 每个消息气泡需要拿到的数据
export interface ChatContentType {
  avatar: string;
  username: string;
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
    sendDisable: true,
  });

  const { t } = useI18n();

  const token = localStorage.getItem("__ABOT_ACCESS_TOKEN__");
  const channel = localStorage.getItem("__ABOT_CHANNEL__");
  const ws = useSocketIO(
    `http://localhost:9999/websocket/socket.io?token=${token}&channelId=${channel}`
  );

  const loadOldChat = (data: any) => {
    const oldChat = data
      .filter((i: any) => i.messageType !== MessageType.CC)
      .map((r: any) => ({
        avatar: r.avatar,
        content: r.content,
        contentType: r.contentType,
        sequenceId: r.sequenceId,
        timestamp: r.timestamp,
        sender: r.senderType,
        username: r.senderName,
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
          state.sendDisable = false; // 连上了，用户可以输入了
          const thisChat = {
            avatar: "0",
            content: sourceData.content + t("session.chat.up"),
            contentType: sourceData.contentType,
            sequenceId: sourceData.sequenceId,
            timestamp: sourceData.timestamp,
            sender: sourceData.senderType,
            username: sourceData.senderName ?? "System",
          };
          state.chatInfo.push(thisChat);
        } else if (sourceData.messageType === MessageType.CD) {
          const thisChat = {
            avatar: "0",
            content: sourceData.content + t("session.chat.down"),
            contentType: sourceData.contentType,
            sequenceId: sourceData.sequenceId,
            timestamp: sourceData.timestamp,
            sender: sourceData.senderType,
            username: sourceData.senderName ?? "System",
          };
          state.chatInfo.push(thisChat);
          state.sendDisable = true; // 客服离线了，用户不能输入了
        } else if (sourceData.messageType === MessageType.TEXT) {
          if (
            sourceData.senderType === SenderType.SYS &&
            sourceData.senderId === SenderIdType.TO_AGENT
          ) {
            return;
          }
          const thisChat = {
            avatar: sourceData.avatar ?? '0',
            content: sourceData.content,
            contentType: sourceData.contentType,
            sequenceId: sourceData.sequenceId,
            timestamp: sourceData.timestamp,
            sender: sourceData.senderType,
            username: sourceData.senderName,
          };
          state.chatInfo.push(thisChat);
          console.log(
            "从" + state.currentAgent + "收到消息:" + sourceData.content
          );
        } else if (sourceData.messageType === MessageType.ET) {
          const thisChat = {
            avatar: "0",
            content: t("chat.terminate"),
            contentType: sourceData.contentType,
            sequenceId: sourceData.sequenceId,
            timestamp: sourceData.timestamp,
            sender: SenderType.SYS,
            username: "System",
          };
          state.chatInfo.push(thisChat);
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
    loadOldChat,
  };
});
