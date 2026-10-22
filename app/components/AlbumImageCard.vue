<template>
    <UCard
        :ui="{
            root: 'size-full',
            body: 'p-0 sm:p-0 size-full flex items-center justify-center',
        }"
        class="group card-in lift aspect-square w-full cursor-pointer overflow-hidden hover:ring-2 hover:ring-secondary"
    >
        <img
            :src="image.thumbPath"
            :alt="`${title} photo ${image.id}`"
            class="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
            loading="lazy"
            decoding="async"
        />
    </UCard>
</template>

<script setup lang="ts">
    import type { ImageFile } from "~/types/imageCollectionTypes";

    defineProps<{
        title: string;
        image: ImageFile;
    }>();
</script>
