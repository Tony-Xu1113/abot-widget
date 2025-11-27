// scripts/inline-css.cjs
const fs = require("fs");
const path = require("path");

console.log("🔄 开始内联 CSS...");

// 读取构建后的文件
const jsPath = path.join(__dirname, "../dist/widget.js");
const cssPath = path.join(__dirname, "../dist/widget.css");

if (!fs.existsSync(cssPath)) {
  console.log("❌ 未找到 widget.css 文件");
  process.exit(1);
}

if (!fs.existsSync(jsPath)) {
  console.log("❌ 未找到 widget.js 文件");
  process.exit(1);
}

try {
  const cssContent = fs.readFileSync(cssPath, "utf8");
  let jsContent = fs.readFileSync(jsPath, "utf8");

  console.log(`📊 CSS 文件大小: ${cssContent.length} 字符`);
  console.log(`📊 JS 文件大小: ${jsContent.length} 字符`);

  // 将 CSS 注入到 JS 中
  const injectCode = `
// 自动注入样式
(function() {
  var style = document.createElement('style');
  style.textContent = \`${cssContent
    .replace(/`/g, "\\`")
    .replace(/\\(?!['"\\])/g, "\\\\")}\`;
  document.head.appendChild(style);
})();
`;

  jsContent = injectCode + jsContent;
  fs.writeFileSync(jsPath, jsContent);

  // 删除单独的 CSS 文件
  fs.unlinkSync(cssPath);

  console.log("✅ CSS 已内联到 JS 文件中");
  console.log(`📊 最终 JS 文件大小: ${jsContent.length} 字符`);
} catch (error) {
  console.log("❌ 内联 CSS 失败:", error.message);
  process.exit(1);
}
