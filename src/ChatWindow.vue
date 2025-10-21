<template>
    <div class="abot-widget-test">
        <p :style="{ 'color': config.primaryColor }">This is a very simple test of abot-widget</p>
        <p>containerId: {{ containerId }}</p>
    </div>

</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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
    }
})
</script>