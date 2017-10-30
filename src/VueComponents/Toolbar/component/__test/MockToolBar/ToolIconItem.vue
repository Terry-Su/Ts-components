<template>
    <ToolbarTool :style="{
        width: '43px',
        height: '40px',
        marginTop: '8px',
    }"
    @click.native="clickProxy">
        <IconItem :icon="icon" />
    </ToolbarTool>
</template>

<script>
import ToolbarTool from "../../ToolbarTool.vue";
import IconItem from "./IconItem.vue";

export default {
  name: "ToolIconItem",
  components: {
    ToolbarTool,
    IconItem
  },
  props: ["icon", 'click'],
  methods: {
      clickProxy(e) {
          this.click && this.click(e, this)
      }
  }
};
</script>

<style>

</style>
