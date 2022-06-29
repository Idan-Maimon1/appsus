import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import noteDetails from './note-details.cmp.js';

export default {
    template: `
    <section class="keep-main-layout">
        <note-filter/>
        <note-details/>
        <note-list/>
    </section>
    <!-- <note-filter @filtered="setFilter" /> -->
        <!-- <note-list :notes="notesForDisplay" @remove="removenote"  /> -->
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    components: {
        noteFilter,
        noteList,
        noteDetails,
    },
    unmounted() { },
};