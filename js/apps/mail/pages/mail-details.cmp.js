import { mailService } from '../services/mail-service.js'

export default {
  props: ['mail'],
  template: `
        <section v-if="mail"  class="main mail-details">
            <h4>Mail details</h4>
            <p>Subject:{{mail.subject}}</p>
            <p>Content:{{mail.body}}</p>
            <p>Long Text:{{mail.longTxt}}</p>
             <div class="actions">
                       <button @click="remove(mail.id)">Delete</button>
                        <!-- <router-link :to="'/mail">Back</router-link> -->
                    </div>
        </section>
    `,
  data() {
    return {
      mail: null,
    }
  },
  methods: {
    remove(mailId) {
      this.$emit('remove', mailId)
    },
  },
  created() {},
  computed: {},
  watch: {
    '$route.params.mailId': {
      handler() {
        const id = this.$route.params.mailId
        mailService.get(id).then((mail) => {
          this.mail = mail
        })
      },
      immediate: true,
    },
  },
}
