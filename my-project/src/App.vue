<template>
    <div>
        <my-stylus class="test"/>
        <router-view/>
        <guide v-if="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import MyStylus from "./components/MyStylus.vue";
    import Guide from "./components/Guide/Guide";
    import {mapActions} from 'vuex'

    export default {
        components: {Guide, MyStylus},
        mounted() {
            this.autologin()
        },
        methods: {
            ...mapActions('m2', ['autologin'])
        }
    };
</script>

<style lang="stylus" scoped>
    .test
        display none
</style>
