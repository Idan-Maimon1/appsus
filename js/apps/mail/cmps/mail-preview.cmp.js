export default {
  props: ['mail'],
  template: `
    <section>
    <span class="mail-signs">
      <span class="mail-squeare">&#10065</span> 
      <span class="mail-star">&#10032;</span>
    </span>
    <span class="mail-from">{{mail.from}}</span>
    <span class="mail-short-content">  
       <span class="mail-subject"> {{mail.subject}}</span> - 
       <span>{{mail.body}}</span></span> 
    <span class="mail-time">{{formatedTime}}</span>
    <button class="delete-mail-btn" @click="remove(mail.id)">Delete</button>
                  <router-link :to="'/mail/'+mail.id">Read</router-link>

  </section>
`,
  data() {
    return {}
  },
  created() { },
  methods: {},
  computed: {
    formatedTime() {
      const mailTimeStamp = this.mail.sentAt
      const mailDate = new Date(mailTimeStamp)
      const mailMonthNum = mailDate.getMonth() + 1
      const mailDay = mailDate.getDay() + 1
      const mailMonthWord = mailDate.toLocaleString('en-US', {
        month: 'short',
      })
      return mailMonthWord + ' ' + mailDay
    },
  },
}
