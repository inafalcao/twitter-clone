<script setup lang="ts">
import Post from './Post.vue'
import { PostType } from '../post-types'

const posts: PostType[] = [
    {
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1588912035286376448/pr7Oxwsf_400x400.jpg',
            name: 'Ina Monteiro',
            userName: '@inafalcao'
        },
        date: '5h',
        text: 'Kinda neat. Most people don\'t know but you can do similar stuff with commas in Lua or Luau'
    },
    {
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1588912035286376448/pr7Oxwsf_400x400.jpg',
            name: 'Ina Monteiro',
            userName: '@inafalcao'
        },
        date: '12h',
        text: 'Kinda neat. Most people don\'t know but you can do similar stuff with commas in Lua or Luau'
    },
    {
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1588912035286376448/pr7Oxwsf_400x400.jpg',
            name: 'Ina Monteiro',
            userName: '@inafalcao'
        },
        date: 'Apr 18',
        text: 'Kinda neat. Most people don\'t know but you can do similar stuff with commas in Lua or Luau'
    }
]

</script>

<template>
    <Post v-for="post in posts" :post="post" />
</template>
