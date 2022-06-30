import noteModificator from './note-modificator.cmp.js'
import noteTxt from './note-types/note-txt.cmp.js'
import noteImg from './note-types/note-img.cmp.js'
import noteVideo from './note-types/note-video.cmp.js'
import noteTodos from './note-types/note-todos.cmp.js'
import notePalette from './note-palette.cmp.js'

export default {
    props: ['note'],
    template: `
    <div class="note-preview">
        <div v-if="note.type === noteTypes.txt">
            <note-txt :currNote='currNote'/>
        </div>
        <div v-else-if="note.type === noteTypes.todos">
            <note-todos  :currNote='currNote'/>
        </div>
        <div v-else-if="note.type === noteTypes.video">
            <note-video  :currNote='currNote'/>
        </div>
        <div v-else-if="note.type === noteTypes.img">
            <note-img :currNote='currNote'/>
        </div>
        <note-palette calss="z-index99"/>
        <note-modificator class="note-modificator"/>
   </div>
`,
    data() {
        return {
            noteTypes: {
                txt: 'note-txt',
                todos: 'note-todos',
                video: 'note-video',
                img: 'note-img'
            },
            currNote: null
        };
    },
    created() {
        const currNote = this.note
        this.currNote = currNote
    },
    methods: {
    },
    computed: {

    },
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos,
        noteModificator,
        notePalette,
    },
    unmounted() { },
};