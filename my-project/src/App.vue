<template>
    <div>
        <my-stylus class="test"/>
        <router-view/>
        <guide/>
    </div>
</template>

<script>
    import MyStylus from "./components/MyStylus.vue";
    import Guide from "./components/Guide/Guide";

    export default {
        components: {Guide, MyStylus},
    };
</script>

<style lang="stylus" scoped>
    .test
        display none
</style>
