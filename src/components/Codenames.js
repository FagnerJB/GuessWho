export default class Codenames extends HTMLElement {
   constructor() {
      super()
   }

   connectedCallback() {
      this.innerHTML = `
<header class="bg-zinc-900 fixed top-0 inset-x-0 z-10">
<div class="container mx-auto py-3 px-1 flex items-center">
   <h1 class="text-xl font-bold mb-2 hidden sm:block text-center">Codenames</h1>
   <div class="grow">
      <div class="flex gap-2 items-center justify-center mb-2 text-lg">
         <div class="flex flex-col gap-px">
            <span class="text-sm">Table hash:</span>
            <input name="seed" class="w-28 font-semibold" x-model="seed" readonly />
         </div>
         <button x-on:click="randomSeed" x-bind:disabled="locked">
            New seed
         </button>
         <button class="py-1 px-3 text-white rounded" x-text="locked ? 'Unlock' : 'Lock'"
                  x-on:click.prevent="locked = !locked"></button>
      </div>
      <div class="flex gap-2 items-center justify-center text-lg">
         <button x-on:click.prevent="isMaster=!isMaster" x-bind:disabled="locked" x-text="isMaster ? 'As Operative' : 'As Spymaster'">
         </button>
         <button x-on:click.prevent="$store.game.openSets" x-bind:disabled="locked">
            Change set
         </button>
         <button x-on:click.prevent="restartGame" x-bind:disabled="locked">
            Restart
         </button>
         <button x-on:click.prevent="if(window.confirm('Are you sure?')){$store.game.current='menu'}" x-bind:disabled="locked">Back</button>
      </div>
      <ul class="flex justify-center gap-3 font-semibold text-lg mt-3">
         <li class="text-blue-500">Blue team: <span x-text="blueRemaining"></span> remaining</li>
         <li class="text-red-500">Red team: <span x-text="redRemaining"></span> remaining</li>
      </ul>
   </div>
</div>
</header>
<main class="max-w-3xl py-4 mx-auto mt-36">
<ul class="grid grid-cols-5 gap-1">
   <template x-for="(item, key) in list" x-bind:key="key">
      <li>
         <button class="plain relative border-4 border-transparent text-white" x-bind:title="item.name"
            x-on:click.prevent="toggleItemStatus(key)" x-bind:class="getItemStatus(key)">
            <div class="backdrop absolute inset-0 z-1"></div>
            <img class="pointer-events-none w-36 aspect-[149/193] object-cover"
                  x-bind:alt="item.name"
                  x-bind:src="\`assets/images/\${$store.game.set}/\${item.img}\`" />
            <div x-show="$store.game.characters[$store.game.set].showNames" class="name bg-neutral-500 pt-1 px-2 text-center font-semibold text-base line-clamp-1 tracking-tighter w-full" x-text="item.name"></div>
         </button>
      </li>
   </template>
</ul>
</main>
      `
   }
}
