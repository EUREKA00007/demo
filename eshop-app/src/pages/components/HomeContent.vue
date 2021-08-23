<template>
    <div class="home-content">
        <div class="carousel-wrapper">
            <el-carousel indicator-position="outside" width="1108px" height="400px">
                <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
                    <img class="banner" :src="item.imgUrl" :title="item.title">
                </el-carousel-item>
            </el-carousel>
            <div class="aboutThis">
                <div class="aboutThis-title">
                    关&nbsp;&nbsp;&nbsp;&nbsp;于
                </div>
                <div class="aboutThis-content"> 
                    <h3 class="aboutThis-content-title">网站简介：</h3>
                    <p class="aboutThis-content-desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个网站是我出于个人兴趣和练手目的制作的小demo，后端数据是模拟自调用GitHub上别人整理的任天堂的api下载而来的xml文件，主要实现了对模拟数据的展示、分类、以及简单的搜索功能。
                    </p>
                    <h3 class="aboutThis-content-title">注意事项：</h3>
                    <ol>
                        <li class="aboutThis-content-li">dsad</li>
                        <li class="aboutThis-content-li">dsad</li>
                        <li class="aboutThis-content-li">dsad</li>
                        <li class="aboutThis-content-li">dsadsa</li>
                    </ol>
                    <h3 class="aboutThis-content-title">联系方式：</h3>
                </div>
            </div>
        </div>
        
        <div class="newGame-list">
            <div class="newGame-titile" @click="handleNewGameTitleClick">最近发售</div>
            <div class="newGames-wrapper">
                <div class="newGames">
                    <el-card class='newGameCard' 
                            v-for="item of gameList.slice(0,8)" 
                            :key="item.id"
                            shadow="hover">
                        <img class="newGame-img" :src="item.ScreenshotImgURL" :title="item.TitleName_SC || item.TitleName">
                            <a href=""><div class="newGame-title" :title="item.TitleName_SC || item.TitleName">{{item.TitleName_SC || item.TitleName}}</div></a>
                        <div class="newGame-price">{{item.Price.hk || item.Price.jp}}</div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeContent',
    props:{
        bannerImg: Array,
        gameList: Array
    },
    data() {
        return{
            
        }
    },
    methods:{
        handleNewGameTitleClick () {
            this.$router.push('/games')
        }
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.home-content
    position absolute
    width 100%
    top 62px
    .carousel-wrapper
        z-index -1
        position absolute
        width 1108px
        height 400px
        .banner
            width 1108px
        .aboutThis
            position relative
            left 1108px
            top -426px
            width 812px
            height 400.11px
            .aboutThis-title
                width 100px
                height 50px
                line-height 50px
                font-size 1.6em
                margin 10px 30px
                padding-left 20px
                border-bottom 3px solid #E60012
            .aboutThis-content
                height 323px 
                margin 15px 30px 
                background #EEEEEE
                .aboutThis-content-title
                    margin 15px 20px
                .aboutThis-content-li
                    margin 0 70px
                    list-style-type:decimal;
                .aboutThis-content-desc
                    margin 0 20px
                    line-height 1.5em
                
    .newGame-list
        position relative
        top 426px
        width 1920px
        height 355px
        .newGame-titile
            width 120px
            height 50px
            line-height 50px
            font-size 1.6em
            margin 10px 30px
            padding-left 20px
            border-bottom 3px solid #E60012
        .newGame-titile:hover
            cursor:pointer
        .newGames
            position absolute
            top 62px
            width 1820px 
            padding 50px 50px
            overflow hidden
            .newGameCard
                font-family "Helvetica Neue"
                font-size 15px
                border-radius 4px
                width 200px
                margin 10px 12px
                float left
                height 170px
                .newGame-title
                    color black
                    width 80%
                    font-weight 700
                    margin-bottom 5px
                    ellipsis()
                .newGame-img
                    width 100%
                .newGame-price
                    color #868383
                    margin-top 5px
                    font-size 0.8em
</style>