<template>
    <div :style="{
      height: '100%',
    }">
      <ToolItem @click.native="click" :icon="icon" ref='item' />
      
      <DropListOfSelect v-show="shouldShowDropList" />
    </div>
</template>

<script>
import ToolItem from "./ToolItem.vue";
import DropListOfSelect from "./DropListOfSelect/index.vue";

export default {
  name: "ToolSelectItem",
  components: {
    ToolItem,
    DropListOfSelect,
  },
  props: ["icon"],
  data() {
    return {
      shouldShowDropList: true
    }
  },
  methods: {
    click() {
      this.shouldShowDropList = !this.shouldShowDropList
    }
  }
};
</script>

<style>

</style>
