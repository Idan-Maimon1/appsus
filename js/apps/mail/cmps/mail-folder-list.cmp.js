import { eventBus } from '../../../services/eventBus-service.js'

export default {
  emits: ['setFolderType'],
  template: `
  <button class="inbox-btn" @click="setFilter('inbox')">inbox {{unreadCount}}</button>
  <button class="sent-btn" @click="setFilter('sent')">sent</button>
`,
  data() {
    return {
      unreadCount: '',
    }
  },
  created() {
    this.unsubscribe = eventBus.on('countUnread', this.getUnreadCount)
  },
  methods: {
    getUnreadCount(unreadsCount) {
      this.unreadCount = unreadsCount
    },
    setFilter(filterType) {
      this.$emit('setFolderType', filterType)
    },
  },
  computed: {},
  unmounted() {},
}
