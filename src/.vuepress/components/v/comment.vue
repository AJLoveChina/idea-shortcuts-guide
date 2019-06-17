<template>
    <div>
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

    </div>
</template>
<script>
    export default {
        name: "v-comment",
        props: ['idSufix'],
        data() {
            return {
                url: "",
                id: ""
            };
        },
        components: {},
        computed: {},
        watch: {},
        created() {

        },
        mounted() {
            this.url = location.origin + location.pathname;
            this.id = this.$page.relativePath + `-${this.idSufix}`;


            console.log("url id : ", this.url, this.id);
            if (window.DISQUS) {
                this.reset(window.DISQUS)
                return
            }
            this.init();
        },
        methods: {
            reset (dsq) {
                const self = this
                dsq.reset({
                    reload: true,
                    config: function () {
                        this.page.url = self.url;
                        this.page.identifier = self.id;
                    }
                })
            },
            init() {
                let self = this;
                window.disqus_config = function () {
                    this.page.url = self.url;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = self.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };

                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://nigeerhuo.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            }
        }
    }
</script>
