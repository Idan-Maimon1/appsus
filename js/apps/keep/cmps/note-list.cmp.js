import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
 <section class="note-preview-container">
 <note-preview v-for="note in notes" :note="note"/>
 </section>
`,
    data() {
        return {};
    },
    created() {
    },
    methods: {},
    computed: {
    },
    components: {
        notePreview,
    },
    unmounted() { },
};