import notePreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
 <section class="note-preview-container">
 <note-preview :key="note.id" 
    v-for="(note,index) in notes"
    :note="note" :index="index" @remove="remove"
    @changeColor="changeColor"/>
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
        },
        changeColor(updatedNote) {
            this.$emit('changeColor',updatedNote)
        }
    },
    computed: {
    },
    components: {
        notePreview,
    },
    unmounted() { },
};