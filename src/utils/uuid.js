// 生成UUID函数
export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// 获取或创建用户UUID
export function getOrCreateUserUUID() {
  const STORAGE_KEY = "__ABOT_PLUGIN_USERNAME__";

  try {
    // 1. 尝试从localStorage获取
    let uuid = localStorage.getItem(STORAGE_KEY);

    if (uuid) {
      console.log("📝 找到现有用户UUID:", uuid);
      return uuid;
    }

    // 2. 创建新的UUID
    uuid = generateUUID();
    console.log("🆕 创建新用户UUID:", uuid);

    // 3. 保存到localStorage
    localStorage.setItem(STORAGE_KEY, uuid);
    console.log("💾 用户UUID已保存到localStorage");

    return uuid;
  } catch (error) {
    console.warn("❌ localStorage访问失败，使用临时UUID:", error.message);
    // 降级方案：生成临时UUID（不保存）
    return "temp_" + generateUUID();
  }
}
