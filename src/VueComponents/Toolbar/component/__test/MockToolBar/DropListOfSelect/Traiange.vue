<template>
    <div :style="{
      height: '100%',
       width: '0px',
       height: '0px',
       borderLeft: (width ? width + 'px' : '12px') + ' solid transparent',
       borderRight: (width ? width + 'px' : '12px') + ' solid transparent',
       borderBottom: (height ? height + 'px' : '9px')  + ' solid ' + (color ? color : '#3f6481'),
    }">

    </div>
</template>

<script>
export default {
  name: "Traiange",
  props: ['width', 'height', 'color']
};
</script>

<style>

</style>
