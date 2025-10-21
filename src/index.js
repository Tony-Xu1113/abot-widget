import { createApp } from "vue";
import ChatWindow from "./ChatWindow.vue";
import "./styles/index.css";

// 自动初始化函数
function autoInit() {
  // 获取当前script标签
  const currentScript = document.currentScript;
  if (!currentScript) return;

  // 从URL参数解析配置
  const scriptUrl = currentScript.src;
  const url = new URL(scriptUrl);
  const configId = url.searchParams.get("config");

  if (!configId) {
    console.error("ABot: Missing config parameter in script URL");
    return;
  }

  // 自动初始化
  initWidget(configId);
}

// 初始化组件
async function initWidget(configId) {
  try {
    // // 1. 确保Vue可用（自动加载如果不存在）
    // await loadVueIfNeeded();

    // 2. 获取用户配置
    const userConfig = await fetchUserConfig(configId);

    // 3. 创建容器
    const containerId = `abot-container-${configId}`;
    createContainer(containerId);

    // 4. 创建并挂载Vue应用
    const app = createApp(ChatWindow, {
      config: userConfig,
      containerId: containerId,
    });

    app.mount(`#${containerId}`);

    console.log("✅ ABot客服组件加载成功", userConfig);
  } catch (error) {
    console.error("❌ ABot初始化失败:", error);
  }
}

// 自动加载Vue（如果页面中不存在）
function loadVueIfNeeded() {
  return new Promise((resolve) => {
    if (window.Vue) {
      resolve();
      return;
    }
  });
}

// 获取用户配置
async function fetchUserConfig(configId) {
//   try {
//     const response = await fetch(
//       `https://api.yourdomain.com/configs/${configId}`
//     );
//     if (!response.ok) throw new Error("配置获取失败");
//     return await response.json();
//   } catch (error) {
    // 降级方案：使用默认配置
    console.warn("使用默认配置:", error);
    return getDefaultConfig(configId);
//  }
}

// 默认配置
function getDefaultConfig(configId) {
  return {
    configId: configId,
    theme: "light",
    position: "bottom-right",
    primaryColor: "#1890ff",
    headerText: "在线客服",
    autoOpen: false,
    apiUrl: "https://api.yourdomain.com",
  };
}

// 创建DOM容器
function createContainer(containerId) {
  if (document.getElementById(containerId)) return;

  const container = document.createElement("div");
  container.id = containerId;
  container.className = "abot-widget-container";
  document.body.appendChild(container);
}

// 也提供手动初始化方法（兼容性）
window.ABot = {
  init: function (userConfig) {
    if (userConfig.configId) {
      initWidget(userConfig.configId);
    } else {
      console.error("ABot.init: configId is required");
    }
  },
};

// 页面加载完成后自动初始化
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", autoInit);
} else {
  autoInit();
}
