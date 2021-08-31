<template>
    <header>
        <div class="common-header">
            <div class="header-top">
                <div class="header-top-wrapper">
                    <ul>
                        <a class="header-top-logo" href="/"><img src="@/assets/images/logo.png" alt=""></a>
                        <a href=""><li class="fst">发现音乐</li></a>
                        <a href=""><li>我的音乐</li></a>
                        <a href=""><li>朋友</li></a>
                        <a href=""><li>商场</li></a>
                        <a href=""><li>音乐人</li></a>
                        <span>
                            <slot></slot>
                        </span>
                        <a href="">
                            <div class="header-top-btn">
                            创作者中心
                            </div>
                        </a>
                        <a class="header-top-login" href="">登录</a>
                    </ul>
                </div>
            </div>
            <div class="header-bottom">
                <div class="header-bottom-wrapper">
                    <ul>
                        <a href=""><li class="fst">推荐</li></a>
                        <a href=""><li>排行榜</li></a>
                        <a href=""><li>歌单</li></a>
                        <a href=""><li>主播电台</li></a>
                        <a href=""><li>歌手</li></a>
                        <a href=""><li>新碟上架</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="stylus" scoped>
.common-header
    width 1903px
    .header-top 
        height 70px
        background #242424
        .header-top-wrapper
            width 1332.09px
            margin 0 auto 
            overflow hidden
            img
                position relative
                top 10px
                width 50px
                height 50px
            ul
                width 9999px
            a.header-top-logo
                width 200px
                float left
                line-height 70px
                text-align center
                color #fff
            li 
                width 100px
                float left
                line-height 70px
                text-align center
                color #ccc
            span
                padding-left 120px
                float left
                line-height 70px
                text-align center
            li:hover
                background #000
                color #fff
            .header-top-btn
                float left
                width 100px
                font-size 0.8em
                text-align center
                line-height 2em
                color #ccc
                border 1px solid #ccc
                border-radius 20px
                margin-left 30px
                margin-top 25px
            .header-top-btn:hover
                cursor pointer
                color #fff
                border 1px solid #FFF
            a.header-top-login
                width 2em
                float left
                margin-top 33px
                margin-left 20px
                font-size 0.8em
                line-height 1em
                text-align center
                color #ccc
            a.header-top-login:hover
                color #fff
            
    .header-bottom
        background #41B883
        height 35px
        .header-bottom-wrapper
            width 1332.09px
            margin 0 auto 
            overflow hidden
            ul
                
                width 9999px
            li 
                width 100px
                float left
                font-size 0.8em
                line-height 35px
                text-align center
                color #fff
            li:hover
                border-radius 30px
                background #339268
            li.fst
                margin-left 200px
</style>