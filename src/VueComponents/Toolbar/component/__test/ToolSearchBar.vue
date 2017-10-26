<template>
    <ToolbarTool :style="{
          float: 'left',
          width: '500px',
          height: '32px',
          marginTop: '12px',
      }">
          <SearchBar />
      </ToolbarTool>
</template>

<script>
import ToolbarTool from "../ToolbarTool.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "ToolSearchBar",
  components: {
    ToolbarTool,
    SearchBar
  },
};
</script>

<style>

</style>
