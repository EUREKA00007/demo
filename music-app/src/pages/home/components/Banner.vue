<template>
    <div class="banner">
          <el-carousel :interval="4000" type="card" height="228px">
            <el-carousel-item v-for="item,index in bannerList" :key="index">
                <a :href="item.imageUrl" target="_blank"><img :src="item.imageUrl" :title="item.typeTitle"></a>
            </el-carousel-item>
         </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Bannner',
    props:{
        bannerList: Array
    },
    data () {
        return{

        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    width 1143.8px
    margin 0 auto
    img
        width 100%
</style>