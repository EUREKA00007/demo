<template>
  <div class="backtop-wrapper" v-show="isShow" @click="handleBackTop">
      <div class="backtop">
          <i class="el-icon-arrow-up"></i>
          <p>Top</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Backtop',
    props:{

    },
    data () {
        return{
            isShow: false,
            scrollTop: 0
        }
    },
    methods:{
        handleScroll () {
            this.isShow = false
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(this.scrollTop > 10){
                this.isShow = true
            }
        },
        handleBackTop(){
            if(this.scrollTop > 10){
                document.documentElement.scrollTop = 0
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, true)
    }
}
</script>

<style lang="stylus" scoped>
.backtop-wrapper
    position fixed
    right 300px
    bottom 230px
    width 50px
    height 50px
    background:linear-gradient(to bottom,#fff,#e2e2e2)
    border-radius 5px
    border 1px solid black
    .backtop
        text-align center
        line-height 1.5em
        font-weight 700
        font-size 0.8em
.backtop-wrapper:hover
    cursor pointer
    background #e2e2e2
</style>