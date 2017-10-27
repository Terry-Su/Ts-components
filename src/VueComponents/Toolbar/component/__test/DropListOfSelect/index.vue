<template>
    <div :style="{
      position: 'fixed',
      width: '200px',
    }">
      
      <div :style="{
        paddingLeft: triangeLeft + 'px' || '40px',
      }">
        <Traiange :width="triangeWidth" />
      </div>

      <Item icon="&#xe712;" text="Select Rectangle"  :click="itemClickProxy" />
      <Item icon="&#xe6de;" text="Select Circle" :click="itemClickProxy" />
      <Item icon="&#xe6fb;" text="Select Rectangle" :click="itemClickProxy" />
    </div>
</template>


<script>
import Item from './Item.vue'
import Traiange from './Traiange.vue'


export default {
  name: "DropListOfSelect",
  props: ['itemClick', 'triangeLeft', 'triangeWidth'],
  components: {
    Item,
    Traiange,
  },
  methods: {
    itemClickProxy(e, instance) {
      this.itemClick && this.itemClick(e, instance)
    }
  }
};
</script>

<style>

</style>
