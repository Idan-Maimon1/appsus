export default {
    props: ['currNote'],
    template: `
 <section class="note-inner-content">
    <h1>{{this.currNote.info.title}}</h1>
 <img :src="this.currNote.info.url" alt="hhh">
 </section>

   `,
    data() {
        return {};
    },
    created() {
    },
    methods: {},
    computed: {},
    unmounted() { },
};