// src/customer-window-fixed.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import CustomerWindow from "./components/ChatWindow/CustomerWindow.vue";
import i18nPlugin, { useI18n } from "./ i18n/simple-i18n";

console.log("🎯 CustomerWindow 修复测试");

window.useI18n = useI18n

const app = createApp({
  template: `
    <div style="padding: 40px; background: #f5f5f5; min-height: 100vh;">
      <h1>CustomerWindow 组件测试</h1>
      <p>下面的虚线框内应该显示聊天窗口：</p>
      
      <div style="border: 3px dashed red; padding: 20px; margin: 20px 0; background: white;">
        <CustomerWindow 
          :config="config" 
          containerId="test-customer-window"
        />
      </div>
      
      <p>如果上面显示聊天界面，说明一切正常</p>
    </div>
  `,
  data() {
    return {
      config: {
        configId: "6ceab95e-38a4-4714-b592-4f5e5c516bb3",
        primaryColor: "#1890ff"
      }
    }
  },
  components: {
    CustomerWindow
  },
  mounted() {
    console.log("✅ CustomerWindow 测试应用已挂载");
  }
});

const store = createPinia();

app.use(store);
app.use(i18nPlugin);

app.mount('#app');
console.log("✅ CustomerWindow 应用已初始化");