import notePalette from '../cmps/note-palette.cmp.js'
import { noteService } from '../../../services/note.service.js'
import { eventBus } from "../../../services/eventBus-service.js"

export default {
    template: `
    <section class="note-details">
        <input v-if="!isClicked" type="text" 
        placeholder="Add a note..."
        @click="isClicked = !isClicked" 
        class="demo-input">
        <form :style="getFormStyle" 
        v-else action="" class="add-note-form">
            <input :style="getFormStyle"
             v-model="newNote.info.title" 
             placeholder="Title"
             type="text" class="form-title">
            <div @click="this.newNote.isPinned = !this.newNote.isPinned" 
            :class="['newNote.isPinned' ? 'pinned' : '' ,'icon-container','new-note-pin']" >
                <img src="img/keep-imgs/icons/pin.svg" alt="">
            </div>
            <input autofocus type="text"
            :placeholder="getPlaceHolder"
             class="form-txt-content"
             v-model="newNote.info.txt"
             v-model="newNote.info.url">
            <div class="icon-container new-note-palette">
                <img @click="isPaletteOn = true" 
                v-if="!isPaletteOn" 
                src="img/keep-imgs/icons/colors.svg">
                <note-palette v-else 
                class="new-note-color-palette"
                @changeColor="changeNewNoteColor"></note-palette>
            </div>
            <div @click="newNote.type = 'note-txt'"
            class="icon-container new-note-text">
                <img src="img/keep-imgs/icons/add-text.svg">
            </div>
            <div @click="newNote.type = 'note-img'"
             class="icon-container new-note-img">
                <img src="img/keep-imgs/icons/img.svg">
            </div>
            <div @click="newNote.type = 'note-video'"
            class="icon-container new-note-video">
                <img src="img/keep-imgs/icons/video.svg">
            </div>
            <div @click="newNote.type = 'note-todos'"
             class="icon-container new-note-todos">
                <img src="img/keep-imgs/icons/cc.svg" >
            </div>
            <button @click="postNewNote" class="add-new-note">Add</button>
            <button class="close-new-note-form" 
            @click="isClicked = !isClicked">close</button>
        </form>
    </section>
        `,
    data() {
        return {
            isClicked: false,
            isPaletteOn: false,
            newNote: {
                id: noteService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    title: "",
                    txt: "",
                    url: null,
                    todos: [],
                },
                style: {
                    backgroundColor: "var(--kp4)"
                }
            }
        };
    },
    created() {
        this.resetNewNoteParams()
    },
    methods: {
        resetNewNoteParams() {
            this.newNote = {
                id: noteService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    title: "",
                    txt: "",
                    url: null,
                    todos: [],
                },
                style: {
                    backgroundColor: "var(--kp4)",
                }
            }
        },
        changeNewNoteColor(color) {
            this.isPaletteOn = !this.isPaletteOn
            this.newNote.style.backgroundColor = color
        },
        postNewNote() {
            this.isClicked = false
            eventBus.emit('postNote', this.newNote)
            this.resetNewNoteParams()
        }
    },
    computed: {
        getFormStyle() {
            return this.newNote.style
        },
        getPlaceHolder() {
            const noteType = this.newNote.type
            if (noteType === "note-txt") {
                return "Add a note..."
            }
            else if (noteType === "note-img") {
                return "Add an image url..."
            }
            else if (noteType === "note-todos") {
                return "Add todo..."
            }
            else if (noteType === "note-video") {
                return "Add a video url..."
            }
        }
    },
    components: {
        notePalette,
    },
    unmounted() { },
};