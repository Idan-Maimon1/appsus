import noteModificator from './note-modificator.cmp.js'
import noteTxt from './note-types/note-txt.cmp.js'
import noteImg from './note-types/note-img.cmp.js'
import noteVideo from './note-types/note-video.cmp.js'
import noteTodos from './note-types/note-todos.cmp.js'
import notePalette from './note-palette.cmp.js'

export default {
    props: ['note'],
    template: `
    <div class="note-preview"
      @mouseover="isModBarOn = true"
      @mouseover="isHoverNow = true"
      @mouseleave="hideMOdBar"
      @mouseleave="isHoverNow = false"
      >
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
        <note-palette v-if="isPickColorClicked"/>
        <!-- <note-modificator v-if="isModBarOn || isPickColorClicked" -->
         <note-modificator :class="(isModBarOn || isPickColorClicked) ? '' : 'fade-out'"       
             :currNote='currNote' 
             class="note-modificator"
              @remove="remove"
              @togglePalette="togglePalette"/>
        <!-- <div v-else 
             class="note-modificator-placeholder"></div> -->
   </div>
`,
    data() {
        return {
            isModBarOn: false,
            isPickColorClicked: false,
            isHoverNow: false,
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
        remove(id) {
            this.$emit('remove', id);
        },
        togglePalette() {
            this.isPickColorClicked = !this.isPickColorClicked
        },
        hideMOdBar() {
            setTimeout(() => {
                if (!this.isHoverNow) this.isModBarOn = false
            }, 200);

        },
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