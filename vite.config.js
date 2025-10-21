import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  define: {
    // 关键：完全模拟Node.js的process环境
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": JSON.stringify({
      NODE_ENV: "production",
    }),
    global: "window", // 添加这个
    globalThis: "window", // 添加这个
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ABot",
      fileName: "widget",
    },
    rollupOptions: {
      // 不设置external，让Vue打包进最终文件
      output: {
        format: "umd",
      },
    },
  },
});
