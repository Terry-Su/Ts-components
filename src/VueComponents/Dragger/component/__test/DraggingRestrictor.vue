<template>
    <div :style="style">
      <slot></slot>
    </div>
</template>

    <script>
export default {
  name: "DraggingContainer",
  data() {
    return {
      style: {
        position: "relative",
        background: "black",
        width: "300px",
        height: "300px"
      }
    };
  }
};
</script>

    <style>

</style>