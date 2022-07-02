export default {
    props: ['currNote'],
    template: `
 <section class="note-inner-content">
    <h1>{{this.currNote.info.title}}</h1>
    <div v-for="(todo,index) in todos" 
    :key="currNote.info.txt" >
    <!-- <input type="checkbox" id="checkbox" v-model="checked"> -->
    <label for="checkbox">{{todos[index]}}</label>
</div>
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