<template>
    <div>
        <div class="games-wrapper">
            <div class="games">
                <el-card class='gameCard' 
                        v-for="item of gameList.slice((pageInfo.currentPage-1)*pageInfo.pageSize,pageInfo.currentPage*pageInfo.pageSize)" 
                        :key="item.id"
                        shadow="hover">
                    <img class="game-img" :src="item.ScreenshotImgURL" :title="item.TitleName_SC || item.TitleName">
                        <a href=""><div class="game-title" :title="item.TitleName_SC || item.TitleName">{{item.TitleName_SC || item.TitleName}}</div></a>
                    <div class="game-price">{{item.Price.hk || item.Price.jp}}</div>
                </el-card>
            </div>
        </div>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageInfo.currentPage"
            :page-size="pageInfo.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="gameList.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameList',
    props:{
        gameList: Array
    },
    methods:{
        handleSizeChange(val) {
        this.pageInfo.pageSize = val
      },
        handleCurrentChange(val) {
        this.pageInfo.currentPage = val
      }
    },
    data() {
      return {
        pageInfo:{
            currentPage: 1,
            pageSize: 24

        }
      };
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.games
    position absolute
    top 62px
    width 1820px 
    padding 50px 50px
    overflow hidden
    .gameCard
        font-family "Helvetica Neue"
        font-size 15px
        border-radius 4px
        width 200px
        margin 10px 12px
        float left
        height 170px
        .game-title
            color black
            width 80%
            font-weight 700
            margin-bottom 5px
            ellipsis()
        .game-img
            width 100%
        .game-price
            color #868383
            margin-top 5px
            font-size 0.8em
.block
    position absolute
    top 738px
    z-index -1
    width 100%
    .el-pagination
        text-align center
</style>