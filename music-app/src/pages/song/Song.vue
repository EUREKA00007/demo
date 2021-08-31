<template>
    <div class="song-container">
        <song-header>
            <search-tool></search-tool>
        </song-header>
        <song-main class="song-main">
            <div class="content-left">
                <detail :songs="songs" ></detail>
                <comment :comment="comment" @changePage="getNextCommentList"></comment>
            </div>
            <div class="content-right">
                <simi-playlist :simiPlaylist="simiPlaylist"></simi-playlist>
                <simi-songs :simiSongList="simiSongList" ></simi-songs>
            </div>
        </song-main>
        <backtop></backtop>
        <player></player>
        <song-footer></song-footer>
    </div>
</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import SongHeader from '../common/Header.vue'
import SongFooter from '../common/Footer.vue'
import Backtop from '../common/Backtop.vue'
import Player from '../common/Player.vue'
import SongMain from '../common/Main.vue'
import Detail from './components/Detail.vue'
import Comment from './components/Comment.vue'
import SimiSongs from './components/SimiSongs.vue'
import SimiPlaylist from './components/SimiPlaylist.vue'

export default {
    name: "Song",
    components:{
        SearchTool,
        SongHeader,
        SongFooter,
        Player,
        Backtop,
        SongMain,
        Detail,
        Comment,
        SimiSongs,
        SimiPlaylist
    },
     data () {
        return{
            songs: [],
            comment: [],
            offset: 0,
            simiSongList:[],
            simiPlaylist:[]
        }
    },
    methods:{
        getSongDetail () {
            axios({
                method: 'get',
                url: 'http://localhost:8080/api/song/detail?ids=' + this.$route.params.id,
            }).then(this.getSongDetailSucc)
        },
        getSongDetailSucc (res){
            res = res.data
            if(res.code === 200){
                this.songs = res.songs
            }
        },
        getSongComment () {
            axios({
                method: 'get',
                url: 'http://localhost:8080/api/comment/music',
                withCredentials: true,
                params:{
                    id: this.$route.params.id ,
                    limit: 20,
                    offset: this.offset
                }
            }).then(this.getSongCommentSucc)
        },
        getSongCommentSucc (res) {
            res = res.data
            if(res.code === 200){
                if(this.comment.length === 0){
                    this.comment.push(res)
                }else{
                    this.comment = []
                    this.comment.push(res)
                }

            }
        },
        getNextCommentList (pageSize) {
            this.offset = (pageSize - 1)*20
            this.getSongComment()
        },
        getSimiSong () {
            axios({
                method: 'get',
                url: 'http://localhost:8080/api/simi/song?id=' + this.$route.params.id,
            }).then(this.getSimiSongSucc)
        },
        getSimiSongSucc (res){
            res = res.data
            console.log(res)
            if(res.code === 200){
                this.simiSongList = res.songs
            }
        },
        getSimiPlaylist () {
            axios({
                method: 'get',
                url: 'http://localhost:8080/api/simi/playlist?id=' + this.$route.params.id,
            }).then(this.getSimiPlaylistSucc)
        },
        getSimiPlaylistSucc (res){
            res = res.data
            console.log(res)
            if(res.code === 200){
                this.simiPlaylist = res.playlists
            }
        },
    },
    mounted () {
        this.getSongDetail()
        this.getSongComment()
        this.getSimiSong()
        this.getSimiPlaylist()
    }
}
</script>

<style lang="stylus" scoped>
.song-container >>> .player
    position fixed
    bottom 0
.song-container >>> .song-main
    height 2700px
.content-left
    width 799.25px
    height 2700px
    float left
    border-right 1px solid #ccc
.content-right
    width 342.93px
    height 2700px
    float left
</style>