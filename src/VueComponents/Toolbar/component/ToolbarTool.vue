<template>
    <div :style="style" >
        <slot></slot>
    </div>
</template>

<script>
import * as Util from "../util/index";
import * as ToolbarToolFiber from "../toolbarToolFiber/index";

export default {
  name: "ToolbarTool",
  props: ["propStyle"],
  data() {
    return {
      style: null
    };
  },
  computed: {},
  methods: {
    ...Util.mapMethods(ToolbarToolFiber, []),
    updateDefaultStyle() {
      this.style = {
        width: this.getToolbarWidth() + 'px',
        height: this.getToolbarHeight() + "px",
        lineHeight: this.getToolbarHeight() + "px",
        // background: "orange",
      };
    },
    getParentComponent() {
      return this.$parent;
    },
    getParentComponentElement() {
      return this.getParentComponent().$el;
    },
    getToolbarWidth() {
      return this.getParentComponentElement().getBoundingClientRect().height;
    },
    getToolbarHeight() {
      return this.getParentComponentElement().getBoundingClientRect().height;
    },
  },
  mounted() {
    this.updateDefaultStyle();
  }
};
</script>

<style>

</style>
