<template>
    <UHeader
        toggle-side="left"
        :ui="{
            root: 'bg-default/70 backdrop-blur-xl border-default/70',
        }"
    >
        <template #title>
            <span
                class="group inline-flex items-center gap-2.5 rounded px-4 py-1.5 font-display text-2xl font-extrabold tracking-tight transition duration-300 hover:bg-primary/10"
            >
                <span
                    class="size-2.5 rounded bg-primary transition duration-300 group-hover:scale-150"
                    aria-hidden="true"
                />
                Home
            </span>
        </template>

        <UNavigationMenu
    :items="headerItems"
    class="rounded border border-default bg-muted/60 backdrop-blur"
    :ui="{
        list: 'gap-2 mx-2',
        link: 'rounded px-8 py-1 text-md font-medium transition duration-300 before:rounded before:inset-y-0 hover:before:bg-primary/10',
    }"
/>

        <template #right>
            <UColorModeButton
                class="rounded transition duration-300 hover:rotate-12 hover:bg-primary/10"
            />
        </template>

        <template #body>
            <UNavigationMenu
                :items="headerItems"
                highlight
                orientation="vertical"
                :ui="{
                    list: 'gap-5 px-16',
                    link: 'px-4 py-4 my-4 font-display text-2xl justify-center text-center transition duration-300 before:rounded-2xl before:bg-muted/70 hover:before:bg-primary/15',
                }"
            />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from "@nuxt/ui";
    const router = useRouter();
    // Grabs pages and computes paths to use in navigation header
    const headerItems = computed<NavigationMenuItem[]>(() =>
        router
            .getRoutes()
            .filter(
                (route) =>
                    route.path !== "/" &&
                    route.path !== "/terms" &&
                    route.path !== "/:all(.*)*" &&
                    route.path !== "/404",
            )
            .map((route) => ({
                label: route.path
                    .slice(1)
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase()),
                to: route.path,
            })),
    );
</script>
