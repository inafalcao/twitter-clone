<script setup lang="ts">
import { PostType, UserType } from '../post-types'

const props = defineProps<{post: PostType}>()

</script>

<template>
    <div class="flex gap-3 p-3 border-solid border-b border-gray-600">
        <img class="rounded-full self-start"
            :src="post.user.profileImage" width="48" height="48" />
        <div>
            <header class="flex gap-1">
                <h1 class="font-bold">{{ post.user.name }}</h1>
                <span class="text-gray-500">{{ post.user.userName }}</span>
                &#x2022;
                <span class="text-gray-500">{{ post.date }}</span>
            </header>
            <p>{{ post.text }}</p>
            <div></div>
        </div>
    </div>
</template>
