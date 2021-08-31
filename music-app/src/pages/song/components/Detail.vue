<template>
    <div>
        <div class="song-detail" v-for="item,index of songs" :key="index">
            <img :src="item.al.picUrl" alt="">
            <div class="song-desc">
                <h2>{{item.name}}</h2>
                <div class="artist">
                    <span>歌手：</span><a :href="'/artist/' + item.ar[0].id">{{item.ar[0].name}}</a>
                </div>
                <div class="album">
                    <span>所属专辑：</span><a :href="'/artist/' + item.al.id">{{item.al.name}}</a>
                </div>
                <div class="addSong" title="添加至歌单"><el-button type="primary" icon="el-icon-plus"></el-button></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props:{
        songs: Array
    }
}
</script>

<style lang="stylus" scoped>
.song-detail
    width 799.25px
    height 300px
    img
        float left
        width 200px
        height 200px
        margin 30px
        border 1px solid #ccc
        box-shadow: 10px 10px 5px #888888
    .song-desc
        float left
        width 490px
        height 300px
        h2
            margin 40px 20px
        span
            font-size 0.8em
            color #333
            line-height 2em
            padding-left 20px
        a
            font-size 0.8em
            color #000
        a:hover
            text-decoration underline
        .addSong
            margin 20px
</style>