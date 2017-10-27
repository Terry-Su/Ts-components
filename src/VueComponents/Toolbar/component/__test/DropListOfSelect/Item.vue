<template>
    <div 
    class="Item" 
    :style="{
      background: '#3f6481',
      cursor: 'pointer',
    }"
    @click="clickProxy"
    >
      <div :style="{
        float: 'left',
        width: '36px',
        height: '100%',
        marginRight: '-36px',
        textAlign: 'right',
        lineHeight: '32px',
      }">
        <i class="iconfont" :style="{
          fontSize: '16px',
          color: 'white',
        }" v-html="icon"></i>
      </div>
      
      <div :style="{
        height: '100%',
        marginLeft: '36px',
        paddingLeft: '10px',
        color: 'white',
        fontSize: '10px',
        lineHeight: '32px',
      }">
        {{ text }}
      </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["icon", "text", "click"],
  methods: {
    clickProxy(e) {
      this.click && this.click(e, this);
    }
  }
};
</script>

<style scoped>
.Item:active {
  background: #214869 !important;
}
</style>
