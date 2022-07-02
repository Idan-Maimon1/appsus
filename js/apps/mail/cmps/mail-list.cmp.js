import mailPreview from './mail-preview.cmp.js'

export default {
  props: ['mails'],
  template: `
       <section class="mail-list">
            <ul class="mails-list">
              <hr/>
                <li :class="mail.isRead ? 'opened-mail' : 'make-bold'"
                 v-for="mail in mails" :key="mail.id" >
                  <mail-preview class="mail-preview-container" 
                  @remove="remove" @toggleIsRead= 'toggleIsRead' :mail="mail" />
                        <hr/>
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
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
    toggleIsRead(id) {
      this.$emit('toggleIsRead', id)
    },
  },
  computed: {},
  unmounted() {},
}
