<template>
    <footer>
        <el-divider></el-divider>
        <div class="footer-link">
            <a href="">服务条款</a>
            <el-divider direction="vertical"></el-divider>
            <a href="">隐私政策</a>
            <el-divider direction="vertical"></el-divider>
            <a href="">儿童隐私政策</a>
            <el-divider direction="vertical"></el-divider>
            <a href="">版权投诉指引</a>
            <el-divider direction="vertical"></el-divider>
            <a href="">意见反馈</a>
            <el-divider direction="vertical"></el-divider>
            <a href="">广告合作</a>
        </div>
        <div class="footer-desc">
            <span>版权所有©eureka 2021</span>
            <span>邮箱：1206269936@qq.com</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="stylus" scoped>
footer
    width 100%
    height 210px
    background #fff
    .footer-link
        width 60%
        margin 0 auto
        font-size 0.8em
        text-align center
        a
            color #999
        a:hover
            color #000
    .footer-desc
        color #101010
        width 50%
        margin 15px auto
        font-size 0.8em
        text-align center
        span
            margin-left 20px
        
</style>