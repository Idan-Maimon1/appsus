export default {
  template: `
    <section class="mail-filter">
        <div class="filter-by-subject">
            <input class="search-mail" @input="filter" v-model="filterBy.subject" v-model="filterBy.body" v-model="filterBy.from" type="text" placeholder="search">
        </div>
    </section>
    `,
  data() {
    return {
      filterBy: {
        subject: '',
        body: '',
        from: '',
      },
    }
  },
  methods: {
    filter() {
      this.$emit('filtered', this.filterBy)
    },
  },
  created() {},

  computed: {},
  unmounted() {},
}
