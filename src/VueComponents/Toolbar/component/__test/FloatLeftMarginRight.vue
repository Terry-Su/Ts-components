<template>
    <div :style="{
        float: 'left',
        height: '100%',
        marginRight: value ? value + 'px' : '0px'
    }">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'FloatLeftMarginRight',
    props: ['value']
}
</script>

<style>

</style>
