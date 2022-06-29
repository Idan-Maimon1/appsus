export default {
    props: ['currNote'],
    template: `
 <section>
    <h3>{{this.currNote.info.label}}</h3>
    <h1>{{this.currNote.info.todos[0].txt}}</h1>
    <h1>{{this.currNote.info.todos[1].txt}}</h1>
 </section>

   `,
    data() {
        return {};
    },
    created() {
        console.log('currNote: ',this.currNote)
    },
    methods: {},
    computed: {},
    unmounted() { },
};