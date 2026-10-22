<template>
    <UPageGrid>
        <template
            v-for="album in sortedImageManifest"
            :key="album.title"
        >
            <div
                v-if="expandedAlbum === album.title"
                class="album-open col-span-full mb-6"
            >
                <div class="mb-6 flex items-center gap-5">
                    <UButton
                        :label="album.title"
                        icon="lucide:chevron-left"
                        variant="link"
                        color="neutral"
                        size="xl"
                        class="p-0 font-display text-4xl font-bold transition duration-300 hover:-translate-x-1"
                        :ui="{ leadingIcon: 'size-8 shrink-0' }"
                        @click="toggleAlbum(album.title)"
                    />
                    <USeparator class="flex-1" />
                </div>

                <UPageGrid
                    class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                >
                    <AlbumImageCard
                        v-for="(image, i) in album.images"
                        :key="image.id"
                        :style="{ '--i': Math.min(i, 18) }"
                        :title="album.title"
                        :image="image"
                        @click="openImage(album.title, image)"
                    />
                </UPageGrid>
            </div>
            <AlbumPreviewCard
                v-else
                :album="album"
                @select="toggleAlbum(album.title)"
            />
        </template>
    </UPageGrid>

    <UModal
        v-model:open="isOpen"
        :title="selectedImage?.title"
        :ui="{ content: 'bg-default/80 backdrop-blur-xl' }"
        fullscreen
        @update:open="(value) => !value && closeImage()"
    >
        <template #body>
            <div
                class="relative flex h-full items-center justify-center"
                @click="closeImage"
            >
                <img
                    v-if="selectedImage"
                    :src="selectedImage.imageFile.path"
                    :alt="`${selectedImage.title} photo ${selectedImage.imageFile.id}`"
                    class="lightbox-in max-h-[85vh] max-w-full object-contain shadow-2xl"
                    @click.stop
                />
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
    import { useAlbumGallery } from "~/composables/useAlbumGallery";
    import type { AlbumImages } from "~/types/imageCollectionTypes";

    const props = defineProps<{
        manifest: AlbumImages[];
    }>();

    const {
        selectedImage,
        expandedAlbum,
        sortedImageManifest,
        isOpen,
        toggleAlbum,
        openImage,
        closeImage,
    } = useAlbumGallery(props.manifest);
</script>
