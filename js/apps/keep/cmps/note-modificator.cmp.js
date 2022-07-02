import { eventBus } from "../../../services/eventBus-service.js"

export default {
    props: ['currNote'],
    template: `
    <section>
            <img src="img/keep-imgs/icons/colors.svg" 
            @click="togglePalette">
            <img src="img/keep-imgs/icons/edit.svg" alt="">
            <img src="img/keep-imgs/icons/tag.svg" alt="">
            <img @click="dupelicateNote(currNote)" class="dupe-note" src="img/keep-imgs/icons/copy.svg" alt="">
            <img src="img/keep-imgs/icons/trash-can-7.svg"
             @click="remove(currNote.id) ">
    </section>
`,
    data() {
        return {};
    },
    created() { 
        // this.unsubscribe = eventBus.on('dupelicateNote', this.currNote)
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        togglePalette() {
            this.$emit('togglePalette');
        },
        dupelicateNote(note){
            eventBus.emit('postNote',note)
        }
    },
    computed: {},
    destroyed() {
        // this.unsubscribe()
    },
    unmounted() { },
};
{/* <img src="../../../../img/keep-imgs/icons/pin.svg" alt=""> */ }
