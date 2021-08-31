<template>
    <div class="search">
        <el-input   class="search-input"
                    prefix-icon="el-icon-search" 
                    placeholder="请输入内容" 
                    v-model="input"
                    @keyup.enter.native="handleSearchClick(input)"
                    @input="getSearchSuggest(input)"
                    >
        </el-input>
        <div class="search-suggest">
            <el-card class="box-card" v-show="suggest">
                <div class="title">
                    <div class="title-item1" v-show="songSuggestIsShow">单曲</div>
                    <div class="title-item2" v-show="artistSuggestIsShow">歌手</div>
                    <div class="title-item3" v-show="albumSuggestIsShow">专辑</div>
                    <div class="title-item4" v-show="playlistSuggestIsShow">歌单</div>
                </div>
                <div class="content">
                    <ul>
                        <div class="content-item">
                            <li v-show="songSuggestIsShow" v-for="item in songSuggest" :key="item.id">{{item.name}}</li>
                        </div>
                        <div class="content-item">
                            <li v-show="artistSuggestIsShow" v-for="item in artistSuggest" :key="item.id">{{item.name}}</li>
                        </div>
                        <div class="content-item">
                            <li v-show="albumSuggestIsShow" v-for="item in albumSuggest" :key="item.id">{{item.name}}</li> 
                        </div>
                        <div class="content-item content-item4">
                            <li v-show="playlistSuggestIsShow" v-for="item in playlistSuggest" :key="item.id">{{item.name}}</li> 
                        </div>
                    </ul>                
                </div>

            </el-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SearchTool',
    data(){
        return{
            suggest: false,
            order:[],
            songSuggest:[],
            artistSuggest:[],
            albumSuggest:[],
            playlistSuggest:[],
            input:'',
            timer: null
        }
    },
    computed:{
        songSuggestIsShow(){
            return this.order.indexOf('songs') === -1? false : true
        },
        artistSuggestIsShow(){
            return this.order.indexOf('artists') === -1? false : true
        },
        albumSuggestIsShow(){
            return this.order.indexOf('albums') === -1? false : true
        },
        playlistSuggestIsShow(){
            return this.order.indexOf('playlists') === -1? false : true
        }

    },
    methods:{
        handleSearchClick(input){
            this.suggest = false
            this.$router.push({
                path:"/search",
                query:{
                    keywords: input
                }
            })
        },
        getSearchSuggest (keywords) {
            if(this.timer){
                clearTimeout(this.timer)
            }
            
            this.timer = setTimeout( ()=>{
                if(keywords !==  ''){
                    axios({
                        method: 'get',
                        url: 'api/search/suggest',
                        withCredentials: true,
                        params:{
                            keywords: keywords
                        }
                    }).then(this.getSearchSuggestSucc)
                }else{
                    this.songSuggest = []
                    this.artistSuggest = []
                    this.albumSuggest = []
                    this.playlistSuggest = []
                    this.suggest = false
                }
            } , 100)

        },
        getSearchSuggestSucc (res) {
            if(res.status === 200){
                res = res.data
                this.order = res.result.order
                this.songSuggest = res.result.songs
                this.artistSuggest = res.result.artists
                this.albumSuggest = res.result.albums
                this.playlistSuggest = res.result.playlists
                if(!this.songSuggest || !this.artistSuggest || !this.albumSuggest || !this.playlistSuggest){
                    this.suggest = false
                    this.order = []
                }else{
                    this.suggest = true
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
.search-input >>> .el-input__inner
    border-radius: 30px
.search
    width 200px
    .search-suggest >>> .el-card__body
        padding 1px    
    .search-suggest
        position relative
        z-index 99
        width 250px
        .title
            float left
            width 60px
            border-right 1px solid #e2e2e2
            .title-item1
                padding-top 5px
                padding-right 15px
                text-align right
                height 65px
                font-size 0.8em
                line-height 30px
            .title-item2
                padding-top 5px
                padding-right 15px
                text-align right
                height 20px
                font-size 0.8em
                line-height 30px
            .title-item3,.title-item4
                padding-top 5px
                padding-right 15px
                text-align right
                height 35px
                font-size 0.8em
                line-height 30px
        .content
            width 160px
            float left
            .content-item
                border-bottom 1px solid #e2e2e2
                li
                    padding-top 3px
                    padding-left 15px
                    list-style none
                    text-align left
                    font-size 0.7em
                    line-height 1.5em
                    ellipsis()
            .content-item4
                border-bottom none !important

</style>