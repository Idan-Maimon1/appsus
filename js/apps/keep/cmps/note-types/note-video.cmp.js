export default {
    props: ['currNote'],
    template: `
    <section class="note-inner-content">
        <h1>
            {{currNote.info.title}}
        </h1>
        <iframe
            :src="getLink" allowfullscreen>
        </iframe>
    </section>
   `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {
        getLink() {
            var currUrl = this.currNote.info.url
            const idx = currUrl.indexOf('=')
            const videoKey = currUrl.slice(idx+1)
            return `https://www.youtube.com/embed/${videoKey}`
        }
    },
    unmounted() { },
};