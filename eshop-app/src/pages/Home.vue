<template>
    <div class="home">
        <home-header :gameList="gameList"></home-header>
        <home-content :bannerImg="bannerImg" :gameList="gameList"></home-content>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeFooter from './components/Footer.vue'
import HomeContent from './components/HomeContent.vue'
import axios from 'axios'
export default {
    name: 'Home',
    data(){
        return{
            gameList: [],
            bannerImg: []
        }
    },
    components:{
        HomeHeader:HomeHeader,
        HomeFooter:HomeFooter,
        HomeContent:HomeContent
    },
    methods:{
        getBannerImgs(){
            axios.get('/api/index.json')
                .then(this.getBannerImgsSucc)
        },
        getGameList(){
            axios.get('/api/games.json')
                .then(this.getGameListSucc)
        },
        getBannerImgsSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.bannerImg = data.bannerImg
            }
        },
        getGameListSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.gameList = data.gameList
            }
        }
    },
    mounted(){
        this.getGameList();
        this.getBannerImgs();
    }
}
</script>

<style lang="stylus" scoped>


</style>

