<template>
    <div class="album-container">
        <album-header>
            <search-tool></search-tool>
        </album-header>
        <album-main class="playlist-main">
            <div>专辑{{this.$route.params.id}}</div>
        </album-main>
        <backtop></backtop>
        <player></player>
        <album-footer></album-footer>
    </div>
    
</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import AlbumHeader from '../common/Header.vue'
import AlbumFooter from '../common/Footer.vue'
import Backtop from '../common/Backtop.vue'
import Player from '../common/Player.vue'
import AlbumMain from '../common/Main.vue'
export default {
    name: "Album",
    components:{
        SearchTool,
        AlbumHeader,
        AlbumFooter,
        Player,
        Backtop,
        AlbumMain
    }
}
</script>

<style lang="stylus" scoped>
.album-container >>> .player
    position fixed
    bottom 0
</style>