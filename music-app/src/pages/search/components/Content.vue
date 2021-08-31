<template>
    <div class="search-result">
        <div class="result-desc">搜索‘{{this.$route.query.keywords}}’，找到 <span>{{songCount}}</span> 首单曲</div>
        <div class="result-item" v-for="item of songList" :key="item.id">
            <i class="el-icon-plus" @click="handleSongclick(item)"></i>
            <div class="title"><a href="">{{item.name}}</a></div>
            <div class="artist"><a href="">{{item.artists[0].name}}</a></div>
            <div class="album"><a href="">{{item.album.name}}</a></div>
            <div class="duration">{{parseInt((item.duration%3600000)/60000) + ':' + parseInt((item.duration%60000)/1000)}}</div>
        </div>
        <div class="search-pagination">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="songCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Bus from '@/tools/bus.js'
import axios from 'axios'
export default {
    name: 'Content',
    props:{
        songList: Array,
        songCount: Number
    },
    data () {
        return{
            songLrc:'',
            albumPicUrl: '',
            currentPage: 1
        }
    },
    methods:{
        handleSizeChange(val) {
            this.$emit('changePage',val)
        },
        handleCurrentChange(val) {
            this.$emit('changePage',val)
        },
        handleSongclick (song) {
            this.getSongLrc(song)
            this.getAlbumInfo(song)
        },
        addSong(song){
            const music = {
                title: song.name,
                artist: song.artists[0].name,
                src: 'https://music.163.com/song/media/outer/url?id=' + song.id + '.mp3',
                pic: this.albumPicUrl,
                lrc: this.songLrc
            }
            
            Bus.$emit('addSong',music)
        },
        getSongLrc (song) {
            axios({
                method: 'get',
                url: 'api/lyric?id='+ song.id
            }).then((res)=>{
                res = res.data
                if(res.code === 200 && res.nolyric){
                    this.songLrc = '[00:00.000] 暂无歌词\n'
                }else{
                    this.songLrc = res.lrc.lyric
                }
            })
        },
        getAlbumInfo (song) {
            axios({
                method: 'get',
                url: 'api/album?id='+ song.album.id
            }).then((res)=>{
                res = res.data
                if(res.code === 200){
                    this.albumPicUrl = res.album.picUrl
                    this.addSong(song)
                }
            })
        }
    },
    mounted () {
        
    }

}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
.result-desc
    padding 20px 5%
    font-size 0.8em
    span
        color red
.result-item
    width 90%
    height 45px
    font-size 0.8em
    line-height 45px
    padding-left 10px
    margin 0 auto
    .el-icon-plus
        float left
        padding-left 50px
        line-height 45px
    .el-icon-plus:hover
        cursor pointer
        color #fff
    .title
        width 150px
        float left 
        padding-left 50px
        ellipsis()
    .artist
        width 150px
        float left 
        padding-left 150px
        ellipsis()
    .album
        float left 
        width 188px
        padding-left 50px
        ellipsis()
    .title a,.artist a,.album a
        color #000
    .title a:hover,.artist a:hover,.album a:hover
        text-decoration underline
    .duration 
        float left 
        padding-left 100px
        ellipsis()

.result-item:hover
    background #e2e2e2
.search-pagination
    width 100%
    margin-top 30px
    text-align center
</style>