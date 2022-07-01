import { mailService } from '../services/mail-service.js'
// import { eventBus } from '../../../services/eventBus-service.js'

export default {
  template: `
        <section v-if="addMail" class="add-mail-container">
            <h4>Compose mail</h4>
            <form @submit.prevent="save">
                <input type="text" v-model="addMail.subject" placeholder="Subject" class="compose-subject"><br>
                 <textarea v-model="addMail.body" id="newMailBody" name="newMailBody" rows="30" cols="80" required></textarea><br>

                <button>Send</button>
            </form>
        </section>
    `,
  data() {
    return {
      addMail: null,
    }
  },
  created() {
    this.addMail = mailService.getEmptyMail()
  },
  methods: {
    save() {
      if (!this.addMail.body) return
      mailService.save(this.addMail).then((mail) => {
        this.$router.push('/mail')
        // eventBus.emit('show-msg', {
        //   txt: 'Sent successfully',
        //   type: 'success',
        // })
      })
    },
  },
  computed: {},
}
