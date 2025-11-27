<template>

  <div class="primary-button" :style="{ 'background-color': forceColor }"
    :class="{ 'full-width': fullWidth, 'ghost': ghost, 'error': error, 'disabled': disabled || loading, 'big': size === 'big', 'small': size === 'small' }"
    @click="handleClick">
    <span class="w-400 s-14 primary-button-label" :class="{ 'ghost': ghost, 'disabled': disabled || loading }">
      {{ $t(label) }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, PropType } from 'vue';

export default defineComponent({
  name: "PrimaryButton",
  props: {
    label: {
      type: String,
      default: 'common.default.default'
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    size: {
      type: String as PropType<'big' | 'default' | 'small'>,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => { }
    },
    forceColor: {
      type: String,
      default: undefined
    }
  },
  setup(props) {

    const handleClick = () => {
      if (!props.disabled)
        props.onClick()
    }

    return { handleClick }
  }
})
</script>

<style lang="less" scoped>
.primary-button {
  background-color: #00703d;
  padding: 7px 20px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 8px;

  &.big {
    padding: 10px 20px;
  }

  &.small {
    padding: 5px 16px;
  }

  &:hover,
  &:focus {
    transform: translateY(-2px);
  }

  &:active {
    transform: translate(0px);
  }

  &.full-width {
    width: 100%;
  }

  &.disabled {
    background-color: #99c6b1;

    &:hover,
    &:focus {
      transform: translate(0px);
      cursor: not-allowed;
    }
  }

  &.ghost {
    background-color: #f1f3f1;

    &.disabled {
      background-color: #f8f9f8;

      &:hover,
      &:focus {
        transform: translate(0px);
        cursor: not-allowed;
      }
    }
  }

  &.error {
    background-color: #e4000c;

    &.disabled {
      background-color: #fff3f4;

      &:hover,
      &:focus {
        transform: translate(0px);
        cursor: not-allowed;
      }
    }
  }

  &-label {
    color: white;
    line-height: 22px;
    user-select: none;
    white-space: nowrap;
    transition: all 0.2s ease;

    &.ghost {
      color: #616961;

      &.disabled {
        color: #b8bbb8;
      }
    }
  }
}

.ant-spin-spinning {
  display: inline-flex;
}
</style>
