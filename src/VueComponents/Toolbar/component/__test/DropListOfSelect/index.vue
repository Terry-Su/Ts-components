<template>
    <div :style="{
      position: 'fixed',
      width: '200px',
    }">
      <Item icon="&#xe712;" text="Select Rectangle"  />
      <Item icon="&#xe6de;" text="Select Rectangle"  />
      <Item icon="&#xe6fb;" text="Select Rectangle"  />
    </div>
</template>


<script>
import Item from './Item.vue'


export default {
  name: "DropListOfSelect",
  components: {
    Item,
  },
  methods: {
  }
};
</script>

<style>

</style>
