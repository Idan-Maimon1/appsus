import { mailService } from '../services/mail-service.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
  template: `
 <section class="mail-main-layout">Mail
    <mail-list :mails="mailsForDisplay" />
 </section>
`,
  components: {
    mailList,
    mailFilter,
  },
  data() {
    return {
      mails: null,
      filterBy: null,
    }
  },
  created() {
    mailService.query().then((mails) => (this.mails = mails))
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    mailsForDisplay() {
      return this.mails
    },
  },
}
