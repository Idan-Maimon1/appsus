import noteModificator from './note-modificator.cmp.js'
import noteTxt from './note-types/note-txt.cmp.js'
import noteImg from './note-types/note-img.cmp.js'
import noteVideo from './note-types/note-video.cmp.js'
import noteTodos from './note-types/note-todos.cmp.js'
import notePalette from './note-palette.cmp.js'
import noteDetails from '../pages/note-details.cmp.js';
import { eventBus } from "../../../services/eventBus-service.js"


export default {
    props: ['note', 'index'],
    template: `
    <div :style="getNoteStyle" class="note-preview"
      @mouseover="isModBarOn = true"
      @mouseover="isHoverNow = true"
      @mouseleave="hideMOdBar"
      @mouseleave="isHoverNow = false"
      >
          <img src="img/keep-imgs/icons/pin.svg" 
          @click="togglePinned" class="note-pin-status">
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
        <note-palette v-if="isPickColorClicked" 
            @changeColor="changeColor"/>
         <note-modificator @toggleEditNote="toggleEditNote"
          :class="(isModBarOn || isPickColorClicked) ? '' : 'fade-out'"       
             :currNote='currNote' 
             class="note-modificator"
              @remove="remove"
              @togglePalette="togglePalette"/>
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
        toggleEditNote() {
            eventBus.emit('editNote', this.note)
        },
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
        changeColor(color) {
            const updatedNote = this.note
            updatedNote.style.backgroundColor = color
            this.$emit('changeColor', updatedNote)
        }
    },
    computed: {
        getNoteStyle() {
            return this.note.style
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos,
        noteModificator,
        notePalette,
        noteDetails,
    },
    unmounted() { },
};