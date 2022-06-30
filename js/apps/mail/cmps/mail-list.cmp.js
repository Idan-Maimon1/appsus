import mailPreview from './mail-preview.cmp.js'
// import mailDetails from '../pages/mail-details.cmp.js'

export default {
  props: ['mails'],
  template: `
       <section class="mail-list">
            <ul class="mails-list">
              <hr/>
                <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                   <mail-preview :mail="mail" />
                       <!-- <button @click="select(mail.id)">Open mail</button> -->
                         <button class="delete-mail-btn" @click="remove(mail.id)">Delete</button>
                         <router-link :to="'/mail/'+mail.id">Read</router-link>
                    </div>
                   <hr/>
                </li>
            </ul>
               <div class="actions">        
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
    // select(mail) {
    //   this.$emit('selected', mail)
    // },
  },
  computed: {},
  unmounted() {},
}
