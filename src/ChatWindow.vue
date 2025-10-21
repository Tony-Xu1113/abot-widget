<template>
    <div class="abot-chat-window" :style="chatWindowStyle">
        <h3>🎯 ABot客服组件</h3>
        <p>Config: {{ config.configId }}</p>
        <p>Container: {{ containerId }}</p>
        <button @click="testClick" :style="buttonStyle">
            测试按钮
        </button>
    </div>
</template>

<script>
export default {
    name: 'ChatWindow',
    props: {
        config: {
            type: Object,
            required: true
        },
        containerId: {
            type: String,
            required: true
        }
    },
    computed: {
        chatWindowStyle() {
            return {
                // 位置和布局
                position: 'fixed',
                top: '50px',
                left: '50px',
                // 背景和边框
                background: 'white',
                border: `3px solid ${this.config.primaryColor || '#1890ff'}`,
                borderRadius: '8px',
                // 阴影
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                // 尺寸
                padding: '20px',
                minWidth: '300px',
                // 层级和字体
                zIndex: '10000',
                fontFamily: 'Arial, sans-serif',
                // 其他
                boxSizing: 'border-box'
            };
        },
        buttonStyle() {
            return {
                // 按钮基础样式
                background: this.config.primaryColor || '#1890ff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 16px',
                // 字体
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                // 交互
                cursor: 'pointer',
                // 布局
                marginTop: '10px',
                // 过渡效果
                transition: 'background-color 0.2s ease',
                // 鼠标悬停效果
                ':hover': {
                    background: this.config.primaryColor ? this.darkenColor(this.config.primaryColor, 20) : '#096dd9'
                }
            };
        }
    },
    methods: {
        testClick() {
            alert('组件工作正常！Config: ' + this.config.configId);
        },
        darkenColor(color, percent) {
            // 简单的颜色变暗函数
            const num = parseInt(color.replace("#", ""), 16);
            const amt = Math.round(2.55 * percent);
            const R = (num >> 16) - amt;
            const G = (num >> 8 & 0x00FF) - amt;
            const B = (num & 0x0000FF) - amt;
            return "#" + (
                0x1000000 +
                (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
                (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
                (B < 255 ? B < 1 ? 0 : B : 255)
            ).toString(16).slice(1);
        }
    },
    mounted() {
        // 动态添加悬停效果
        this.$nextTick(() => {
            const button = this.$el.querySelector('button');
            if (button) {
                button.addEventListener('mouseenter', () => {
                    const primaryColor = this.config.primaryColor || '#1890ff';
                    button.style.backgroundColor = this.darkenColor(primaryColor, 20);
                });
                button.addEventListener('mouseleave', () => {
                    button.style.backgroundColor = this.config.primaryColor || '#1890ff';
                });
            }
        });
    }
}
</script>

<!-- 删除style标签，所有样式都已内联 -->