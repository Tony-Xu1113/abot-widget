import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useWrapperSize(wrapperRef: Ref<HTMLElement>) {
  const wrapperHeight = ref(0)
  const wrapperWidth = ref(0)

  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    if (wrapperRef.value) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = entry.contentRect.height
          const width = entry.contentRect.width
          // console.log('实时高度:', (height - 142) / 2)
          wrapperHeight.value = height
          wrapperWidth.value = width
        }
      })

      resizeObserver.observe(wrapperRef.value)
    }
  })

  onUnmounted(() => {
    if (resizeObserver) {
      console.log('wrapper高度监听断开')
      resizeObserver.disconnect()
    }
  })

  return {
    wrapperHeight,
    wrapperWidth,
  }
}
