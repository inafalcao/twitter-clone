<script setup lang="ts">
import { PostType, UserType } from '../post-types'
import { PhChartBar, PhHeart, PhExport, PhChatCircle, PhRepeat } from "@phosphor-icons/vue";
import Like from './post-actions/Like.vue';
import Retweet from './post-actions/Retweet.vue';
import Views from './post-actions/Views.vue';
import Share from './post-actions/Share.vue';
import Reply from './post-actions/Reply.vue';

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

            <footer class="flex justify-between items-center pt-3 pr-10 text-gray-500">
                <Reply />

                <Retweet />

                <Like />

                <Views />

                <Share />
            </footer>
        </div>
    </div>
</template>
