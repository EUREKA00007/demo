<template>
    <div class="artist-container">
        <artist-header>
            <search-tool></search-tool>
        </artist-header>
        <artist-main class="playlist-main">
            <div>歌手{{this.$route.params.id}}</div>
        </artist-main>
        <backtop></backtop>
        <player></player>
        <artist-footer></artist-footer>
    </div>
</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import ArtistHeader from '../common/Header.vue'
import ArtistFooter from '../common/Footer.vue'
import Backtop from '../common/Backtop.vue'
import Player from '../common/Player.vue'
import ArtistMain from '../common/Main.vue'
export default {
    name: "Aritist",
    components:{
        SearchTool,
        ArtistHeader,
        ArtistFooter,
        Player,
        Backtop,
        ArtistMain
    }
}
</script>

<style lang="stylus" scoped>
.artist-container >>> .player
    position fixed
    bottom 0
</style>