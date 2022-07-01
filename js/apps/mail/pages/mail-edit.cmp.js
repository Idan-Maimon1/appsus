import { mailService } from '../services/mail-service.js'
// import { eventBus } from '../../../services/eventBus-service.js'

export default {
  template: `
        <section v-if="mailToEdit" class="mail-edit-container">
            <h4>Compose mail</h4>
            <form @submit.prevent="save">
                <!-- <input type="text" v-model="mailToEdit.to" placeholder="To"> -->
                <input type="text" v-model="mailToEdit.subject" placeholder="Subject" class="compose-subject"><br>
                 <textarea v-model="mailToEdit.body" id="newMailBody" name="newMailBody" rows="30" cols="80" required></textarea><br>
                <!-- <input type="text" v-model="mailToEdit.body" placeholder="Your messege"> -->
                <button>Send</button>
            </form>
        </section>
    `,
  data() {
    return {
      mailToEdit: null,
    }
  },
  created() {
    // const id = this.$route.params.mailId
    // if (id) {
    //   mailService.get(id).then((mail) => (this.mailToEdit = mail))
    // } else {
    this.mailToEdit = mailService.getEmptyMail()
    // }
  },
  methods: {
    save() {
      if (!this.mailToEdit.body) return
      mailService.save(this.mailToEdit).then((mail) => {
        this.$router.push('/mail')
        // eventBus.emit('show-msg', {
        //   txt: 'Saved/Update successfully',
        //   type: 'success',
        // })
      })
    },
  },
  computed: {
    // pageTitle() {
    //   const id = this.$route.params.mailId
    //   return id ? 'Edit mail' : 'Add mail'
    // },
  },
}
