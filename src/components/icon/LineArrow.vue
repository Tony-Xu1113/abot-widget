<template>
  <svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6L8 10L4 6" :stroke="color" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '16'
  },
  color: {
    type: String,
    default: "#696D69"
  }
})
</script>
