<template>
    <ToolbarTool :style="{
        float: 'left',
        width: '43px',
        height: '40px',
        marginTop: '8px',
    }">
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
  props: ["icon"],
};
</script>

<style>

</style>
