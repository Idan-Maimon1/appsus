import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import noteDetails from './note-details.cmp.js';
import { noteService } from '../../../services/note.service.js'
import { eventBus } from "../../../services/eventBus-service.js"


export default {
    template: `
    <section class="keep-main-layout">
        <note-filter/>
        <note-details :isEditable="demoFalse" :key="newNote" />
        <note-list :notes="notesForDisplay"
        @remove="removeNote"
        @changeColor="updateNote"/>
        <note-details :isEditable="isEditable"
         :currNote="currEditedNote" :key="editNote"
         v-if="isEditable" class="edit-curr-note"
         @toggleEditable="isEditable = false"/>
    </section>
    <!-- <note-filter @filtered="setFilter" /> -->
        <!-- <note-list :notes="notesForDisplay" @remove="removenote"  /> -->
`,
    data() {
        return {
            notes: null,
            isEditable: false,
            demoFalse: false,
            currEditedNote: null,
        }
    },
    created() {
        noteService.query()
        .then(notes => notes.sort(function(x,y){
            return (x === y)? 0 : x? -1 : 1;
        }))
        .then(notes => this.notes = notes)
        this.unsubscribe = eventBus.on('postNote', this.postNote)
        this.unsubscribe = eventBus.on('updateNote', this.updateNote)
        this.unsubscribe = eventBus.on('editNote', this.editNote)
    },
    methods: {
        editNote(note) {
            this.isEditable = true
            this.currEditedNote = note
        },
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id)
                    this.notes.splice(idx, 1)
                })
        },
        updateNote(updatedNote) {
            noteService.updateNote(updatedNote)
        },
        postNote(note) {
            let newNote = JSON.parse(JSON.stringify(note))
            newNote.id = noteService.makeId()
            noteService.post(newNote)
                .then((updatedNote) => this.notes.unshift(updatedNote))
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
    }, destroyed() {

        this.unsubscribe()
    },
    unmounted() { },
};