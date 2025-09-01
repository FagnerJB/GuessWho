import Alpine from 'alpinejs'

import Menu from './components/Menu'
import GuessWho from './components/GuessWho'
import Codenames from './components/Codenames'
import characters from './characters.json'
import './games/guessWho-data'
import './games/codenames-data'

window.Alpine = Alpine

customElements.define('gg-menu', Menu)
customElements.define('gg-guesswho', GuessWho)
customElements.define('gg-codenames', Codenames)

Alpine.data('global', () => ({
   init() {
      console.log('By https://fagnerjb.com')

      window.onbeforeunload = () => {
         if (this.$store.current !== 'menu') {
            return 'Are you sure?'
         }
      }

      this.$watch('$store.game.current', (game) => {
         if (game === 'menu') {
            this.$store.game.setParam('game')
         } else {
            this.$store.game.setParam('game', game)
         }

         if (game !== 'codenames') {
            this.$store.game.setParam('seed')
         }
      })
   },
}))

Alpine.store('game', {
   current: 'menu',
   characters,
   set: '',
   list: [],

   init() {
      const url = new URL(location.href)

      if (url.searchParams.has('set')) {
         this.setList(url.searchParams.get('set'))
      }

      if (url.searchParams.has('game')) {
         this.current = url.searchParams.get('game')
      }
   },

   openSets() {
      const sets = document.getElementById('sets')
      sets.showModal()
   },

   closeSets() {
      const sets = document.getElementById('sets')
      sets.close()
   },

   setList(set = '') {
      if (set.length === 0) {
         set = this.set
         this.list = []
      }
      this.set = set
      setTimeout(() => {
         this.list = this.characters[this.set].list
      }, 1)
      this.setParam('set', set)
      this.closeSets()
   },

   setParam(key, value = null) {
      const url = new URL(location.href)
      const params = new URLSearchParams(url.search)

      if (null === value) {
         params.delete(key)
      } else {
         params.set(key, value)
      }

      history.replaceState(null, '', url.pathname + '?' + params.toString())
   },
})

Alpine.start()
