import { createApp } from "vue";
import { getOrCreateUserUUID } from "./utils/uuid";
import { createPinia } from "pinia";
import CustomerWindow from "./components/ChatWindow/CustomerWindow.vue";
import "./design/font.less";
import "./design/color.less";
import i18nPlugin, { useI18n } from "./ i18n/simple-i18n";

window.useI18n = useI18n;

// 主初始化函数
async function initABot() {
  console.log("🚀 ABot开始初始化");

  // 1. 从URL获取config参数
  let { configId } = getConfigFromURL();
  console.log("📝 获取到Config ID:", configId);

  // 2. 创建容器
  const containerId = `abot-container-${configId}`;
  createContainer(containerId);

  // 3. 从接口获取配置参数
  const userConfig = await fetchUserConfig(configId);

  const store = createPinia();

  // 3. 创建Vue应用
  const app = createApp(CustomerWindow, {
    config: userConfig,
    containerId: containerId,
  });

  app.use(store);

  try {
    app.use(i18nPlugin);
    console.log("✅ i18n 安装成功");
  } catch (error) {
    console.error("❌ i18n 安装失败:", error);
  }

  app.mount(`#${containerId}`);
  console.log("✅ ABot初始化完成");
}

// 从URL获取config参数的函数
function getConfigFromURL() {
  // 方法：查找所有script标签，找到包含widget.js的那个
  const scripts = document.getElementsByTagName("script");

  for (let script of scripts) {
    if (
      script.src &&
      (script.src.includes("index.js") || script.src.includes("widget.js"))
    ) {
      try {
        const url = new URL(script.src);
        const configId = url.searchParams.get("config"); // channel-id
        return { configId } || "default";
      } catch (error) {
        console.warn("URL解析失败，使用默认config");
        return "default";
      }
    }
  }

  return "default";
}

// 从服务器获取配置
async function fetchUserConfig(configId) {
  try {
    console.log("🌐 从服务器获取配置...", configId);

    if (localStorage.getItem("__ABOT_PLUGIN_USERNAME") !== undefined) {
    }
    const username = getOrCreateUserUUID(); // unique uid for this device
    localStorage.setItem("__ABOT_PLUGIN_USERNAME__", username);

    // API配置
    const API_BASE_URL = "http://localhost:9999/auth/oauth2/token";
    // const API_BASE_URL = "https://testwww.abot.pro/auth/oauth2/token";
    const API_ENDPOINT = `${API_BASE_URL}?username=${username}&password=123&grant_type=password&scope=server`;

    // 请求头配置
    const headers = {
      "Content-Type": "application/json",
    };

    // 添加自定义token（如果存在）
    if (configId) {
      headers["Authorization"] = `Basic Y2hhdDpjMTIzNDU2`;
      headers["TENANT-ID"] = configId;
      headers["Accept-Language"] = "zh_cn";
    }

    console.log("📡 请求配置:", {
      url: API_ENDPOINT,
      headers: headers,
    });

    if (!localStorage.getItem("__ABOT_ACCESS_TOKEN__")) {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: headers,
      });

      if (!response.ok) {
        console.error("something wrong here");
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const configData = await response.json();
      console.log("✅ 配置获取成功:", configData);

      localStorage.setItem("__ABOT_ACCESS_TOKEN__", configData.access_token);
      localStorage.setItem("__ABOT_CHANNEL__", configId);
    }

    return getDefaultConfig(configId);
  } catch (error) {
    console.warn("❌ 配置获取失败，使用默认配置:", error.message);
    return getDefaultConfig(configId);
  }
}

function getDefaultConfig(configId) {
  return {
    configId: configId,
    primaryColor: "#1890ff",
  };
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

    const app = createApp(CustomerWindow, {
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
}
