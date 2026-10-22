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

        <USeparator />

        <UPageSection id="products">
            <!-- Filter bar -->
            <div class="hero-in flex flex-wrap gap-2 [--i:3]">
                <UButton
                    v-for="cat in categories"
                    :key="cat.value"
                    :variant="activeCategory === cat.value ? 'solid' : 'outline'"
                    color="primary"
                    class="rounded-full px-4 transition duration-300 hover:-translate-y-0.5"
                    @click="activeCategory = cat.value"
                >
                    {{ cat.label }}
                    <UBadge
                        :label="String(countFor(cat.value))"
                        color="neutral"
                        variant="subtle"
                        size="sm"
                        class="rounded-full"
                    />
                </UButton>
            </div>

            <!-- Product grid: fades out, swaps, and staggers back in on filter -->
            <Transition name="swap" mode="out-in">
                <UPageGrid
                    v-if="filteredProducts.length"
                    :key="activeCategory"
                >
                    <ProductCard
                        v-for="(product, i) in filteredProducts"
                        :key="product.id"
                        :product="product"
                        :style="{ '--i': Math.min(i, 12) }"
                        @click="selected = product"
                    />
                </UPageGrid>

                <p v-else key="empty" class="py-16 text-center text-muted">
                    No products in this category yet.
                </p>
            </Transition>
        </UPageSection>

        <!-- Product detail modal -->
        <ProductModal v-model="selected" />
    </div>
</template>

<script setup lang="ts">
import {
    heroInfo,
    categories,
    products,
} from "~/data/store";
import type { Product, ProductCategory } from "~/types/contentTypes";

type FilterValue = ProductCategory | "all";

const activeCategory = ref<FilterValue>("all");
const selected = ref<Product | null>(null);

const filteredProducts = computed(() =>
    activeCategory.value === "all"
        ? products
        : products.filter((p) => p.category === activeCategory.value),
);

const countFor = (value: FilterValue) =>
    value === "all"
        ? products.length
        : products.filter((p) => p.category === value).length;

const categoryLabel = (cat?: ProductCategory) =>
    categories.find((c) => c.value === cat)?.label ?? "";
</script>