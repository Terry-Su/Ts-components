<template>
    <ToolbarTool :style="{
        width: '80px',
        height: '30px',
        marginTop: '13px',
    }"
    @click.native="clickProxy">
        <ButtonItem>
            <slot></slot>
        </ButtonItem>
    </ToolbarTool>
</template>

<script>
import ToolbarTool from "../../ToolbarTool.vue";
import ButtonItem from "./ButtonItem.vue";

export default {
  name: "ToolIconItem",
  components: {
    ToolbarTool,
    ButtonItem
  },
  props: [ 'click'],
  methods: {
      clickProxy(e) {
          this.click && this.click(e, this)
      }
  }
};
</script>

<style>

</style>
