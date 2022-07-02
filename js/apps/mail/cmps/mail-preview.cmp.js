export default {
  props: ['mail'],
  template: `
 
    <section> 
    <span class="mail-signs">
      <span class="mail-squeare">&#10065</span> 
      <span class="mail-star">&#10032;</span>
    </span>
   
    <span class="mail-from" >{{mail.from}}</span>
      <router-link :to="'/mail/'+mail.id" class="router-mail-details">
    <span class="mail-short-content" >  
       <span class="mail-subject"> {{mail.subject}}</span> - 

 <span>{{formatedText}}<span v-if="longText">...</span></span>
     </router-link>     
       <!-- <span>{{mail.body}}</span></span>  -->
    <span class="mail-time">{{formatedTime}}</span>
    <!-- <button class="delete-mail-btn" @click="remove(mail.id)">Delete</button> -->
    <!-- <button class="is-read-btn" @click="toggleIsRead()">Is Read</button> -->
      

  </section>
   
`,
  data() {
    return {
      // subjectLength: this.mail.subject.length,
      longText: this.mail.subject.length + this.mail.body.length > 50,
      isUnread: !this.mail.isRead,
      //  v-if="isUnread" class="bold-content"
    }
  },
  created() {},
  methods: {
    // toggleIsRead() {
    //   this.mail.isRead = !this.mail.isRead
    // },
  },
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

    formatedText() {
      if (this.longText) {
        return this.mail.body.slice(0, 50 - this.mail.subject.length)
      } else {
        return this.mail.body
      }
    },
  },
}
