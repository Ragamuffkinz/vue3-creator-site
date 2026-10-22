<template>
    <UFooter class="bg-default/60 backdrop-blur-xl">
        <template #left>
            <p class="text-muted text-sm">
                Copyright Jessica Lovett © {{ new Date().getFullYear() }}
            </p>
        </template>

        <UNavigationMenu
            :items="footerLinks"
            variant="link"
        />

        <template #right>
            <UTooltip
                v-for="button in footerButtons"
                :key="button.label"
                :text="button.label"
            >
                <UButton
                    :icon="button.icon"
                    color="neutral"
                    variant="ghost"
                    class="rounded-full transition duration-300 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary"
                    :to="button.to"
                    target="_blank"
                    :aria-label="button.label"
                />
            </UTooltip>
        </template>
    </UFooter>
</template>

<script setup lang="ts">
    import { footerButtons, footerLinks } from "~/data/footer";
</script>
