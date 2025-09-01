export default class Menu extends HTMLElement {
   constructor() {
      super()
   }

   connectedCallback() {
      this.innerHTML = `
      <div class="container mx-auto py-10">
         <h1 class="text-3xl font-bold mb-10">Guessing Games</h1>
         <nav>
            <ul class="flex flex-wrap gap-6 mt-6">
               <li class="aspect-video h-66 flex flex-col gap-6 py-3 px-4 rounded bg-black/20">
               <strong class="text-2xl">Guess Who?</strong>
               <p>Guess the hidden character of the opponent, asking yes-or-no questions to narrow the possibilities.</p>
               <button class="self-end justify-self-end" x-on:click="$store.game.current='guessWho'">Play Guess Who?</button>
               </li>
               <li class="aspect-video h-66 flex flex-col gap-6 py-3 px-4 rounded bg-black/20">
               <strong class="text-2xl">Codenames</strong>
               <p>Give one-word clues to your teammates that connect multiple agents on the board, while avoiding the opposing team’s cards and the deadly assassin.</p>
               <button class="self-end justify-self-end" x-on:click="$store.game.current='codenames'">Play Codenames</button>
               </li>
            </ul>
         </nav>
      </div>
      `
   }
}
