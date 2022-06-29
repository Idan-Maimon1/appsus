import mailPreview from './mail-preview.cmp.js'

export default {
  props: ['mails'],
  template: `
       <section class="mail-list">
            <ul class="mails-list">
              <hr/>
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                   <mail-preview :mail="mail" />
                </li>
            </ul>
        </section>
`,
  data() {
    return {}
  },
  components: {
    mailPreview,
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
}
