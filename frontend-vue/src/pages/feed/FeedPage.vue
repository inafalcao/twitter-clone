<script setup lang="ts">
import PostList from './components/PostList.vue'

// TODO: get list from the api
const post = {
    userName: 'Ina Monteiro',
    userAt: '@inafalcao',
    message: 'Kinda neat!'
}
</script>

<template>
  <div class="grid grid-cols-3 place-content-center">
    <!-- TODO: nav component -->
    <nav clss="flex flex-colum items-end w-[275px] bg-red-500">
      <header>
        logo
      </header>
      <ul>
        <li>item 1</li>
        <li>item 1</li>
      </ul>
    </nav>

    <main class="max-w-[600px] border-x border-gray-600">
      <div class="">
        <h1 class="p-3">Home</h1>
        <!-- TODO: tweet component -->
        <PostList></PostList>
      </div>
    </main>
    <aside>aqui outras coisas</aside>
  </div>
</template>
