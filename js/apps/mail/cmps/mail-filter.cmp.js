export default {
  template: `
    <section class="mail-filter">
        <div class="filter-by-subject">
            <input @input="filter" v-model="filterBy.subject" v-model="filterBy.body" type="text" placeholder="search by subject">
        </div>
    </section>
    `,
  data() {
    return {
      filterBy: {
        subject: '',
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
