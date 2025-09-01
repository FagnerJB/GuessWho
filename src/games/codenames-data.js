import { Random } from 'random'

document.addEventListener('alpine:init', () => {
   Alpine.data('codenames', () => ({
      random: null,
      seed: '',
      list: [],
      locked: false,
      isMaster: false,
      blueAgents: [],
      blueRemaining: -1,
      redAgents: [],
      redRemaining: -1,
      assassin: -1,
      reveals: [],

      init() {
         if (this.$store.game.set.length === 0) {
            this.$store.game.openSets()
         }

         this.$watch('$store.game.set', () =>
            setTimeout(() => this.cleanStats(), 1)
         )
         this.$watch('seed', () => setTimeout(() => this.cleanStats(), 1))

         const url = new URL(location.href)

         if (url.searchParams.has('seed')) {
            this.seed = url.searchParams.get('seed')
         } else {
            this.randomSeed()
         }
      },

      cleanStats() {
         if (0 === this.$store.game.list.length) {
            return
         }

         this.locked = false
         this.isMaster = false
         this.reveals = []
         this.random = new Random(this.seed)
         this.list = this.random.sampler(this.$store.game.list, 25)

         const list = this.random.shuffle(
            Array.from({ length: 25 }, (_v, i) => i)
         )
         this.blueAgents = list.slice(0, 8)
         this.redAgents = list.slice(16, 24)
         this.assassin = list[13]

         if (this.random.boolean()) {
            this.blueAgents.push(list[11])
         } else {
            this.redAgents.push(list[11])
         }

         this.redRemaining = this.redAgents.length
         this.blueRemaining = this.blueAgents.length

         this.$store.game.setParam('seed', this.seed)
      },

      restartGame() {
         if (!window.confirm('Are you sure?')) {
            return
         }

         this.cleanStats()
      },

      randomSeed() {
         let result = ''
         let characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
         let charactersLength = characters.length
         for (let i = 0; i <= 7; i++) {
            result += characters.charAt(
               Math.floor(Math.random() * charactersLength)
            )
         }
         this.seed = result
      },

      getItemStatus(key) {
         let classes = []

         if (this.isMaster || this.reveals.includes(key)) {
            if (this.redAgents.includes(key)) {
               classes.push('red')
            } else if (this.blueAgents.includes(key)) {
               classes.push('blue')
            } else if (this.assassin === key) {
               classes.push('assassin')
            } else {
               classes.push('person')
            }
         } else {
            classes.push('none')
         }

         if (this.reveals.includes(key)) {
            classes.push('reveal')
         }

         return classes.join(' ')
      },

      toggleItemStatus(key) {
         if (this.reveals.includes(key)) {
            return
         }

         this.reveals.push(key)

         this.blueRemaining = this.blueAgents.length
         this.redRemaining = this.redAgents.length
         console.log(this.blueRemaining, this.redRemaining)

         this.blueAgents.forEach((item) => {
            if (this.reveals.includes(item)) {
               this.blueRemaining--
            }
         })

         this.redAgents.forEach((item) => {
            if (this.reveals.includes(item)) {
               this.redRemaining--
            }
         })
      },
   }))
})
