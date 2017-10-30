<template>
    <ToolbarTool :style="{
      width: '2px',
      height: '24px',
      marginTop: '16px',
    }">
      <Seperator />
    </ToolbarTool>
</template>

<script>
import Seperator from "./Seperator.vue";
import ToolbarTool from "../ToolbarTool.vue";

export default {
  name: "ToolSeperator",
  components: {
    Seperator,
    ToolbarTool,
  }
};
</script>

<style scoped>

</style>
