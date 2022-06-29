import notePreview from './note-preview.cmp.js'

export default {
    template: `
 <section class="note-preview-container">
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <note-preview/>
 <!-- <car-preview :car="car" /> -->
 </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    components: {
        notePreview,
    },
    unmounted() { },
};