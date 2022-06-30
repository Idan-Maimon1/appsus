import notePalette from '../cmps/note-palette.cmp.js'


export default {
    template: `
    <section class="note-details">
        <input v-if="!isClicked" type="text" 
        placeholder="Add a note..."
        @click="isClicked = !isClicked" class="demo-input">
        <form v-else action="" class="add-note-form">
            <input placeholder="Title" type="text" class="form-title">
            <input type="text" class="form-txt-content">
        <!-- <note-palette></note-palette> -->
        </form>
    </section>
        `,
    data() {
        return {
            isClicked: false,
        };
    },
    created() { },
    methods: {
    },
    computed: {
    },
    components: {
        notePalette,
    },
    unmounted() { },
};