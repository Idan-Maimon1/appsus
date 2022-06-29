export default {
    props: ['currNote'],
    template: `
 <section>
    <h1>{{this.currNote.info.title}}</h1>
    <h3>{{this.currNote.info.txt}}</h3>
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