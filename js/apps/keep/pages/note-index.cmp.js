import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import noteDetails from './note-details.cmp.js';
import { noteService } from '../../../services/note.service.js'


export default {
    template: `
    <section class="keep-main-layout">
        <note-filter/>
        <note-details/>
        <note-list :notes="notesForDisplay"/>
    </section>
    <!-- <note-filter @filtered="setFilter" /> -->
        <!-- <note-list :notes="notesForDisplay" @remove="removenote"  /> -->
`,
    data() {
        return {
            notes: null
        }
    },
    created() {
        noteService.query().then(notes => this.notes = notes)
    },
    methods: {},
    computed: {
        notesForDisplay() {
            var notes = this.notes
            // if (this.filterBy?.vendor) {
            //     const regex = new RegExp(this.filterBy.vendor, 'i')
            //     notes = notes.filter(note => regex.test(note.vendor))
            // }
            // if (this.filterBy?.minSpeed) {
            //     notes = notes.filter(note => note.maxSpeed >= this.filterBy.minSpeed)
            // }
            return notes
        }
    },
    components: {
        noteFilter,
        noteList,
        noteDetails,
    },
    unmounted() { },
};