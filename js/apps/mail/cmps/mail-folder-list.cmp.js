export default {
  // props: ['numOfUnread'],
  emits: ['setFolderType'],
  template: `
  <button class="inbox-btn" @click="setFilter('inbox')">inbox</button>
  <button class="sent-btn" @click="setFilter('sent')">sent</button>
`,
  data() {
    return {}
  },
  created() {
    // const arr2 = ['hi', 1, false, true, []];
    // const count2 = arr2.filter(Boolean).length;
  },
  methods: {
    setFilter(filterType) {
      this.$emit('setFolderType', filterType)
    },
  },
  computed: {},
  unmounted() {},
}
