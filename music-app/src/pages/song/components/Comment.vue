<template>
    <div>
        <div class="comments-wrapper" v-for="item,index of comment" :key="index">
            <div class="comments-title">
                <span class="fst">评论</span>
                <span class="desc">共{{item.total}}条评论</span>
            </div>
            <div class="comment-item" v-for="item2,index of item.comments" :key="index">
                <div class="content">
                    <img :src="item2.user.avatarUrl" alt="">
                    <p><a href="">{{item2.user.nickname}}</a></p>
                    <p><i class="el-icon-user-solid" v-if="item2.user.vipRights" title="vip用户"></i>:</p>
                    <p class="user-comment-content">{{item2.content}}</p>
                </div>
                <div class="desc">
                    <div class="send-date">{{new Date(parseInt(item2.time)).toLocaleString().split(' ')[0].replace('/', '年').replace('/', '月')+'日'}}</div>
                    <div class="like" title="点赞"><i class="el-icon-star-off"><span>({{item2.likedCount}})</span></i></div>
                </div>
            </div>
            <div class="comment-pagination">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="20"
                layout="prev, pager, next, jumper"
                :total="item.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props:{
        comment: Array
    },
    data () {
        return{
            currentPage: 1,
            total:0
        }
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('changePage',val)
        },
        handleCurrentChange(val) {
            this.$emit('changePage',val)
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl' 
.comments-title
    width 750px
    margin 20px
    text-align left
    line-height 1.5em
    border-bottom 2px solid #339268
    span.desc 
        font-size 0.8em
        color #333
    span.fst
        font-size 1.2em
        padding-left 20px
        padding-right 30px
.comment-item
    width 750px
    height 100px
    margin 10px 20px
    border-bottom 1px solid #ccc
    .content 
        width 750px
        height 60px 
        img
            float left
            width 50px
            height 50px
        p
            margin-left 10px
            float left
            line-height 2em
            font-size 0.8em
        p.user-comment-content
            width 500px
            ellipsis()
    .desc
        width 750px
        height 40px
        .send-date
            float left
            width 300px
            height 40px
            margin-left 60px
            font-size 0.7em
            line-height 40px
        .like
            width 60px
            height 40px
            margin-right 20px
            font-size 1em
            line-height 40px
            float right
            i:hover
                cursor pointer
                color #ccc
            span
                font-size 0.8em
.comment-pagination
    width 100%
    margin-top 30px
    text-align center
</style>