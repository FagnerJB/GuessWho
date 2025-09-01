document.addEventListener('alpine:init', () => {
   Alpine.data('guessWho', () => ({
      pick: {},
      discarded: [],
      locked: false,
      remaining: -1,
      pickSelect: -1,
      showModal: true,

      init() {
         if (this.$store.game.set.length === 0) {
            this.$store.game.openSets()
         }

         this.$watch('$store.game.set', () => this.cleanStats())
      },

      cleanStats() {
         this.remaining = this.$store.game.list.length
         this.pick = {}
         this.discarded = []
         this.locked = false
         this.pickSelect = -1
      },

      restartGame() {
         if (!window.confirm('Are you sure?')) {
            return
         }

         this.cleanStats()
      },

      updateGame() {
         this.remaining = this.$store.game.list.length - this.discarded.length

         if (typeof this.$store.game.list[this.pickSelect] === 'undefined') {
            this.pick = {}
            return
         }

         this.pick = this.$store.game.list[this.pickSelect]
      },

      toggleItemStatus(key) {
         if (this.remaining === 1) {
            return
         }

         if (this.discarded.includes(key)) {
            this.discarded.splice(this.discarded.indexOf(key), 1)
         } else {
            this.discarded.push(key)
         }
      },

      getItemStatus(key) {
         return !this.discarded.includes(key)
      },
   }))
})
