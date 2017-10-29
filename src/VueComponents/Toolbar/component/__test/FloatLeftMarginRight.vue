<template>
    <div :style="{
        //float: 'left',
        display: 'inline-block',
        height: '100%',
        whiteSpace: 'normal',
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
