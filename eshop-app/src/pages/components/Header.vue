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
              <el-input placeholder="请输入你想要搜索的游戏" v-model="input3" class="header-search-item-input">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="stylus" scoped>
.header
  position absolute
  width 100%
  z-index 2
  top 0
  .header-search
    margin-left 30%
    .header-search-item-input
      width 300px
    
</style>