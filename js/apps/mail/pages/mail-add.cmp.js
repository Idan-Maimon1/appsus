import { mailService } from '../services/mail-service.js'
// import { eventBus } from '../../../services/eventBus-service.js'

export default {
  template: `
        <section v-if="addMail" class="add-mail-container">
            <h4>New Message</h4>
            <form @submit.prevent="save">
                <input class="input-mail-to" type="text" v-model="addMail.to" placeholder="To" class="compose-to"> <br><br>
          
               <input class="input-mail-subject" type="text" v-model="addMail.subject" placeholder="Subject" class="compose-subject">
              
               <textarea class="input-mail-content" v-model="addMail.body" id="newMailBody" name="newMailBody" rows="30" cols="80" required></textarea><br>
                <button class="send-mail-btn">Send</button>
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
