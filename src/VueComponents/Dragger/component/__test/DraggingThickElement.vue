<template>
    <div
        :style="style"
    >
        Dragging Element
            </div>
</template>

    <script>
export default {
  name: "DraggingThickElement",
  data() {
    return {
      style: {
        width: "1000px",
        height: "500px",
        color: "blue",
        background: "rgba(255,106,0,0.5)"
      }
    };
  }
};
</script>

    <style>

</style>