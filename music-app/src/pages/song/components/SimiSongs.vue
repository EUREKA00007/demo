<template>
    <div>
        <div class="wrapper">
            <div class="title">相似单曲</div>
            <div class="song-item" v-for="item,index of simiSongList" :key="index">
                <div class="link">
                    <div class="name"><a :href="'/song/' + item.id">{{item.name}}</a></div>
                    <div class="artist"><span></span><a :href="'/artist/' + item.artists[0].id">{{item.artists[0].name}}</a></div>
                </div>
                <div class="play-icon"><i class="el-icon-plus" title="添加至播放列表"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimiSongs',
    props:{
        simiSongList: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
.wrapper
    width 305px
    margin 20px
    height 400px
    .title
        font-size 0.8em
        font-weight 700
        line-height 1.3em
        border-bottom  1px solid #ccc
    .song-item
        width 305px
        height 60px
        margin 10px 0
        .link
            float left
            width 230px
            .name
                padding-left 20px
                ellipsis()
                height 30px
                a
                    font-size 0.9em
                    color #333
                a:hover
                    color #333
                    text-decoration underline
            .artist
                padding-left 20px
                ellipsis()
                height 30px
                a
                    font-size 0.7em
                    color #999
                a:hover
                    color #999
                    text-decoration underline
        .play-icon
            float left
            width 60px
            height 60px
            line-height 60px
            text-align center
            i:hover
                cursor pointer
            
</style>