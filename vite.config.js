import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
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
