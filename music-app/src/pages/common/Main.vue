<template>
    <div class="main">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style lang="stylus" scoped>
.main
    width 1143.8px
    margin 0 auto
    border-left 1px solid #ccc
    border-right 1px solid #ccc
    height 1100px
</style>