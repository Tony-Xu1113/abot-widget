<template>
    <div class="abot-chat-window" :style="chatWindowStyle">
        <h3>🎯 ABot客服组件</h3>
        <p>Username: {{ getUsername }}</p>
        <p>Container: {{ containerId }}</p>
        <p>Chat-ID: {{ cStore.chatId }}</p>
        <button @click="testClick" :style="buttonStyle" ref="buttonRef">
            发送消息按钮
        </button>
        <button @click="testWS" :style="buttonStyle" ref="buttonRef">
            WebSocket测试按钮
        </button>

        <button @click="testWSclose" :style="buttonStyle" ref="buttonRef">
            WebSocket断开按钮
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, nextTick, CSSProperties } from 'vue'
import { useSocketIO } from '../hooks/useSocketIO';
import { useChatStore } from '../store/chat';
import dayjs from 'dayjs';

interface Config {
    primaryColor?: string
    configId?: string
}

export interface MessageQuery {
    chatId: string
    messageId?: string
    messageType: string
    sequenceId?: string
    language: string
    contentType: string
    content: string
    timestamp: string
    duration?: string
    fileSize?: string
}

/*
interface MessageType {
        String MSG_TEXT = "text";
        String MSG_BINARY = "binary";
        String MSG_RECOMMENDATIONS = "recommendations";
        String MSG_NAVIGATION = "navigation";
        String MSG_EVENT_AGENT = "eventAgent";
        String MSG_EVENT_ONLINE = "eventOnline";
        String MSG_EVENT_OFFLINE = "eventOffline";
        String MSG_EVENT_ERROR = "eventError";
        String MSG_CHAT_CONNECT = "chatConnect";
        String MSG_CHAT_DISCONNECT = "chatDisconnect";
        String MSG_QUEUE_UPDATE = "queueUpdate";
        String MSG_GRADE_CHAT = "gradeChat";
    }
*/
export enum MessageType {
    QU = 'queueUpdate',
    CC = 'chatConnect',
    TEXT = 'text',
    BINARY = 'binary',
    RECOM = 'recommendations',
}

export enum QueueType {
    SERVING = 'SERVING',
    WAITING = 'WAITING',
}

export enum ActionType {
    ADD = 'ADD',
}

export enum ChannelType {
    WEBSITE = 1,
    TELEGRAM = 2,
}

export default defineComponent({
    name: 'ChatWindow',
    props: {
        config: {
            type: Object as () => Config,
            required: true
        },
        containerId: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const cStore = useChatStore()
        const buttonRef = ref<HTMLButtonElement | null>(null)

        const getUsername = computed(() => {
            if (typeof window !== 'undefined' && window.localStorage) {
                const username = localStorage.getItem('__ABOT_PLUGIN_USERNAME__')
                return username || 'no username'
            }
            return 'no username'
        })

        const token = localStorage.getItem('__ABOT_ACCESS_TOKEN__')
        const ws = useSocketIO(`http://localhost:9999/websocket/socket.io?token=${token}&channelId=${props.config.configId}`)

        const testClick = () => {
            const query = {
                chatId: cStore.chatId,
                messageType: MessageType.TEXT,
                language: 'zh-CN',
                contentType: 'text/plain',
                content: '你好，你是人工客服吗？',
                timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            }
            ws.emit('message', JSON.stringify(query))
        }

        const testWS = async () => {
            try {
                await ws.connect()

                ws.on('message', (data) => {
                    const sourceData = JSON.parse(data)
                    if (sourceData.messageType === MessageType.CC) {
                        console.log('收到消息:', sourceData)
                        cStore.chatId = sourceData.chatId
                    } else if (sourceData.messageType === MessageType.TEXT) {
                        console.log('收到消息', sourceData)
                    }
                })

            } catch (error) {
                console.error('连接失败：', error)
            }
        }

        const testWSclose = () => {
            ws.disconnect()
        }

        const chatWindowStyle = computed<CSSProperties>(() => ({
            // 位置和布局
            position: 'fixed',
            top: '50px',
            left: '50px',
            // 背景和边框
            background: 'white',
            border: `3px solid ${props.config.primaryColor || '#1890ff'}`,
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
        }))

        const buttonStyle = computed<CSSProperties>(() => ({
            // 按钮基础样式
            background: props.config.primaryColor || '#1890ff',
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
            transition: 'background-color 0.2s ease'
        }))

        const darkenColor = (color: string, percent: number): string => {
            // 简单的颜色变暗函数
            const num = parseInt(color.replace("#", ""), 16)
            const amt = Math.round(2.55 * percent)
            const R = (num >> 16) - amt
            const G = ((num >> 8) & 0x00FF) - amt
            const B = (num & 0x0000FF) - amt
            return "#" + (
                0x1000000 +
                (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
                (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
                (B < 255 ? B < 1 ? 0 : B : 255)
            ).toString(16).slice(1)
        }

        onMounted(() => {
            // 动态添加悬停效果
            nextTick(() => {
                if (buttonRef.value) {
                    const button = buttonRef.value
                    const primaryColor = props.config.primaryColor || '#1890ff'

                    button.addEventListener('mouseenter', () => {
                        button.style.backgroundColor = darkenColor(primaryColor, 20)
                    })
                    button.addEventListener('mouseleave', () => {
                        button.style.backgroundColor = primaryColor
                    })
                }
            })
        })

        return {
            cStore,
            getUsername,
            chatWindowStyle,
            buttonStyle,
            buttonRef,
            testClick,
            darkenColor,
            testWS,
            testWSclose,
        }
    }
})
</script>