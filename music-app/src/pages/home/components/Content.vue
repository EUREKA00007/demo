<template>
    <div class="home-content">
        <div class="content-left">
            <div class="hot">
                <div class="hot-title">
                    <a href=""><span class="fst">热门推荐</span></a>
                    <div class="more">
                        <a href=""><span>更多</span></a>
                        <i class="el-icon-right"></i>
                    </div>
                </div>
                <div class="hot-item" v-for="(item,index) of hotList.slice(0,8)" :key="index">
                    <a :href="'/playlist/' + item.id"><img :src="item.picUrl" alt=""></a>
                    <div class="img-bottom">
                        <i class="el-icon-headset playCount-icon"></i>
                        <span class="playCount">{{(item.playCount/10000).toFixed(1)}}万</span>
                        <i class="el-icon-video-play play"></i>
                    </div>
                    <a :href="'/playlist/' + item.id"><span>{{item.name}}</span></a>
                </div>
            </div>
            <div class="newAlbum">
                <div class="newAlbum-title">
                    <span class="fst">新碟上架</span>
                    <div class="more">
                        <a href=""><span>更多</span></a>
                        <i class="el-icon-right"></i>
                    </div>
                </div>
                <div class="newAlbum-item-wrapper">
                    <div class="newAlbum-item" v-for="(item,index) of newAlbumList.slice(0,5)" :key="index">
                        <a :href="'/album/' + item.id"><img :src="item.blurPicUrl" alt=""></a>
                        <a :href="'/album/' + item.id"><p class="album-name">{{item.name}}</p></a>
                        <a :href="'/artist/' + item.artist.id"><p class="artist-name">{{item.artist.name}}</p></a>
                    </div>
                </div>
            </div>
            <div class="top">
                <div class="top-title">
                    <span class="fst">榜单</span>
                    <div class="more">
                        <a href=""><span>更多</span></a>
                        <i class="el-icon-right"></i>
                    </div>
                </div>
                <div class="top-item-wrapper">
                    <div class="top-item" v-for="item,index of topList" :key="index">
                        <div class="cover">
                            <img :src="item.coverImgUrl" alt="">
                            <div class="top-name">{{item.name}}</div>
                        </div>
                        <div class="list">
                            <ul v-for="item,index of item.tracks.slice(0,10)" :key="index">
                               <a :href="'/song/' + item.id"><li class="list-item">{{item.name}}</li></a>
                            </ul>
                        </div>
                        <div class="more">
                            <a href=""><span>查看全部</span></a>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="content-right">
            <div class="userInfo">
                <div class="tips">
                    <p>登录后可以享受无限收藏的乐趣，并</p>
                    <p>且无限同步到手机</p>
                </div>
                <el-button type="primary" class="login" @click="login">登录</el-button>
            </div>
            <div class="artists">
                <div class="artists-title">
                    <span class="fst">热门歌手</span>
                    <div class="more">
                        <a href=""><span>查看全部</span></a>
                        <i class="el-icon-arrow-right"></i>
                    </div>
                </div>
                <div class="artist-item" v-for="item,index of artistList" :key="index">
                    <a :href="'/artist/' + item.id"><img :src="item.img1v1Url" alt=""></a>
                    <div class="artist-names">
                        <div class="name"><a :href="'/artist/' + item.id">{{item.name}}</a></div>
                        <div class="alia"><a :href="'/artist/' + item.id">{{item.alias[0]}}</a></div>
                    </div>
                </div>
            </div>
            <div class="radio">
                <div class="radio-title">
                    <span class="fst">热门电台</span>
                </div>
                <div class="radio-item" v-for="item,index of djRadios.slice(0,10)" :key="index">
                    <a :href="'/djradio/' + item.id"><img :src="item.picUrl" alt=""></a>
                    <div class="radio-desc">
                        <div class="name"><a :href="'/djradio/' + item.id">{{item.name}}</a></div>
                        <div class="category"><a :href="'/djradio/' + item.id">{{item.category}}</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeContent',
    props:{
        hotList: Array,
        newAlbumList: Array,
        topList: Array,
        artistList: Array,
        djRadios: Array
    },
    data () {
        return{

        }
    },
    methods:{
        login () {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
.home-content
    width 1143.8px
    height 1050px
    text-align center
    .content-left
        width 799.25px
        height 1400px
        float left
        border-right 1px solid #ccc
        .hot
            margin 10px auto 
            width 719.31px
            height 450px
            .hot-title
                text-align left
                line-height 1.5em
                border-bottom 2px solid #339268
                a
                    color #000
                span
                    font-size 0.8em
                span.fst
                    font-size 1.2em
                    padding-left 20px
                    padding-right 30px
                .more
                    font-size 0.9em
                    float right
                    a
                        color #000
                    a:hover
                        color #000
                        text-decoration underline
            .hot-item
                position relative
                float left
                width 140px
                height 140px
                margin 25px 18px
                text-align left
                border 1px solid #e2e2e2
                a
                    color #000
                a:hover
                    color #000
                    text-decoration underline
                img
                    width 140px
                    height 140px
                .img-bottom
                    position absolute
                    bottom 0
                    z-index 2
                    width 138px
                    height 27px
                    color #e2e2e2
                    line-height 27px
                    border 1px solid black
                    background rgba(0,0,0,0.7)
                    .playCount-icon
                        float left
                        line-height 27px
                        padding-left 5px
                    .playCount
                        float left
                        font-size 0.8em
                        line-height 27px
                        padding-left 5px
                    .play
                        color #e2e2e2
                        float right
                        line-height 27px
                        padding-right 5px
                    .play:hover
                        cursor pointer
                        color #fff

                span
                    font-size 0.8em
                    line-height 1.3em
        .newAlbum
            margin 20px auto 
            width 719.31px
            height 270px
            .newAlbum-title
                text-align left
                line-height 1.5em
                border-bottom 2px solid #339268
                span.fst
                    font-size 1.2em
                    padding-left 20px
                    padding-right 30px
                .more
                    font-size 0.9em
                    float right
                    a
                        color #000
                    a:hover
                        color #000
                        text-decoration underline
            .newAlbum-item-wrapper
                width 719.31px
                height 200px
                margin 25px 0
                background #f2f2f2
                border 1px solid #ccc
                .newAlbum-item
                    float left
                    margin 20px
                    width 100px
                    height 160px
                    text-align left
                    p.album-name
                        ellipsis()
                        font-size 0.7em
                        line-height 1.6em
                    p.artist-name
                        ellipsis()
                        color #666
                        font-size 0.6em
                        line-height 1.8em 
                    a 
                        color #000
                    a:hover
                        color #000
                        text-decoration underline

                    img
                        width 100px
                        height 100px 
        .top
            margin 20px auto 
            width 719.31px
            height 400px
            .top-title
                text-align left
                line-height 1.5em
                border-bottom 2px solid #339268
                span.fst
                    font-size 1.2em
                    padding-left 20px
                    padding-right 30px
                .more
                    font-size 0.9em
                    float right
                    a
                        color #000
                    a:hover
                        color #000
                        text-decoration underline
            .top-item-wrapper
                width 719.31px
                height 490px
                margin 25px 0
                background #f2f2f2
                border 1px solid #ccc
                .top-item
                    float left
                    width 238.77px
                    height 490px
                    border-right 1px solid #ccc
                    .cover
                        width 219px
                        height 100px
                        text-align left
                        padding-top 20px
                        padding-left 20px
                        img
                            float left
                            width 80px
                            height 80px
                        .top-name 
                            float left
                            font-weight 700
                            line-height 50px
                            padding-left 10px
                    .list
                        text-align left
                        a
                            color #000
                        a:hover
                            color #000
                            text-decoration underline
                        .list-item
                            font-size 0.8em
                            line-height 32px
                            padding-left 20px
                            height 32px
                    .more
                        float right
                        font-size 0.8em
                        margin-top 20px
                        padding-right 15px
                        a
                            color #000
                        a:hover
                            color #000
                            text-decoration underline

            .top-item-wrapper:last-child
                border-right none 
                
                
    .content-right
        width 342.93px
        height 1050px
        float left
        .userInfo
            text-align left
            width 342.93px
            height 165px
            margin 0 0 20px 0
            border-top 1px solid #ccc
            border-bottom 1px solid #ccc
            background:linear-gradient(to bottom,#fff,#e2e2e2)
            .tips
                position relative
                top 30px
                left 50px
                width 260px
                height 60px
                p
                    line-height 1.5em
                    font-size 0.9em

            .login
                margin 40px 137px
                
        .artists
            width 308.27px
            height 510px
            margin 20px auto
            .artists-title
                overflow hidden
                border-bottom  1px solid #ccc
                a
                    color #000
                a:hover
                    color #000
                    text-decoration underline 
                span.fst
                    float left
                    font-size 0.8em
                    font-weight 700
                    line-height 1.5em
                .more
                    float right
                    font-size 0.8em
                    line-height 1.5em
            .artist-item
                width 270px
                height 80px
                margin 15px
                background #f2f2f2
                border 1px solid #ccc
                img
                    float left
                    width 80px
                    height 80px
                .artist-names
                    float left
                    width 190px
                    height 80px
                    a
                        color #000
                    a:hover
                        color #000
                        text-decoration underline
                    .name
                        width 170px
                        height 40px
                        ellipsis()
                        text-align left
                        font-size 0.9em
                        padding-left 10px
                        line-height 40px
                    .alia
                        width 170px
                        height 40px
                        ellipsis()
                        padding-left 10px
                        color #666
                        font-size 0.7em
                        text-align left
                        line-height 40px

        .radio
            width 308.27px
            height 320px
            margin 20px auto
            .radio-title
                overflow hidden
                border-bottom  1px solid #ccc
                span.fst
                    float left
                    font-size 0.8em
                    font-weight 700
                    line-height 1.5em
            .radio-item
                width 270px
                height 50px
                margin 15px
                img
                    float left
                    width 50px
                    height 50px
                .radio-desc
                    float left
                    width 190px
                    height 50px
                    a
                        color #000
                    a:hover
                        color #000
                        text-decoration underline
                    .name
                        width 170px
                        height 25px
                        ellipsis()
                        font-size 0.8em
                        text-align left
                        padding-left 10px
                        line-height 25px
                    .category
                        width 170px
                        height 25px
                        ellipsis()
                        padding-left 10px
                        color #666
                        font-size 0.7em
                        text-align left
                        line-height 25px

            
</style>