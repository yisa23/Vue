<template>
    <div>
        <h1 v-text="msg"></h1>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <h3>{{user.email}}</h3>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.min.css'
    import _ from 'lodash'

    export default {
        name: "Msite",
        computed: {
            ...mapState('m1', ["msg"]),
            ...mapState('m2', ["user"]),
        },
        mounted() {
            this.getData()
            this.$nextTick(() => {
                new Swiper('.swiper-container', {
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                })
            })
            console.log(_.chunk(['a', 'b', 'c', 'd'], 3))
            console.log(this._chunk(['a', 'b', 'c', 'd'], 3))
        },
        methods: {
            ...mapActions('m1', ["getData"]),
            onSwiper(swiper) {
                console.log(swiper);
            },
            onSlideChange() {
                console.log('slide change');
            },
            _chunk(target, size) {
                let ret = []
                while (target.length > size) {
                    ret.push(target.splice(0, size))
                }
                ret.push(target)
                return ret
            }
        }
    }
</script>

<style lang="stylus" scoped>
    /*深度选择器
    >>> .pagination {

    }

    /deep/ .pagination
     */
</style>