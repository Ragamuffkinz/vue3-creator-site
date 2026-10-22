<template>
    <UCard
        :ui="{ body: 'p-0 sm:p-0', root: 'flex flex-col' }"
        class="group lift cursor-pointer overflow-hidden text-left hover:ring-2 hover:ring-secondary"
        @click="$emit('select')"
    >
        <div
            class="grid aspect-square w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden"
        >
            <div
                v-for="thumb in previewThumbs"
                :key="thumb.id"
                class="aspect-square size-full overflow-hidden"
            >
                <img
                    :src="thumb.thumbPath"
                    :alt="`${album.title} preview`"
                    class="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>

        <div class="p-3">
            <h3 class="truncate font-display text-xl font-bold">
                {{ album.title }}
            </h3>

            <p class="text-sm text-muted">{{ album.images.length }} photos</p>
        </div>
    </UCard>
</template>

<script setup lang="ts">
    import type { AlbumImages } from "~/types/imageCollectionTypes";

    const props = defineProps<{
        album: AlbumImages[][number];
    }>();

    defineEmits<{
        select: [];
    }>();

    const previewThumbs = computed(() => {
        // Preview up to the last 4 photos in the album.
        return props.album.images.slice(-4);
    });
</script>
