import { createApp } from "vue";
import ChatWindow from "./ChatWindow.vue";

// 主初始化函数
function initABot() {
  console.log("🚀 ABot开始初始化");

  // 1. 从URL获取config参数
  let configId = getConfigFromURL();
  console.log("📝 获取到Config ID:", configId);

  // 2. 创建容器
  const containerId = `abot-container-${configId}`;
  createContainer(containerId);

  // 3. 创建Vue应用
  const app = createApp(ChatWindow, {
    config: {
      configId: configId,
      theme: "light",
      position: "bottom-right",
      primaryColor: "#1890ff",
      headerText: "在线客服",
      autoOpen: true,
    },
    containerId: containerId,
  });

  app.mount(`#${containerId}`);
  console.log("✅ ABot初始化完成");
}

// 从URL获取config参数的函数
function getConfigFromURL() {
  // 方法：查找所有script标签，找到包含widget.js的那个
  const scripts = document.getElementsByTagName("script");

  for (let script of scripts) {
    if (script.src && script.src.includes("widget.js")) {
      try {
        const url = new URL(script.src);
        const configId = url.searchParams.get("config");
        return configId || "default";
      } catch (error) {
        console.warn("URL解析失败，使用默认config");
        return "default";
      }
    }
  }

  return "default";
}

// 创建容器的函数
function createContainer(containerId) {
  if (document.getElementById(containerId)) return;

  const container = document.createElement("div");
  container.id = containerId;
  document.body.appendChild(container);
  console.log("📦 创建容器:", containerId);
}

// 手动初始化方法
window.ABot = {
  init: function (userConfig) {
    const configId = userConfig.configId || "manual";
    const containerId = `abot-container-${configId}`;

    createContainer(containerId);

    const app = createApp(ChatWindow, {
      config: { ...userConfig, configId: configId },
      containerId: containerId,
    });

    app.mount(`#${containerId}`);
    console.log("✅ 手动初始化完成");
  },
};

// 页面加载后自动初始化
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initABot);
} else {
  initABot();
}
