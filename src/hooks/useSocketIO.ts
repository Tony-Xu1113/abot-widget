/* eslint-disable @typescript-eslint/no-explicit-any */
// src/composables/useSocketIO.ts
import { io, Socket } from "socket.io-client";
import { ref, onUnmounted } from "vue";

export function useSocketIO(url: string, options: any = {}) {
  const socket = ref<Socket | null>(null);
  const isConnected = ref(false);

  // 连接 Socket
  const connect = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const baseUrl = `${urlObj.protocol}//${urlObj.host}`;
      const path = urlObj.pathname; // 获取 /basic-api/websocket/socket.io

      socket.value = io(baseUrl, {
        transports: ["websocket", "polling"],
        path: path, // 关键：设置自定义路径
        query: {
          token: urlObj.searchParams.get("token"),
          channelId: urlObj.searchParams.get("channelId"),
        },
        ...options,
      });

      socket.value.on("connect", () => {
        isConnected.value = true;
        console.log("Socket.IO 连接成功");
        resolve();
      });

      socket.value.on("connect_error", (error) => {
        console.error("Socket.IO 连接失败:", error);
        reject(error);
      });

      socket.value.on("disconnect", () => {
        isConnected.value = false;
        console.log("Socket.IO 断开连接");
      });
    });
  };

  // 发送事件
  const emit = (event: string, data?: any) => {
    if (socket.value && isConnected.value) {
      socket.value.emit(event, data);
    }
  };

  // 监听事件
  const on = (event: string, callback: (data: any) => void) => {
    socket.value?.on(event, callback);
  };

  // 移除监听
  const off = (event: string) => {
    socket.value?.off(event);
  };

  // 断开连接
  const disconnect = () => {
    if (socket.value) {
      socket.value.disconnect();
      socket.value = null;
      isConnected.value = false;
    }
  };

  // 自动清理
  onUnmounted(() => {
    disconnect();
  });

  return {
    connect,
    disconnect,
    emit,
    on,
    off,
    isConnected,
  };
}
