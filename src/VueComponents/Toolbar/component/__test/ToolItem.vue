<template>
    <ToolbarTool :style="{
        float: 'left',
        width: '43px',
        height: '40px',
        marginTop: '8px',
    }"
    @click.native="clickProxy">
        <Item :icon="icon" />
    </ToolbarTool>
</template>

<script>
import ToolbarTool from "../ToolbarTool.vue";
import Item from "./Item.vue";

export default {
  name: "ToolItem",
  components: {
    ToolbarTool,
    Item
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
