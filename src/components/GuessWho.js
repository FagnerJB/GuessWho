export default class GuessWho extends HTMLElement {
   constructor() {
      super()
   }

   connectedCallback() {
      this.innerHTML = `
<header class="bg-zinc-900 fixed top-0 inset-x-0 z-10">
<div class="container mx-auto py-3 px-1 flex items-center">
   <h1 class="text-xl font-bold mb-2 hidden sm:block text-center">Guess Who?</h1>
   <div class="grow">
      <div class="flex gap-2 items-center justify-center mb-2 text-lg">
         <div class="flex flex-col gap-1">
            <span class="text-sm">Your pick:</span>
            <select x-model="pickSelect" x-bind:disabled="locked"
                     x-effect="updateGame">
               <option value="-1">Choose or</option>
               <template x-for="(item, key) in $store.game.list">
                  <option x-bind:value="key" x-text="item.name"></option>
               </template>
            </select>
         </div>
         <button x-on:click="pickSelect = Math.floor(Math.random() * $store.game.list.length)" x-bind:disabled="locked">
            Random
         </button>
         <button class="py-1 px-3 text-white rounded" x-text="locked ? 'Unlock' : 'Lock'"
                  x-on:click.prevent="locked = !locked" x-bind:disabled="!Object.keys(pick).length"></button>
      </div>
      <div class="flex gap-2 items-center justify-center text-lg">
         <button x-on:click.prevent="$store.game.openSets" x-bind:disabled="locked">
            Change set
         </button>
         <button x-on:click.prevent="restartGame" x-bind:disabled="locked">
            Restart
         </button>
         <button x-on:click.prevent="if(window.confirm('Are you sure?')){$store.game.current='menu'}" x-bind:disabled="locked">Back</button>
      </div>
      <div class="text-center font-semibold text-lg mt-3">
         <span x-text="remaining"></span> remaining
      </div>
   </div>
   <div>
      <template x-if="!Object.keys(pick).length">
         <div class="w-24 aspect-[149/193] flex justify-center items-center text-4xl text-slate-400 font-bold border-2 border-black rounded-sm mr-2">
            ?
         </div>
      </template>
      <template x-if="Object.keys(pick).length">
         <img class="w-24 aspect-[149/193] mr-2 max-w-none"
               x-bind:src="\`images/\${$store.game.set}/\${pick.img}\`" x-bind:alt="pick.name"
               x-bind:title="pick.name" />
      </template>
   </div>
</div>
</header>
<main class="container py-4 mx-auto mt-36">
<ul class="flex gap-3 flex-wrap justify-center">
   <template x-for="(item, key) in $store.game.list" x-bind:key="key">
      <li>
         <button class="plain relative w-36" x-bind:title="item.name"
            x-on:click.prevent="toggleItemStatus(key)">
            <div class="absolute inset-0 z-1" x-bind:class="getItemStatus(key) ? '' : 'bg-black/50'"></div>
            <img class="pointer-events-none w-36 aspect-[149/193]"
                  x-bind:class="getItemStatus(key) ? '' : 'grayscale'" x-bind:alt="item.name"
                  x-bind:src="\`images/\${$store.game.set}/\${item.img}\`" />
            <template x-if="$store.game.characters[$store.game.set].showNames">
               <div class="bg-neutral-600 py-1 px-2 text-center text-white font-bold  truncate w-full"
                     x-text="item.name"></div>
            </template>
         </button>
      </li>
   </template>
</ul>
</main>
      `
   }
}
