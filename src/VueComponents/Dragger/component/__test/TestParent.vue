<template>
    <div :style="style">
      <slot></slot>
    </div>
</template>

    <script>
export default {
  name: "TestParent",
  data() {
    return {
      style: {
        position: "relative",
        background: "grey",
        width: "300px",
        height: "300px"
      }
    };
  }
};
</script>

    <style>

</style>