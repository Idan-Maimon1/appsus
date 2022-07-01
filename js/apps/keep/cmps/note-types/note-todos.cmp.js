export default {
    props: ['currNote'],
    template: `
 <section class="note-inner-content">
    <h1>{{this.currNote.info.label}}</h1>
    <h3>{{this.currNote.info.todos[0].txt}}</h3>
    <h3>{{this.currNote.info.todos[1].txt}}</h3>
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