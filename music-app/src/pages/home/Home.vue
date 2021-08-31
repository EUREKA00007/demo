<template>
    <div class="home-container">
        <home-header>
            <search-tool></search-tool>
        </home-header>
        <home-banner :bannerList='bannerList'></home-banner>
        <home-main class="home-main">
            <home-content :songList="songList"
                            :hotList="hotList"
                            :newAlbumList="newAlbumList"
                            :topList="topList"
                            :artistList="artistList"
                            :djRadios="djRadios"
                            >
            </home-content>
        </home-main>
        <player></player>
        <home-footer></home-footer>
    </div>
</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import HomeHeader from '../common/Header.vue'
import HomeFooter from '../common/Footer.vue'
import Player from '../common/Player.vue'
import HomeMain from '../common/Main.vue'
import HomeBanner from './components/Banner.vue'
import HomeContent from './components/Content.vue'

export default {
    name: 'Home',
    components:{
        HomeHeader,
        SearchTool,
        HomeMain,
        HomeBanner,
        HomeContent,
        HomeFooter,
        Player
        
    },
    data () {
        return{
            songList:[],
            bannerList:[],
            hotList:[],
            newAlbumList:[],
            topList:[],
            artistList:[],
            djRadios:[]
        }
    },
    methods:{
        getBanner () {
            axios({
                method: 'get',
                url: 'api/banner?type=0'
            }).then(this.getBannerSucc)
        },
        getBannerSucc (res) {
            res = res.data
            if(res.code === 200){
                this.bannerList = res.banners
            }
        },
        getHot () {
            axios({
                method: 'get',
                url: 'api/personalized'
            }).then(this.getHotSucc)
        },
        getHotSucc (res) {
            res = res.data
            if(res.code === 200){
                this.hotList = res.result
            }
        },
        getNewAlbum () {
            axios({
                method: 'get',
                url: 'api/top/album'
            }).then(this.getNewAlbumSucc)
        },
        getNewAlbumSucc (res) {
            res = res.data
            if(res.code === 200){
                this.newAlbumList = res.weekData
            }
        },
        getTopIdList () {
            axios({
                method: 'get',
                url: 'api/toplist/detail'
            }).then(this.getTopIdListSucc)
        },
        getTopIdListSucc (res) {
            res = res.data
            if(res.code === 200){
                this.getTopList(res.list[0].id)
                this.getTopList(res.list[1].id)
                this.getTopList(res.list[2].id)
            } 
        },
        getTopList (id) {
            axios({
                method: 'get',
                url: 'api/playlist/detail?id=' + id
            }).then(this.getTopListSucc)
        },
        getTopListSucc (res) {
            res = res.data
            if(res.code === 200){
                this.topList.push(res.playlist)
            } 
        },
        getHotArtists () {
            axios({
                method: 'get',
                url: 'api/top/artists?offset=0&limit=5'
            }).then(this.getHotArtistSucc)
        },
        getHotArtistSucc (res) {
            res = res.data
            if(res.code === 200){
                this.artistList = res.artists
            }
        },
        getHotDj () {
            axios({
                method: 'get',
                url: 'api/dj/hot'
            }).then(this.getHotDjSucc)
        },
        getHotDjSucc (res) {
            res = res.data
            if(res.code === 200){
                this.djRadios = res.djRadios
            }
        }

    },
    mounted () {
        this.getBanner()
        this.getHot()
        this.getNewAlbum()
        this.getTopIdList()
        this.getHotArtists()
        this.getHotDj()
    }
}
</script>

<style lang="stylus" scoped>
.home-container >>> .player
    position fixed
    bottom 0
.home-container >>> .home-main
    height 1400px
</style>