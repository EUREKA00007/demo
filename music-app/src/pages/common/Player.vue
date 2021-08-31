<template>
    <div class="player">
        <aplayer class="Aplaer" :music="musics[0]" :list="musics"  :showLrc="true" :listFolded="listFolded"></aplayer>
    </div>
</template>

<script>
import aplayer from 'vue-aplayer'
import Bus from '@/tools/bus.js'
export default {
    name: 'Player',
    components:{
        aplayer
    },
    data () {
        return{
            listFolded: true,
            musics: [{
                        title: '(默认)Counterattack',
                        artist: '平松建治',
                        src: "https://music.163.com/song/media/outer/url?id=565841116.mp3",
                        pic: 'https://p1.music.126.net/Y8uzZx4RMSHuyKIUVXm6Lg==/109951163312431204.jp'
                    }]
        }
    },
    methods:{

    },
    mounted (){
        Bus.$on('addSong',(music)=>{
            this.musics.push(music)
            this.$message({
                showClose: true,
                message: '已添加至播放列表！',
                type: 'success'
            })
        })

    }
}
</script>

<style lang="stylus" scoped>
.player
    width 100%
    position relative
    z-index 99
.player >>> .aplayer
    margin 0
</style>