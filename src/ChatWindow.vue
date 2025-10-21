<template>
    <div class="abot-chat-window" :style="{ border: `3px solid ${config.primaryColor}` }">
        <h3>🎯 ABot客服组件</h3>
        <p>Config: {{ config.configId }}</p>
        <p>Container: {{ containerId }}</p>
        <button @click="testClick">测试按钮</button>
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
    methods: {
        testClick() {
            alert('组件工作正常！Config: ' + this.config.configId);
        }
    }
}
</script>

<style scoped>
.abot-chat-window {
    position: fixed;
    top: 50px;
    left: 50px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    font-family: Arial;
    min-width: 300px;
}
</style>