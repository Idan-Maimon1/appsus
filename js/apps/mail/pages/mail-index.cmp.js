import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
// import mailDetails from './mail-details.cmp.js'

export default {
  template: `
 <section class="mail-main-layout">
 <mail-filter @filtered="filterMail"/>
    <mail-list :mails="mailsForDisplay" />
     <mail-details v-if="selectedMail" @close="selectedMail = null" :mail="selectedMail" />
 </section>
`,
  components: {
    mailList,
    mailFilter,
    // mailDetails,
    mailFilter,
  },
  data() {
    return {
      mails: null,
      filterBy: null,
      // selectedMail: null,
    }
  },
  created() {
    mailService.query().then((mails) => (this.mails = mails))
  },
  methods: {
    filterMail(filterBy) {
      this.filterBy = filterBy
    },
    selectBook(mail) {
      this.selectedMail = mail
    },
  },
  computed: {
    mailsForDisplay() {
      // להוסיף פילטר לפי פרום ולפי בודי
      let mails = this.mails
      if (!this.filterBy) return mails
      const regex1 = new RegExp(this.filterBy.subject, 'i')
      const regex2 = new RegExp(this.filterBy.body, 'i')
      const regex3 = new RegExp(this.filterBy.from, 'i')
      mails = mails.filter(
        (mail) =>
          regex1.test(mail.subject) ||
          regex2.test(mail.body) ||
          regex3.test(mail.from)
      )
      return mails
    },
  },
}
