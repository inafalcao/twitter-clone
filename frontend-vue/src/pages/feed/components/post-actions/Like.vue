<script setup lang="ts">
import { PhHeart } from "@phosphor-icons/vue";
</script>

<!-- TODO: receive post data from props, including the counters -->

<template>
    <!-- TODO: do heart animation when clicking -->
    <!-- TODO: if post is clicked, already show it red -->
    <!-- TODO: roll animation for the counter -->
    <button class="group flex items-center hover:text-rose-700 hover:transition-all duration-300">
        <PhHeart
            class="box-content p-2 hover:transition-all duration-300
                   group-hover:rounded-full group-hover:bg-rose-700 group-hover:bg-opacity-20"
            :size="18"/>
        <span class="pl-1">13</span>
    </button>
</template>
