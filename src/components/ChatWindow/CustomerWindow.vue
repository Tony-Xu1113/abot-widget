<template>
  <div ref="wrapperRef" class="style-wrapper" :style="{ '--lang-spacing': getUCLang() === 'en-US' ? '0px' : '6px' }">
    <!-- 入口按钮 -->
    <div v-if="!dialogOpen" class="entrance-style" :class="{
      'entrance-type-rect': entranceProps.entranceType === EntranceType.RECT,
      'entrance-type-square': entranceProps.entranceType === EntranceType.SQUARE,
      'entrance-type-circle': entranceProps.entranceType === EntranceType.CIRCLE,
      'entrance-type-none': entranceProps.entranceType === EntranceType.INVISIBLE
    }" :style="{
      '--width': `${entranceProps.width}px`,
      '--height': `${entranceProps.height}px`,
      '--bg-color': `${entranceProps.color}`,
      '--top': `${posTop}`,
      '--bottom': ``,
      '--left': `${posLeft}`,
      '--right': ``,
    }" @click="handleDialogOpen">
      <img :src="getImgUrl('logo/white-logo', 'png')" :style="{ height: '20px', width: '20px' }" />
      <span v-if="!noText" class="entrance-label" :class="{
        'entrance-label-rect': entranceProps.entranceType === EntranceType.RECT,
        'entrance-label-square': entranceProps.entranceType === EntranceType.SQUARE,
        'entrance-label-circle': entranceProps.entranceType === EntranceType.CIRCLE,
      }">{{ showLabel }}</span>
    </div>

    <!-- 聊天框 -->
    <ChatDialog v-if="dialogOpen" @close="dialogOpen = false" :props="entranceProps" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
import ChatDialog from "./ChatDialog/ChatDialog.vue";
import { EntranceLocationType, EntranceType } from "../../enum/sessionEnum";
import { useLang } from "../../hooks/useLang";
import { useWrapperSize } from "../../hooks/useWrapperHeight";
import { getImgUrl } from "../../utils/getImgUrl";
import { useChatStore } from "../../store/chat";
import { getChatHistory, getLatestChat, getStyleSetting } from "../../api/simple-api";

interface Config {
  configId?: string
}

export default defineComponent({
  name: "CustomerWindow",
  components: { ChatDialog },
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
    const { getUCLang } = useLang() // zh-CN zh-TW en-US

    const wrapperRef = ref()

    const cStore = useChatStore()

    const { wrapperHeight, wrapperWidth } = useWrapperSize(wrapperRef)

    const dialogOpen = ref<boolean>(false)

    // 默认值，之后要改
    const entranceProps = ref({
      id: "",
      channelId: props.config.configId,
      channelName: "",
      remark: "",
      announcementFlag: false,
      announcement: {
        ['zh-CN']: ""
      },
      accessCode: '',
      linkCode: "",
      entranceType: 0,
      width: 44,
      height: 128,
      color: "#00703d",
      location: 1,
      buttonText: {
        ['en-US']: "Live Chat",
        ['zh-TW']: "在線客服",
        ['zh-CN']: "在线客服"
      },
      delay: "3000",
      boxColor: "#00703d",
      logo: "/logo/abot-logo-white.png",
      agentLogo: "/avatar/avatar-0.png",
      boxWidth: 250,
      boxHeight: 560
    })

    onMounted(async () => {
      // 记录channelId
      cStore.channelId = props.config.configId ?? '0'

      // 获取客服组件的样式参数
      const response = await getStyleSetting(props.config.configId)

      const data = await response.json();

      // 临时存取配置
      entranceProps.value = data.data
      console.log("配置获取成功:", entranceProps.value);

      // 确保获取到当前的chatId以及chat状态
      if (cStore.chatId === '0') {
        const latestChat = await getLatestChat(props.config.configId)
        const latestChatData = await latestChat.json();
        console.log("聊天信息获取成功:", latestChatData.data);
        if (latestChatData.data !== null) {
          cStore.chatId = latestChatData.data.chatId
          cStore.chatStatus = latestChatData.data.status
        }
      }

      if (cStore.chatId !== '0') {
        console.log('读到chatId:', cStore.chatId)
        const history = await getChatHistory(cStore.chatId, props.config.configId)
        const historyData = await history.json();
        console.log(historyData.data)
        // cStore.loadOldChat(historyData.data)
      }

      await cStore.wsConnect()
    })

    onUnmounted(() => {
      cStore.wsClose()
    })

    // 无文本样式判定
    const noText = computed(() => {
      return entranceProps.value.width === 44 && entranceProps.value.height === 44
    })

    // 顶部距离
    const posTop = computed(() => {
      const position = entranceProps.value.location
      if (position === EntranceLocationType.TOPLEFT || position === EntranceLocationType.TOPRIGHT) {
        return '0px'
      } else if (position === EntranceLocationType.MIDDLELEFT || position === EntranceLocationType.MIDDLERIGHT) {
        return `calc(${wrapperHeight.value / 2}px - var(--height) / 2 - 20px)`
      } else {
        return `calc(${wrapperHeight.value}px - var(--height) - 40px)`
      }
    })

    // 左距离
    const posLeft = computed(() => {
      const position = entranceProps.value.location
      if (position === EntranceLocationType.TOPRIGHT || position === EntranceLocationType.MIDDLERIGHT || position ===
        EntranceLocationType.BOTTOMRIGHT) {
        return `calc(${wrapperWidth.value}px - var(--width) - 40px)`
      } else {
        return '0px'
      }
    })

    // 访客入口的按钮文本
    const showLabel = computed(() => entranceProps.value.buttonText[getUCLang()])

    // 点击访客入口，打开客服聊天框
    const handleDialogOpen = () => {
      dialogOpen.value = true
    }

    return {
      getImgUrl, getUCLang,
      showLabel, noText,
      entranceProps, EntranceType,
      posTop, posLeft,
      wrapperRef,
      dialogOpen, handleDialogOpen
    }
  }
})
</script>

<style lang="less" scoped>
.style-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;

  &>* {
    pointer-events: auto;
  }
}

.entrance-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 20px;
  gap: 8px;
  top: var(--top);
  left: var(--left);
  background-color: var(--bg-color);
  border-radius: 4px;
  transition: all 0.3s ease;
  width: var(--width);
  height: var(--height);
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

  &.entrance-type-circle {
    border-radius: 50%;
  }

  &.entrance-type-none {
    display: none;
  }
}

.entrance-label {
  color: white;
  user-select: none;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &.entrance-label-rect {
    writing-mode: vertical-lr;
    letter-spacing: var(--lang-spacing);
    font-size: 14px;
    line-height: 20px;
    height: calc(var(--height) - 48px);
  }

  &.entrance-label-square {
    line-height: 14px;
    width: calc(var(--width) - 20px);
  }

  &.entrance-label-circle {
    line-height: 14px;
    width: calc(var(--width) - 20px);
  }
}
</style>