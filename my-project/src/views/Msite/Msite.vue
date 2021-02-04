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
        <hr>
        <div class="wrapper">
            <ul class="content">
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
                <li>06</li>
                <li>07</li>
                <li>08</li>
                <li>09</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.min.css'
    import _ from 'lodash'
    import Bscroll from 'better-scroll'

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
                new Bscroll('.wrapper', {})
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
    .wrapper
        height 100px
        overflow hidden
</style>