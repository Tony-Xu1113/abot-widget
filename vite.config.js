// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  base: "https://cdn.jsdelivr.net/gh/Tony-Xu1113/abot-widget@v0.3.0/dist/",
  plugins: [
    vue({
      template: {
        transformAssetUrls: false, // 禁用资源 URL 转换
      },
    }),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    global: "window",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      vue: "vue/dist/vue.esm-bundler.js",
      "vue-i18n": "vue-i18n/dist/vue-i18n.esm-bundler.js",
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/design/font.less";@import "@/design/color.less";`,
        javascriptEnabled: true,
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ABot",
      fileName: "widget",
    },
    rollupOptions: {
      output: {
        format: "umd",
        // 关键：将 CSS 内联到 JS 中
        assetFileNames: (assetInfo) => {
          // 将 CSS 文件也命名为 .js，强制内联
          if (assetInfo.name === "style.css") {
            return "widget.css";
          }
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: false,
  },
});
