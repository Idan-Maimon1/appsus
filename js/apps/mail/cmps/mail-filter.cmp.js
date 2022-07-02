import mailFolderList from './mail-folder-list.cmp.js'

export default {
  template: `
    <section class="mail-filter">
        <div class="filter-by-subject">
            <input class="search-mail" @input="filter" v-model="filterBy.subject" v-model="filterBy.body" v-model="filterBy.from" type="text" placeholder="Search mail">
        </div>
        <button class="sort-mail-btn" @click="sort">Sort by date</button>
          <mail-folder-list @setFolderType="filter"/>
    </section>
    `,

  components: {
    mailFolderList,
  },

  data() {
    return {
      filterBy: {
        subject: '',
        body: '',
        from: '',
        to: '',
      },
    }
  },
  methods: {
    filter(type) {
      console.log('filter mail lifter')
      this.filterBy.to = type
      this.$emit('filtered', this.filterBy)
    },
    sort() {
      this.$emit('sorted')
    },
  },
  created() {},

  computed: {},
  unmounted() {},
}
