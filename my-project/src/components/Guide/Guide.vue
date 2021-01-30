<template>
    <div id="container">
        <div :class="{current:$route.path==='/msite'}" @click="fn('/msite')" class="item">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </div>
        <div :class="{current:$route.path==='/search'}" @click="fn('/search')" class="item">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </div>
        <div :class="{current:$route.path==='/order'}" @click="fn('/order')" class="item">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </div>
        <div :class="{current:$route.path==='/profile'}" @click="fn('/profile')" class="item">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Guide",
        methods: {
            fn(path) {
                // 重复跳转警告
                if (path !== this.$route.path) {
                    this.$router.push(path)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    #container
        display flex
        top-border-1px(#eee)
        position fixed
        left 0
        bottom 0
        width 100%

        .item
            display flex
            flex-direction column
            flex 1
            height 50px
            text-align center
            font-size 12px

            &.current
                color $green

            .iconfont
                font-size 24px
                line-height 30px
</style>