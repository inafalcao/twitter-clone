<script setup lang="ts">
import { PhChartBar } from "@phosphor-icons/vue";
</script>

<!-- TODO: receive post data from props, including the counters -->

<template>
    <button class="group flex items-center hover:text-sky-700 hover:transition-all duration-300">
        <PhChartBar
            class="box-content p-2 hover:transition-all duration-300
                   group-hover:rounded-full group-hover:bg-sky-700 group-hover:bg-opacity-20"
            :size="18"/>
        <span class="pl-1">13</span>
    </button>
</template>
