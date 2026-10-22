<template>
    <UModal
        v-model:open="isOpen"
        :title="product?.name"
        :description="categoryLabel"
        :ui="{ content: 'shadow-2xl' }"
    >
        <template #body>
            <div v-if="product" class="space-y-4">
                <div class="relative overflow-hidden  bg-elevated">
                    <img
                        :src="product.imageUrl"
                        :alt="product.name"
                        class="lightbox-in w-full"
                    />
                    <UBadge
                        v-if="product.soldOut"
                        label="Sold Out"
                        color="neutral"
                        class="absolute top-3 left-3"
                    />
                </div>

                <p v-if="product.price" class="font-display text-3xl font-bold tracking-tight">
                    {{ product.price }}
                </p>
                <p>{{ product.description }}</p>

                <div v-if="product.tags?.length" class="flex flex-wrap gap-2">
                    <UBadge
                        v-for="tag in product.tags"
                        :key="tag"
                        :label="tag"
                        color="neutral"
                        variant="outline"
                        class="rounded-full"
                    />
                </div>

                <UButton
                    v-if="product.buyUrl && !product.soldOut"
                    :to="product.buyUrl"
                    target="_blank"
                    trailing-icon="i-lucide-external-link"
                    size="lg"
                    class="rounded-full px-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                    Buy Here
                </UButton>
                <p v-else-if="product.soldOut" class="text-muted">Sold Out</p>
                <p v-else class="text-muted">Not yet available online</p>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import { categories } from "~/data/store";
import type { Product } from "~/types/contentTypes";

// v-model holds the selected product; null means the modal is closed
const product = defineModel<Product | null>({ required: true });

const isOpen = computed({
    get: () => !!product.value,
    set: (open) => {
        if (!open) product.value = null;
    },
});

const categoryLabel = computed(
    () => categories.find((c) => c.value === product.value?.category)?.label ?? "",
);
</script>