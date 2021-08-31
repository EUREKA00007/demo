<template>
    <div class="playlist-container">
        <playlist-header>
            <search-tool></search-tool>
        </playlist-header>
        <playlist-main class="playlist-main">
            <div>歌单{{this.$route.params.id}}</div>
        </playlist-main>
        <backtop></backtop>
        <player></player>
        <playlist-footer></playlist-footer>
    </div>
</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import PlaylistHeader from '../common/Header.vue'
import PlaylistFooter from '../common/Footer.vue'
import Backtop from '../common/Backtop.vue'
import Player from '../common/Player.vue'
import PlaylistMain from '../common/Main.vue'
export default {
    name: "Playlist",
    components:{
        SearchTool,
        PlaylistHeader,
        PlaylistFooter,
        Player,
        Backtop,
        PlaylistMain
    }
}
</script>

<style lang="stylus" scoped>
.playlist-container >>> .player
    position fixed
    bottom 0
</style>