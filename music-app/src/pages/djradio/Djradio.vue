<template>
    <div class="djradio-container">
        <djradio-header>
            <search-tool></search-tool>
        </djradio-header>
        <djradio-main class="djradio-main">
            <div>电台{{this.$route.params.id}}</div>
        </djradio-main>
        <backtop></backtop>
        <player></player>
        <djradio-footer></djradio-footer>
    </div>

</template>

<script>
import axios from 'axios'
import SearchTool from '../common/SearchTool.vue'
import DjradioHeader from '../common/Header.vue'
import DjradioFooter from '../common/Footer.vue'
import Backtop from '../common/Backtop.vue'
import Player from '../common/Player.vue'
import DjradioMain from '../common/Main.vue'
export default {
    name: "Djradio",
    components:{
        SearchTool,
        DjradioHeader,
        DjradioFooter,
        Player,
        Backtop,
        DjradioMain
    }
}
</script>

<style lang="stylus" scoped>
.djradio-container >>> .player
    position fixed
    bottom 0
</style>