<template>
  <div class="chat-input-toolbar">
    <div class="chat-input-toolbar-left">
      <SmallIconButton name="emotion" @click="handleEmotion" />
      <SmallIconButton name="image" @click="handleEmotion" />
      <SmallIconButton name="attach" @click="handleEmotion" />
      <SmallIconButton name="subscribe" @click="handleEmotion" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmallIconButton from "../../button/SmallIconButton.vue";

export default defineComponent({
  name: 'ChatInputToolbar',
  components: { SmallIconButton },
  setup() {

    const handleEmotion = () => {
      console.log("click chat toolbar Button")
    }

    return { handleEmotion }
  }
})
</script>

<style lang="less" scoped>
.chat-input-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &-right {
    display: flex;
    align-items: center;
    gap: 12px;

    &>.text-button {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #616961;
      cursor: pointer;

      &:hover {
        scale: 1.05;
      }
    }
  }
}
</style>
