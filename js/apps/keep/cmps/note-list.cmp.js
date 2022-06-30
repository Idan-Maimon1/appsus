import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
 <section class="note-preview-container">
 <note-preview :key="note.id" v-for="note in notes" :note="note" @remove="remove"/>
 </section>
`,
    data() {
        return {};
    },
    created() {
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        }
    },
    computed: {
    },
    components: {
        notePreview,
    },
    unmounted() { },
};