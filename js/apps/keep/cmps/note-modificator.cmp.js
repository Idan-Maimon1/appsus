export default {
    props: ['currNote'],
    template: `
    <section>
            <img src="img/keep-imgs/icons/colors.svg" 
            @click="togglePalette">
            <img src="img/keep-imgs/icons/edit.svg" alt="">
            <img src="img/keep-imgs/icons/tag.svg" alt="">
            <img class="dupe-note" src="img/keep-imgs/icons/copy.svg" alt="">
            <img src="img/keep-imgs/icons/trash-can-7.svg"
             @click="remove(currNote.id) ">
    </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        togglePalette() {
            this.$emit('togglePalette');
        }
    },
    computed: {},
    unmounted() { },
};
{/* <img src="../../../../img/keep-imgs/icons/pin.svg" alt=""> */ }
