<template>
    <div>
        <UPageHero
            id="top"
            :headline="heroInfo.headline"
            :title="heroInfo.title"
            :description="heroInfo.description"
            :links="HeroLinks"
            :ui="{
                headline: 'hero-in [--i:0]',
                title: 'hero-in [--i:1]',
                description: 'hero-in [--i:2]',
                links: 'hero-in [--i:3]',
            }"
        >
            <div class="space-y-8">
                <div
                    class="hero-media flex items-center justify-center bg-elevated"
                >
                    <img
                        :src="heroImage"
                        alt="Featured artwork"
                        class="h-full w-full object-cover"
                    />
                </div>

                <!-- Site nav, same routes as the header -->
                <nav class="hero-in flex flex-wrap justify-center gap-5 [--i:6]">
                    <UButton
                        v-for="item in navItems"
                        :key="item.to as string"
                        :label="item.label"
                        :to="item.to"
                        color="neutral"
                        variant="soft"
                        size="lg"
                        class="rounded-full px-7 font-display text-2xl font-semibold transition duration-300 hover:-translate-y-1 hover:bg-primary/15 hover:shadow-lg"
                    />
                </nav>
            </div>
        </UPageHero>
    </div>
</template>

<script setup lang="ts">
import { HeroLinks, heroImage, heroInfo } from "~/data/index";

const navItems = useNavItems();
</script>
