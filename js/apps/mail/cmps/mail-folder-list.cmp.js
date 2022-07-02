export default {
  template: `
  <button class="inbox-btn" @click="setFilter('inbox')" v-model="filterBy.to">inbox</button>
  <button class="sent-btn" @click="setFilter('sent')" v-model="filterBy.to">sent</button>
`,
  data() {
    return {}
  },
  created() {},
  methods: {
    setFilter(filterType) {
      this.$emit('setFolderType', filterType)
    },
  },
  computed: {},
  unmounted() {},
}
