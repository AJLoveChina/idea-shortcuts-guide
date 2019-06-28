<template>
    <div>
        <a :href="url" target="_blank">单独页面打开查看大图</a>

        <h6>下图在iframe中查看，会有点拥挤</h6>
        <iframe style="width:100%;height:800px;" :src="url" frameborder="0"></iframe>
    </div>
</template>
<script>
    export default {
        name: "v-keymap",
        props: ['url'],
        data() {
            return {
            };
        },
        components: {},
        computed: {},
        watch: {},
        created() {
            console.log(this.url);
        },
        mounted() {

        },
        methods: {}
    }
</script>

