<template>
    <div>
        <h6>单独页面打开查看大图</h6>
        <ul>
            <li v-for="item in list">
                <a :href="$site.base + '/' + item.file" target="_blank">{{item.info}}</a>
            </li>
        </ul>

        <h6>下图在iframe中查看，会有点拥挤</h6>
        <select v-model="selectFile">
            <option v-for="item in list"  :value="item.file" :key="$index">{{item.info}}</option>
        </select>
        <div style="height:10px;"></div>
        <iframe v-if="selectFile" style="width:100%;height:800px;" :src="$site.base + '/' + selectFile" frameborder="0"></iframe>

        <h4>idea官方快捷键映射表翻译文档来自 <a href="https://github.com/gumutianqi" target="_blank">gumutianqi</a>童鞋，感谢他开源的<a target="_blank" href="https://github.com/gumutianqi/IntelliJIDEA_ReferenceCard_CN">IntelliJIDEA_ReferenceCard_CN</a> 开源仓库</h4>
    </div>
</template>
<script>
    export default {
        name: "v-keymap",
        data() {
            return {
                selectFile: null,
                list: [
                    {
                        file: "keymap-cn.html",
                        info: "windows/linux 快捷键映射表（中文翻译HTML版）"
                    },
                    {
                        file: "keymap-mac-cn.html",
                        info: "Mac快捷键映射表（中文翻译HTML版）"
                    },
                    {
                        file: "keymap.html",
                        info: "windows/linux官方快捷键映射表（英文HTML版）"
                    },
                ]
            };
        },
        components: {},
        computed: {},
        watch: {},
        created() {
            this.selectFile = this.list[0].file;
        },
        mounted() {

        },
        methods: {}
    }
</script>

