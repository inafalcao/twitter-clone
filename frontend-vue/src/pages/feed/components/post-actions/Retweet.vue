<script setup lang="ts">
import { PhRepeat } from "@phosphor-icons/vue";
</script>

<!-- TODO: receive post data from props, including the counters -->

<template>
    <button class="group flex items-center hover:text-green-700 hover:transition-all duration-300">
        <PhRepeat
            class="box-content p-2 hover:transition-all duration-300
                   group-hover:rounded-full group-hover:bg-green-700 group-hover:bg-opacity-20"
            :size="18"/>
        <span class="pl-1">13</span>
    </button>
</template>
