<template>
    <div 
      class="IconItem" 
      :style="{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          borderRadius: '3px',
          cursor: 'pointer',
      }"
    >
      <i :class="'iconfont ' + icon || ''" :style="{
        fontSize: '20px',
        color: 'white',
      }"></i>
    </div>
</template>

<script>
export default {
  name: "IconItem",
  props: ["icon"],
  methods: {}
};
</script>

<style scoped>
.IconItem:hover {
  background: #1199d3;
}
</style>
