<script setup lang="ts">
import { PhExport } from "@phosphor-icons/vue";
</script>

<!-- TODO: receive post data from props, including the counters -->

<template>
    <button class="group flex items-center hover:text-sky-700 hover:transition-all duration-300">
        <PhExport
            class="box-content p-2 hover:transition-all duration-300
                   group-hover:rounded-full group-hover:bg-sky-700 group-hover:bg-opacity-20"
            :size="18"/>
    </button>
</template>
