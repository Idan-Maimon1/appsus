import notePalette from '../cmps/note-palette.cmp.js'


export default {
    template: `
    <section class="note-details">
        <input v-if="!isClicked" type="text" 
        placeholder="Add a note..."
        @click="isClicked = !isClicked" class="demo-input">
        <form v-else action="" class="add-note-form">
            <input placeholder="Title" type="text" class="form-title">
            <div class="icon-container new-note-pin">
                <img src="img/keep-imgs/icons/pin.svg" alt="">
            </div>
            <input autofocus placeholder="Add a note..." type="text" class="form-txt-content"  selected>
            <div class="icon-container new-note-palette">
                <img src="img/keep-imgs/icons/colors.svg">
            </div>
            <div class="icon-container new-note-text">
                <img src="img/keep-imgs/icons/add-text.svg">
            </div>
            <div class="icon-container new-note-img">
                <img src="img/keep-imgs/icons/img.svg">
            </div>
            <div class="icon-container new-note-video">
                <img src="img/keep-imgs/icons/video.svg">
            </div>
            <div class="icon-container new-note-todos">
                <img src="img/keep-imgs/icons/cc.svg" >
            </div>
            <button class="add-new-note">Add</button>
            <button class="close-new-note-form" 
            @click="isClicked = !isClicked">close</button>
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