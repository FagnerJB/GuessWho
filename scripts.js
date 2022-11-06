const characters = {
   craigOfTheCreek: {
      name: 'Craig of the Creek',
      key: 'craigOfTheCreek',
      showNames: true,
      list: [
         { name: 'J.P.', img: 'JP.jpg' },
         { name: '', img: 'Junk_lord.jpg' },
         { name: '', img: 'Marie.jpg' },
         { name: '', img: 'Maya.jpg' },
         { name: '', img: 'Melissa.jpg' },
         { name: '', img: 'Nicole.jpg' },
         { name: '', img: 'Paintball_Benny.jpg' },
         { name: '', img: 'Paintball_Mike.jpg' },
         { name: '', img: 'Paula_Mercer.jpg' },
         { name: '', img: 'Raj.jpg' },
         { name: '', img: 'Sailor_Boy.jpg' },
         { name: 'Rainha do Esgoto', img: 'SewerQueen.jpg' },
         { name: '', img: 'Shawn.jpg' },
         { name: '', img: 'Sparkle_Cadet.jpg' },
         { name: '', img: 'Stacks.jpg' },
         { name: 'Guardiã do Tempo', img: 'Timekeeper.jpg' },
         { name: '', img: 'Todd.jpg' },
         { name: '', img: 'Toman.jpg' },
         { name: '', img: 'Tony.jpg' },
         { name: '', img: 'Turnerbefore.jpg' },
         { name: '', img: 'Warpspeed.jpg' },
         { name: '', img: 'Wildernessa.jpg' },
         { name: '', img: 'Wren.jpg' },
         { name: '', img: 'Yustice.jpg' },
         { name: '', img: 'Zatch.jpg' },
         { name: '', img: 'Zoe.jpg' },
         { name: '', img: 'Angel.jpg' },
         { name: '', img: 'Angry-Jason.jpg' },
         { name: 'Tia Kimmy', img: 'AuntKimmy.jpg' },
         { name: '', img: 'Big_Red.jpg' },
         { name: 'Bobby', img: 'Bobby.jpg' },
         { name: 'Boris', img: 'Boris.jpg' },
         { name: '', img: 'Brigid.jpg' },
         { name: '', img: 'Bryson.jpg' },
         { name: 'Bola de Canhão', img: 'Cannonball.jpg' },
         { name: '', img: 'Carter_Brown.jpg' },
         { name: 'Craig', img: 'Craig_Williams.jpg' },
         { name: 'Darnell', img: 'Darnell.jpg' },
         { name: 'Duane', img: 'Duane.jpg' },
         { name: '', img: 'Eliza.jpg' },
         { name: '', img: 'Faraday.jpg' },
         { name: '', img: 'George.jpg' },
         { name: '', img: 'Handlebarb.jpg' },
         { name: '', img: 'Jane.jpg' },
         { name: '', img: 'Jessica.jpg' },
         { name: '', img: 'Jojo_Williams.jpg' },
         { name: '', img: 'Kelsey.jpg' },
         { name: '', img: 'Kelsey_Dad.jpg' },
         { name: '', img: 'Kenneth_older.jpg' },
         { name: '', img: 'King_Xavier.jpg' },
         { name: '', img: 'Kit.jpg' },
         { name: '', img: 'Laura.jpg' },
         { name: '', img: 'MacKenzie.jpg' },
         { name: '', img: 'Maney.jpg' },
      ],
   },
   stardewValley: {
      name: 'Stardew Valley',
      key: 'stardewValley',
      showNames: false,
      list: [
         { name: 'Abigail', img: 'StardewValley_02.png' },
         { name: 'Alex', img: 'StardewValley_04.png' },
         { name: 'Caroline', img: 'StardewValley_06.png' },
         { name: 'Clint', img: 'StardewValley_08.png' },
         { name: 'Demetrius', img: 'StardewValley_10.png' },
         { name: 'Dwarf', img: 'StardewValley_12.png' },
         { name: 'Elliott', img: 'StardewValley_14.png' },
         { name: 'Emily', img: 'StardewValley_16.png' },
         { name: 'Evelyn', img: 'StardewValley_18.png' },
         { name: 'George', img: 'StardewValley_40.png' },
         { name: 'Gunther', img: 'StardewValley_42.png' },
         { name: 'Gus', img: 'StardewValley_44.png' },
         { name: 'Haley', img: 'StardewValley_46.png' },
         { name: 'Harvey', img: 'StardewValley_48.png' },
         { name: 'Henchman', img: 'StardewValley_50.png' },
         { name: 'Jas', img: 'StardewValley_52.png' },
         { name: 'Jodi', img: 'StardewValley_54.png' },
         { name: 'Kent', img: 'StardewValley_56.png' },
         { name: 'Krobus', img: 'StardewValley_78.png' },
         { name: 'Leah', img: 'StardewValley_80.png' },
         { name: 'Leo', img: 'StardewValley_82.png' },
         { name: 'Lewis', img: 'StardewValley_84.png' },
         { name: 'Linus', img: 'StardewValley_86.png' },
         { name: 'Marnie', img: 'StardewValley_88.png' },
         { name: 'Maru', img: 'StardewValley_90.png' },
         { name: 'Morris', img: 'StardewValley_92.png' },
         { name: 'Pam', img: 'StardewValley_94.png' },
         { name: 'Penny', img: 'StardewValley_116.png' },
         { name: 'Pierre', img: 'StardewValley_118.png' },
         { name: 'Robin', img: 'StardewValley_120.png' },
         { name: 'Sam', img: 'StardewValley_122.png' },
         { name: 'Sebastian', img: 'StardewValley_124.png' },
         { name: 'Shane', img: 'StardewValley_126.png' },
         { name: 'Vincent', img: 'StardewValley_128.png' },
         { name: 'Willy', img: 'StardewValley_130.png' },
         { name: 'Wizard', img: 'StardewValley_132.png' },
      ],
   },
}

document.addEventListener('alpine:init', () => {
   Alpine.data('game', () => ({
      set: '',
      list: [],
      pick: {},
      discarded: [],
      status: 'notStarted',
      locked: false,
      remaining: -1,
      pickSelect: -1,

      init() {
         this.setList()
         window.onbeforeunload = () => 'Are you sure?'
         console.log('By https://fagnerjb.com')
      },

      setList() {
         this.set = 'craigOfTheCreek'
         this.list = JSON.parse(JSON.stringify(characters[this.set].list))
         this.remaining = this.list.length
      },

      getTitle() {
         if (this.set.length === 0) {
            return document.title
         }

         return `${document.title} with ${characters[this.set].name}`
      },

      restartGame() {
         const confirmRestart = window.confirm('Are you sure?')

         if (!confirmRestart) {
            return
         }

         this.setList()
         this.pick = {}
         this.discarded = []
         this.status = 'notStarted'
         this.locked = false
         this.pickSelect = -1
      },

      updateGame() {
         this.remaining = this.list.length - this.discarded.length

         if (typeof this.list[this.pickSelect] === 'undefined') {
            this.pick = {}
            return
         }

         this.pick = this.list[this.pickSelect]
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
