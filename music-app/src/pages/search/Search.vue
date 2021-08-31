<template>
    <div class="search-container">
        <search-header>
        </search-header>
        <search-main class="search-main">
            <search-content :songList="songList" :songCount="songCount" @changePage="getNextSongList"></search-content>
        </search-main>
        <backtop></backtop>
        <player></player>
        <search-footer></search-footer>
    </div>
</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import SearchHeader from '../common/Header.vue'
import SearchContent from './components/Content.vue'
import SearchFooter from '../common/Footer.vue'
import Backtop from '../common/Backtop.vue'
import Player from '../common/Player.vue'
import SearchMain from '../common/Main.vue'
export default {
    name: 'Search',
    components:{
        SearchTool,
        SearchHeader,
        SearchContent,
        SearchFooter,
        Player,
        Backtop,
        SearchMain
    },
    data () {
        return{
            songList:[],
            songCount: 0,
            offset: 0
        }
    },
    methods:{
        getSongList () {
            const keywords = this.$route.query.keywords
            if(keywords !== ''){
                axios({
                    method: 'get',
                    url: 'api/search',
                    withCredentials: true,
                    params:{
                        keywords: keywords,
                        limit: 20,
                        offset: this.offset
                    }
                }).then(this.getSongListSucc)
            }
        },
        getSongListSucc (res) {
            if(res.status === 200){
                res = res.data
                this.songList = res.result.songs
                this.songCount = res.result.songCount
            }
        },
        getNextSongList (pageSize) {
            this.offset = (pageSize - 1)*20
            this.getSongList()
        }
    },
    mounted (){
        this.getSongList();
    }
}
</script>

<style lang="stylus" scoped>
.search-container >>> .player
    position fixed
    bottom 0
</style>