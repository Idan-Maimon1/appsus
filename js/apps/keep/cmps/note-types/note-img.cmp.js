export default {
    props: ['currNote'],
    template: `
 <section>
    <h1>{{this.currNote.info.title}}</h1>
 <img :src="this.currNote.info.url" alt="hhh">
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