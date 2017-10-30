<template>
    <ToolbarTool :style="{
      height: '100%',
    }">
      <ToolIconItem @click.native="click" :icon="icon" ref='item' />
      
      <div :style="{
        position: 'fixed',
        left: styleLeftOfDropListOfSelect + 'px',
        top: styleTopOfDropListOfSelect + 'px',
      }">
        <DropListOfSelect v-show="shouldShowDropList" :itemClick="DropListOfSelectClickProxy" :triangeLeft="triangeLeft" :triangeWidth="triangeWidth"/>
      </div>
      
    </ToolbarTool>
</template>

<script>
import ToolbarTool from "../ToolbarTool.vue";
import ToolIconItem from "./ToolIconItem.vue";
import DropListOfSelect from "./DropListOfSelect/index.vue";

export default {
  name: "ToolSelectItem",
  components: {
    ToolIconItem,
    DropListOfSelect,
    ToolbarTool
  },
  props: ["icon"],
  data() {
    return {
      shouldShowDropList: false,

      // style
      styleLeftOfDropListOfSelect: null,
      styleTopOfDropListOfSelect: null,
      triangeLeft: 40,
      triangeWidth: 12
    };
  },
  methods: {
    click() {
      this.updateStyleLeftOfDropListOfSelect();
      this.updateStyleTopOfDropListOfSelect();
      this.shouldShowDropList = !this.shouldShowDropList;
    },

    DropListOfSelectClickProxy(e, instance) {
      console.log(1, e, instance);
      this.shouldShowDropList = false;
    },

    // style to update
    updateStyleLeftOfDropListOfSelect() {
      if (this.$el) {
        const { triangeLeft, triangeWidth } = this;
        const { width, left } = this.$el.getBoundingClientRect();
        this.styleLeftOfDropListOfSelect =
          left + width / 2 - triangeLeft - triangeWidth / 2;
      }
    },
    updateStyleTopOfDropListOfSelect() {
      if (this.$el) {
        const { height, top } = this.$el.getBoundingClientRect();
        this.styleTopOfDropListOfSelect = top + height + 5;
      }
    }
  },
  mounted() {
    this.updateStyleLeftOfDropListOfSelect();
    this.updateStyleTopOfDropListOfSelect();
  }
};
</script>

<style>

</style>
