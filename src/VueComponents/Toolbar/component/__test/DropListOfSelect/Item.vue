<template>
    <div 
    :style="{
      height: '32px',
    }"
    @click="click && click()"
    >
      <div :style="{
        float: 'left',
      }">
        <i class="iconfont" :style="{
        fontSize: '16px',
        color: 'white',
      }" v-html="icon"></i>
      </div>
      
      <div :style="{
        float: 'left',
      }">
        {{ text }}
      </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ['icon', 'text', 'click'],
  methods: {
      
  }
};
</script>

<style>

</style>
