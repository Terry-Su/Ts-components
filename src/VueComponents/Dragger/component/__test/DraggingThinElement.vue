<template>
    <div
        :style="style"
    >
        Dragging Element
            </div>
</template>

    <script>
export default {
  name: "DraggingThinElement",
  data() {
    return {
      style: {
        width: "100px",
        height: "100px",
        color: "blue",
        background: "rgba(255,106,0,0.5)"
      }
    };
  }
};
</script>

    <style>

</style>