<template>
    <div>
        <UPageHero
            id="top"
            :headline="heroInfo.headline"
            :title="heroInfo.title"
            :description="heroInfo.description"
            :ui="{
                headline: 'hero-in [--i:0]',
                title: 'hero-in [--i:1]',
                description: 'hero-in [--i:2]',
            }"
        />
        <AlbumGallery :manifest="ImageManifest" />
    </div>
</template>

<script setup lang="ts">
    import { ImageManifest, heroInfo } from "~/data/gallery";
</script>
