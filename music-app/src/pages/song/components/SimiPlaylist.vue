<template>
    <div>
        <div class="wrapper">
            <div class="title">相似歌单</div>
            <div class="playlist-item" v-for="item,index of simiPlaylist" :key="index">
                <a href=""><img :src="item.coverImgUrl" alt=""></a>
                <div class="desc">
                    <div class="p-name"><a :href="'/album/' + item.id">{{item.name}}</a></div>
                    <div class="u-name"><span>by:</span><a href="">{{item.creator.nickname}}</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimiPlaylist',
    props:{
        simiPlaylist: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
.wrapper
    width 305px
    margin 20px
    height 300px
    .title
        font-size 0.8em
        font-weight 700
        line-height 1.3em
        border-bottom  1px solid #ccc
    .playlist-item
        width 305px
        height 86px
        margin 10px 0
        img
            float left
            width 86px
            height 86px
        .desc
            float left
            width 210px
            .p-name
                ellipsis()
                height 43px
                padding 0 10px
                line-height 34px
                font-size 0.8em
                a
                    color #000
                a:hover
                    color #000
                    text-decoration underline
            .u-name
                ellipsis()
                height 43px
                padding 0 10px
                line-height 34px
                font-size 0.8em
                a
                    color #000
                a:hover
                    color #000
                    text-decoration underline
</style>