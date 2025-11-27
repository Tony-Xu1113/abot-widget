<template>
  <img :src="getImgUrl(`avatar/${avatar}`, 'png')" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getImgUrl } from '../../utils/getImgUrl';

export default defineComponent({
  name: "AvatarImg",
  props: {
    avatar: {
      type: String,
      default: "avatar-1"
    }
  },
  setup() {
    return { getImgUrl }
  }
})
</script>
