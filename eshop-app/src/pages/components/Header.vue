<template>
    <div class="header">
        <el-menu :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal" 
                @select="handleSelect"
                active-text-color="#E60012"
        >
          <el-menu-item index="1">
            <router-link tag="span" to="/">首页</router-link>
          </el-menu-item>
          <el-submenu index="2">
              <template slot="title">游戏列表</template>
              <router-link tag="span" to="/games">
                  <el-menu-item index="2-1">
                    按发售时间排序
                  </el-menu-item>
                </router-link>
              <el-menu-item index="2-2">按A-Z排序</el-menu-item>
        </el-submenu>
          <el-menu-item index="3" class="header-search">
            <div class="header-search-item">
              <el-input placeholder="请输入你想要搜索的游戏" v-model="keyword" class="header-search-item-input">
                <el-button slot="append" icon="el-icon-search" @click="handleSearchClick(keyword)"></el-button>
              </el-input>
              <div class="search-content" v-show="keyword">
                <ul>
                  <li v-for="item of list.slice(0,10)" 
                      :key="item.id"
                      @click="handleSearchContentClick(item.TitleName_SC)"
                      >{{item.TitleName_SC}}
                      </li>
                      <li v-show="hasNoData">
                        没有匹配的结果
                      </li>
                </ul>
              </div>
            </div>
          </el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props:{
      gameList: Array
    },
    data() {
      return {
        activeIndex: '1',
        list:[],
        keyword: '',
        timer: null
      };
    },
    computed:{
        hasNoData(){
            return  !this.list.length
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSearchClick(keyword){
        alert(keyword)
      },
      handleSearchContentClick(TitleName_SC){
        this.keyword = TitleName_SC
      }
    },
    watch: {
        keyword() {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }

            // 节流
            this.timer = setTimeout(() => {
                const result = []
                // 目前json数据不完整，只对前6项做了搜索建议
                  this.gameList.forEach((value) => {
                      if(value.TitileNameSC_spell.indexOf(this.keyword) > -1 ||
                          value.TitleName_SC.indexOf(this.keyword) > -1){
                              result.push(value)
                          }
                  })
                
                this.list = result
            },100)
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/variables.styl'
.header >>> .el-input__inner:focus{
    border 1px solid $themeColor
}

.header
  position fixed
  width 100%
  z-index 2
  top 0
  .header-search
    position relative
    margin-left 30%
    .header-search-item-input
      width 300px
    .search-content
      position absolute
      top 50px
      width 225px
      border 1px solid $themeColor
      border-radius 3px 0 5px 5px
      background #fff
      li
        color black
        height 2em
        line-height 2em
        padding-left 15px
        padding-right 15xp
        ellipsis()

</style>