<template>
    <div class="home">
        <home-header></home-header>
        <game-list :gameList="gameList"></game-list>
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from '@/pages/components/Header'
import HomeFooter from '@/pages/components/Footer'
import GameList from './components/GameList'
import axios from 'axios'
export default {
    name: 'Games',
    data(){
        return{
            gameList:[]
        }
    },
    components:{
        HomeHeader:HomeHeader,
        HomeFooter:HomeFooter,
        GameList:GameList
    },
    methods:{
        getGameList(){
            axios.get('/api/jp.json')
                .then(this.getGameListSucc)
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
    }
}
</script>

<style lang="stylus" scoped>


</style>

