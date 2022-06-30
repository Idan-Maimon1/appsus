export default {
    props: ['currNote'],
    template: `
 <section class="note-inner-content">
    <h1>{{this.currNote.info.title}}</h1>
    <h3>{{this.currNote.info.txt}}</h3>
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