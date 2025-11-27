<template>
  <span class="w-400 s-10 l-10 text-3 time-stamp">
    {{ $t('session.chat.time', { month: month, day: day, hour: hour, minute: min }) }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TimeStamp",
  props: {
    timestamp: {
      type: String,
      default: '2025-01-01 00:00:00'
    }
  },
  setup(props) {

    const month = computed(() => props.timestamp.split('-')[1])

    const day = computed(() => props.timestamp.split(' ')[0].split('-')[2])

    const hour = computed(() => props.timestamp.split(' ')[1].split(':')[0])

    const min = computed(() => props.timestamp.split(':')[1])

    return { month, day, hour, min }
  }
})
</script>

<style lang="less" scoped>
.time-stamp {
  text-align: center;
  margin-top: 24px;
}
</style>
