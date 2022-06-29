export default {
  props: ['mail'],
  template: `
  <section class="mail-preview">

       <span></span><span class="subject"> {{mail.subject}}</span> - <span>{{mail.body}}</span>
        <hr/>
     
  </section>
`,
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
}
