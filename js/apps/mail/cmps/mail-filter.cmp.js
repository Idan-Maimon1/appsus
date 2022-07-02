import mailFolderList from './mail-folder-list.cmp.js'

export default {
  template: `
    <section class="mail-filter">
        <div class="filter-by-subject">
            <input class="search-mail"
             @input="filter()" 
             v-model="filterBy.text" 
             type="text" placeholder="Search mail">
        </div>
        <!-- <button class="sort-mail-btn" @click="sort">Sort by date</button> -->
          <mail-folder-list @setFolderType="filter"/>
    </section>
    `,

  components: {
    mailFolderList,
  },

  data() {
    return {
      filterBy: {
        text: '',
        to: 'inbox',
      },
    }
  },
  methods: {
    filter(type) {
      if (type) this.filterBy.to = type
      this.$emit('filtered', this.filterBy)
    },
  },
  created() {},

  computed: {},
  unmounted() {},
}
