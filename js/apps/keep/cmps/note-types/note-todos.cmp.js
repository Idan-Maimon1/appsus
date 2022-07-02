export default {
    props: ['currNote'],
    template: `
 <section class="note-inner-content">
    <h1>{{this.currNote.info.title}}</h1>
    <h3 v-for="(todo,index) in todos" 
    :key="currNote.info.txt" >{{todos[index]}}</h3>
 </section>

   `,
    data() {
        return {
            todos: null,
        };
    },
    created() {
        this.todos = this.currNote.info.txt.split(',')
    },
    methods: {},
    computed: {},
    unmounted() { },
};