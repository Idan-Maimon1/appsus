import mailPreview from './mail-preview.cmp.js'
// import mailDetails from '../pages/mail-details.cmp.js'

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
                   <!-- <button @click="remove(mail.id)"><i class="fa-solid fa-trash-can"></i></button>
                    <button class="is-read-btn" @click="toggleIsRead(mail.id)"><i class="fa-solid fa-envelope-open"></i></button> -->
                                        <!-- <button @click="select(mail.id)">Open mail</button> -->
                       <!-- <section class="mail-tool"> -->
                        <!-- </section> -->
                        <hr/>
                      </li>
                    </ul>
                    <!-- <div class="actions">        
                 </div> -->
        </section>
`,

  data() {
    return {}
  },
  components: {
    mailPreview,
    // mailDetails,
  },
  created() {},
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
    toggleIsRead(id) {
      this.$emit('toggleIsRead', id)
    },
    // select(mail) {
    //   this.$emit('selected', mail)
    // },
  },
  computed: {},
  unmounted() {},
}
