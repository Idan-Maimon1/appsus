export default {
    template: `
 <header class="main-header">
     <div class="logo">
Appsus 
</div>
<div @click="isNavOn = !isNavOn" class="nav">
      &#9776
    </div>
<div v-if="isNavOn">
      <router-link to="/keep" class="keep" >keep</router-link>
      <router-link to="/mail" class="mail">mail</router-link></div>
 </header>
`,
    data() {
        return {
            isNavOn: false,
        }
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};