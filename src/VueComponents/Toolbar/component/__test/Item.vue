<template>
    <div 
      class="Item" 
      :style="{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          borderRadius: '3px',
          cursor: 'pointer',
      }"
    >
      <i class="iconfont" :style="{
        fontSize: '20px',
        color: 'white',
      }" v-html="icon"></i>
    </div>
</template>

<script>
export default {
  name: "Item",
  props: ["icon"],
  methods: {}
};
</script>

<style scoped>
.Item:hover {
  background: #1199d3;
}
</style>
