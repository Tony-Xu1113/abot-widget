// scripts/serve-dist.cjs
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🚀 准备本地测试...");

const rootDir = __dirname;
const distDir = path.join(rootDir, "../dist");
const testHtmlPath = path.join(rootDir, "../local-test.html");

// 1. 检查 local-test.html 是否存在
if (!fs.existsSync(testHtmlPath)) {
  console.log("❌ 未找到 local-test.html 文件");
  process.exit(1);
}

// 2. 检查 dist 目录是否存在
if (!fs.existsSync(distDir)) {
  console.log("❌ dist 目录不存在，请先运行 npm run build");
  process.exit(1);
}

try {
  // 3. 复制 local-test.html 到 dist 目录
  const destHtmlPath = path.join(distDir, "local-test.html");
  fs.copyFileSync(testHtmlPath, destHtmlPath);
  console.log("✅ 已复制 local-test.html 到 dist 目录");

  // 4. 进入 dist 目录并启动服务
  console.log("🌐 启动本地服务器...");
  console.log("📁 服务目录:", distDir);
  console.log("📍 访问地址: http://localhost:3000/local-test.html");
  console.log("⏹️  按 Ctrl+C 停止服务");

  // 切换到 dist 目录并启动 serve
  process.chdir(distDir);
  execSync("npx serve .", { stdio: "inherit" });
} catch (error) {
  console.log("❌ 启动服务失败:", error.message);
  process.exit(1);
}
