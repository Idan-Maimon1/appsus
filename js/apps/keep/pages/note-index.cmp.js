import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import noteDetails from './note-details.cmp.js';
import { noteService } from '../../../services/note.service.js'


export default {
    template: `
    <section class="keep-main-layout">
        <note-filter/>
        <note-details/>
        <note-list :notes="notesForDisplay" @remove="removeNote"/>
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
    methods: {
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    console.log(id,'Deleted successfully')
                    const idx = this.notes.findIndex((note) => note.id === id)
                    console.log('note[idx]: ',this.notes)
                    this.notes.splice(idx, 1)
                    console.log('this.notes: ',this.notes)
                    //   showSuccessMsg('Deleted successfully')
                })
            // .catch(err => {
            //     console.log(err)
            //     showErrorMsg('Failed to remove')
            // })
        },
    },
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