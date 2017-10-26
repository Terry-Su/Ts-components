<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
import * as Util from "../util/index";
import * as ToolbarFiber from "../toolbarFiber/index";

export default {
  name: "Toolbar",
  props: ["propStyle"],
  data() {
    return {
      style: null
    };
  },
  methods: {
    ...Util.mapMethods(ToolbarFiber, []),
    updateDefaultStyle() {
      this.style = {
        width: '100%',
        height: '100%',
        background: 'rgba(2, 51, 91, 0.7)',
      };
    }
  },
  mounted() {
    this.updateDefaultStyle();
  }
};
</script>

<style>

</style>
