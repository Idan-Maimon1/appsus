import { eventBus } from "../../../services/eventBus-service.js"

export default {
  // props: ['numOfUnread'],
  emits: ['setFolderType'],
  template: `
  <button class="inbox-btn" @click="setFilter('inbox')">inbox {{unreadCount}}</button>
  <button class="sent-btn" @click="setFilter('sent')">sent</button>
`,
  data() {
    return {
      unreadCount: "",
    }
  },
  created() {
    this.unsubscribe = eventBus.on('countUnread',this.getUnreadCount)
    // const arr2 = ['hi', 1, false, true, []];
    // const count2 = arr2.filter(Boolean).length;
  },
  methods: {
    getUnreadCount(unreadsCount){
      this.unreadCount = unreadsCount
    },
    setFilter(filterType) {
      this.$emit('setFolderType', filterType)
    },
  },
  computed: {},
  unmounted() {},
}
