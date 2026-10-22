<template>
    <UPageCard
        :title="product.name"
        :description="product.description"
        variant="soft"
        spotlight
        spotlight-color="primary"
        class="group card-in lift cursor-pointer hover:ring-2 hover:ring-secondary/70"
        :class="{ 'opacity-70': product.soldOut }"
    >
        <template #header>
            <div
                class="relative aspect-square overflow-hidden rounded-xl bg-elevated"
            >
                <img
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="size-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                />
                <UBadge
                    v-if="product.soldOut"
                    label="Sold Out"
                    color="neutral"
                    class="absolute top-3 left-3"
                />
            </div>
        </template>

        <template #footer>
            <div class="flex items-center justify-between gap-2">
                <span class="font-display text-xl font-bold tracking-tight">{{ product.price }}</span>
                <UButton
                    v-if="product.buyUrl && !product.soldOut"
                    :to="product.buyUrl"
                    target="_blank"
                    trailing-icon="i-lucide-external-link"
                    size="sm"
                    class="rounded-full px-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    @click.stop
                >
                    Buy Here
                </UButton>
                <span v-else-if="product.soldOut" class="text-muted text-sm">
                    Sold Out
                </span>
            </div>
        </template>
    </UPageCard>
</template>

<script setup lang="ts">
import type { Product } from "~/types/contentTypes"

defineProps<{
    product: Product;
}>();
</script>