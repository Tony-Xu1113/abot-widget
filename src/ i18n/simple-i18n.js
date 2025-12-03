// src/i18n/simple-i18n.js
// 完全自定义的 i18n 实现，不依赖 vue-i18n

const translations = {
  "en-US": {
    "session.chat.time": "{month}/{day} {hour}:{minute}",
    "session.chat.button.placeholder": "Please input ...",
    "session.chat.button.lineBreak": "Press Shift+Enter to line break",
    "common.send": "Save",
    "session.chat.down": " has closed connections",
    "session.chat.up": " is ready to serve you!",
    "chat.terminate": "Chat is terminated",
  },
  "zh-CN": {
    "session.chat.time": "{month}月{day}日 {hour}:{minute}",
    "session.chat.button.placeholder": "请输入消息...",
    "session.chat.button.lineBreak": "按Shift+Enter换行",
    "common.send": "发送",
    "session.chat.down": "已下线",
    "session.chat.up": "已准备为您服务！",
    "chat.terminate": "会话已关闭",
  },
  "zh-TW": {
    "session.chat.time": "{month}月{day}日 {hour}:{minute}",
    "session.chat.button.placeholder": "請輸入消息...",
    "session.chat.button.lineBreak": "按Shift+Enter換行",
    "common.send": "發送",
    "session.chat.down": "已下線",
    "session.chat.up": "已準備為您服務！",
    "chat.terminate": "会话已关闭",
  },
};

let currentLocale = "zh-CN";

export const t = (key, params = {}) => {
  const text =
    translations[currentLocale]?.[key] || translations["zh-CN"][key] || key;
  return Object.entries(params).reduce((result, [k, v]) => {
    return result.replace(new RegExp(`{${k}}`, "g"), v);
  }, text);
};

export const setLocale = (locale) => {
  if (translations[locale]) {
    currentLocale = locale;
  }
};

export const getLocale = () => currentLocale;

// Vue 插件
export const i18nPlugin = {
  install(app) {
    app.config.globalProperties.$t = t;
    // 提供全局访问
    app.provide("i18n", { t, locale: { value: currentLocale } });
  },
};

// 兼容 useI18n
export const useI18n = () => ({
  t,
  locale: { value: currentLocale },
});

export default i18nPlugin;
